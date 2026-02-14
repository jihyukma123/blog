---
title: "React Hooks로 사고하기: 현대 상태 관리의 멘탈 모델"
date: 2023년 10월 24일
dateTime: 2023-10-24
readTime: 읽는 시간 8분
excerpt: 프레임워크와 싸우지 않기 위한 멘탈 모델을 정리합니다. 의존성 배열의 '왜'를 이해하고 클로저 함정을 피하는 방법을 살펴봅니다.
categories:
  - 엔지니어링
  - 리액트
commentCount: 12
---

## 소개

React Hooks는 모든 것을 바꿨습니다. 단순한 새로운 API가 아니라 **멘탈 모델**의
전환이었죠. 클래스 컴포넌트에서 함수 컴포넌트와 훅으로 옮길 때 우리는
라이프사이클을 떠올리기보다 *동기화*를 먼저 생각해야 합니다.

## 의존성 배열의 오해

훅을 처음 쓰는 개발자가 가장 많이 실수하는 지점은 `useEffect` 의존성 배열입니다.
우리는 종종 이를 트리거처럼 생각합니다: "X가 바뀌면 이 코드를 실행해." 물론
실무적으로는 맞지만, 이 관점은 오래된 클로저 같은 버그를 만들어냅니다.

```js
useEffect(() => {
  const interval = setInterval(() => {
    // 이 count는 오래된 값일 수 있습니다!
    setCount(count + 1);
  }, 1000);
  return () => clearInterval(interval);
}, []); // 빈 배열이면 한 번만 실행됩니다
```

대신 훅을 "컴포넌트 상태를 외부 세계와 동기화하는 방법"으로 바라보세요.
DOM이든 구독이든, 데이터 요청이든, 훅은 UI가 항상 최신 상태를 반영하도록
도와줍니다.

## 더 나은 예시: 함수형 업데이트

위 예시는 의존성 배열 문제가 아니라 **상태 업데이트 방식**이 문제의 핵심입니다.
이럴 땐 "현재 값"을 직접 참조하는 대신, React가 제공하는 함수형 업데이트를
사용하면 안전합니다.

```js
useEffect(() => {
  const interval = setInterval(() => {
    setCount((c) => c + 1);
  }, 1000);
  return () => clearInterval(interval);
}, []);
```

포인트는 간단합니다.

- `setCount(count + 1)`은 렌더 시점의 `count`를 캡처합니다.
- `setCount((c) => c + 1)`은 **항상 최신 상태**를 기준으로 계산합니다.

## useEffect는 언제 쓰는가

`useEffect`는 "렌더링 이후에 수행해야 하는 동기화"를 담는 공간입니다. 다음 체크리스트가
도움이 됩니다.

1. 이 로직이 **브라우저 API**(타이머, 이벤트 리스너, IntersectionObserver 등)와 연결되나?
2. 이 로직이 **외부 데이터 소스**(fetch, WebSocket, 구독)와 연결되나?
3. 이 로직이 **DOM에 직접 영향**을 주거나, React 렌더링 밖에서 일이 일어나나?

반대로, UI를 그리는 데 필요한 계산은 effect가 아니라 **렌더링 중**에 계산하는 편이
대부분 더 단순합니다.

## 파생 상태를 피하기

Hooks를 쓰다 보면 "이 값은 state로 둘까? 계산으로 둘까?"를 자주 고민합니다.
대부분의 경우 파생 값은 state가 아니라 계산으로 충분합니다.

```ts
const [query, setQuery] = useState("");
const filtered = items.filter((item) => item.name.includes(query));
```

`filtered`를 state로 만들면, 원본과 파생 값의 동기화를 또 관리해야 합니다. 그 순간부터
버그 가능성이 올라갑니다.

## 커스텀 훅으로 관심사 분리하기

커스텀 훅은 "재사용"뿐 아니라 "의도를 드러내기"에도 강합니다. 예를 들어 입력값을 디바운스하고 싶다면:

```ts
import { useEffect, useState } from "react";

export function useDebouncedValue<T>(value: T, delayMs = 200) {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const id = window.setTimeout(() => setDebounced(value), delayMs);
    return () => window.clearTimeout(id);
  }, [value, delayMs]);

  return debounced;
}
```

이제 컴포넌트는 훨씬 읽기 쉬워집니다.

```ts
const debouncedQuery = useDebouncedValue(query, 250);
```

## 자주 보이는 증상 → 원인 → 해결

| 증상 | 흔한 원인 | 해결 |
| --- | --- | --- |
| effect가 두 번 실행되는 것 같다 | 개발 모드 Strict Mode | "중복 실행"을 견딜 수 있게 effect를 작성 |
| 값이 최신이 아닌 것 같다 | 오래된 클로저, 의존성 누락 | 함수형 업데이트/의존성 포함/리팩터링 |
| 렌더가 너무 잦다 | state로 파생 값을 저장 | 파생 값은 계산으로 |
| 성능 최적화가 끝이 없다 | `useMemo`/`useCallback` 남발 | 병목을 측정한 뒤 최소한만 적용 |

---

아래는 이미지/링크/강조 스타일 확인용 예시입니다.

![Globe](/globe.svg)

- 링크: [React 문서](https://react.dev/)
- 인라인 코드: `useEffect`, `useMemo`
- 강조: **굵게**, *기울임*

## 습관을 깨기

전환에는 시간이 걸립니다. `useRef`로 인스턴스 변수를 흉내 내거나 `useMemo`를
과하게 쓰게 될 거예요. 핵심은 React의 선언적 특성을 믿는 것입니다.

> "가장 중요한 점은 훅이 함수라는 사실입니다. 다만 기억을 가진 함수라는 점이죠."

## 마무리

React 여정을 이어가면서 커스텀 훅을 계속 실험해 보세요. 로직 재사용에 가장
강력한 도구이며, 컴포넌트를 깔끔하고 집중된 상태로 유지하게 해줍니다.
