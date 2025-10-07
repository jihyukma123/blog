import React from "react";

const Introduction: React.FC = () => {
  return (
    <section className="w-full py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-gray-100">
            안녕하세요 👋
          </h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
            웹 애플리케이션을 만들고 배운 것들을 글로 공유하는 것을 좋아하는
            개발자입니다.
          </p>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
            이곳은 코드에 대해 생각하고, 배운 내용을 기록하며, 프로젝트를
            공유하는 저만의 공간입니다.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
