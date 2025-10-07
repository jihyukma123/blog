import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-10rem)] text-center px-8">
      <h1 className="text-7xl font-bold mb-6 text-gray-700 dark:text-gray-300">
        404
      </h1>
      <p className="text-3xl font-semibold mb-4 dark:text-gray-200 text-gray-800">
        찾으시는 페이지가 없네요!
      </p>
      <p className="text-lg mb-10 text-gray-600 dark:text-gray-400 max-w-md">
        요청하신 페이지를 찾을 수 없습니다. 주소를 다시 확인해주세요.
      </p>
      <Link
        to="/"
        className="px-8 py-4 bg-[slateblue] text-white text-lg font-semibold rounded-lg hover:bg-[#5b4b9f] hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out shadow-lg"
      >
        홈으로 돌아가기
      </Link>
    </div>
  );
};

export default NotFoundPage;
