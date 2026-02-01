const messages = {
  "nav.blog": "블로그",
  "nav.about": "소개",
  "home.hero.line1": "안녕하세요, Alex입니다.",
  "home.hero.line2Lead": "",
  "home.hero.line2Highlight": "디지털 가든",
  "home.hero.line2Tail": "에 오신 걸 환영해요.",
  "home.hero.subtitle":
    "자바스크립트와 차분한 디자인, 그리고 웹을 만드는 이야기를 씁니다. 코드와 철학, 그리고 가끔씩은 작은 스케치까지 기록하는 공간이에요.",
  "home.hero.cta": "About Me",
  "home.latestWritings": "최신 글",
  "home.readArticle": "글 읽기",
  "home.article1.title": "React Hooks로 사고하기",
  "home.article1.date": "2023년 10월 24일",
  "home.article1.readTime": "읽는 시간 8분",
  "home.article1.excerpt":
    "프레임워크와 싸우지 않기 위한 멘탈 모델을 정리합니다. 의존성 배열의 '왜'를 이해하고 클로저 함정을 피하는 방법을 살펴봅니다.",
  "home.article2.title": "왜 Next.js를 선택했나",
  "home.article2.date": "2023년 9월 12일",
  "home.article2.readTime": "읽는 시간 5분",
  "home.article2.excerpt":
    "성능만큼이나 중요한 개발 경험. CRA에서 Next.js 생태계로 옮기며 느낀 결정적 이유를 정리했습니다.",
  "home.article3.title": "디지털 가드닝 101",
  "home.article3.date": "2023년 8월 5일",
  "home.article3.readTime": "읽는 시간 12분",
  "home.article3.excerpt":
    "블로그를 고정된 아카이브가 아니라 살아있는 생태계로 바라봅니다. 배움의 과정을 공개하며 아이디어를 키우는 법을 소개합니다.",
  "home.article4.title": "CSS Grid의 즐거움",
  "home.article4.date": "2023년 7월 15일",
  "home.article4.readTime": "읽는 시간 6분",
  "home.article4.excerpt":
    "float와 flexbox 해킹을 내려놓고, CSS Grid가 레이아웃을 얼마나 쉽게 만드는지 다시 살펴봅니다.",
  "newsletter.title": "소식 받기",
  "newsletter.description":
    "새 글이 올라올 때 알려드릴게요. 스팸 없이, 한 달에 한 번 따뜻한 개발 소식만 전해요.",
  "newsletter.placeholder": "your@email.com",
  "newsletter.button": "구독하기",
  "newsletter.footnote": "2,000명 이상의 개발자가 함께하고 있어요.",
  "footer.builtWith": "Next.js와 함께 만들었습니다.",
  "article.category1": "엔지니어링",
  "article.category2": "리액트",
  "article.title": "React Hooks로 사고하기: 현대 상태 관리의 멘탈 모델",
  "article.date": "2023년 10월 24일",
  "article.readTime": "읽는 시간 8분",
  "article.toc.introduction": "소개",
  "article.toc.dependency": "의존성 배열의 오해",
  "article.toc.breaking": "습관을 깨기",
  "article.toc.conclusion": "마무리",
  "article.markdown": `
## 소개

React Hooks는 모든 것을 바꿨습니다. 단순한 새로운 API가 아니라 **멘탈 모델**의
전환이었죠. 클래스 컴포넌트에서 함수 컴포넌트와 훅으로 옮길 때 우리는
라이프사이클을 떠올리기보다 *동기화*를 먼저 생각해야 합니다.

## 의존성 배열의 오해

훅을 처음 쓰는 개발자가 가장 많이 실수하는 지점은 \`useEffect\` 의존성 배열입니다.
우리는 종종 이를 트리거처럼 생각합니다: "X가 바뀌면 이 코드를 실행해." 물론
실무적으로는 맞지만, 이 관점은 오래된 클로저 같은 버그를 만들어냅니다.

\`\`\`js
useEffect(() => {
  const interval = setInterval(() => {
    // 이 count는 오래된 값일 수 있습니다!
    setCount(count + 1);
  }, 1000);
  return () => clearInterval(interval);
}, []); // 빈 배열이면 한 번만 실행됩니다
\`\`\`

대신 훅을 "컴포넌트 상태를 외부 세계와 동기화하는 방법"으로 바라보세요.
DOM이든 구독이든, 데이터 요청이든, 훅은 UI가 항상 최신 상태를 반영하도록
도와줍니다.

## 습관을 깨기

전환에는 시간이 걸립니다. \`useRef\`로 인스턴스 변수를 흉내 내거나 \`useMemo\`를
과하게 쓰게 될 거예요. 핵심은 React의 선언적 특성을 믿는 것입니다.

> "가장 중요한 점은 훅이 함수라는 사실입니다. 다만 기억을 가진 함수라는 점이죠."

## 마무리

React 여정을 이어가면서 커스텀 훅을 계속 실험해 보세요. 로직 재사용에 가장
강력한 도구이며, 컴포넌트를 깔끔하고 집중된 상태로 유지하게 해줍니다.
`,
  "article.labels.toc": "목차",
  "article.labels.backToHome": "홈으로 돌아가기",
  "article.labels.previous": "이전 글",
  "article.labels.next": "다음 글",
  "article.adjacent.previousTitle": "왜 Next.js를 선택했나",
  "article.adjacent.nextTitle": "디지털 가드닝 101",
} as const;

export default messages;
