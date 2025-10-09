/// <reference types="vite/client" />

// Vite의 import.meta.glob 타입 정의
interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  // 다른 환경 변수들...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
  readonly glob: (
    pattern: string,
    options?: {
      query?: string;
      import?: string;
      eager?: boolean;
      as?: string;
    }
  ) => Record<string, () => Promise<unknown>>;
}
