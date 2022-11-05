import Link from "next/link";

export default function MainPage() {
  return (
    <div className="h-screen">
      <div className="w-full h-screen bg-orange-400 flex justify-center items-center flex-col">
        <div className="text-5xl text-white mx-4 font-bold ">CN교과서</div>
        <div className="text-xl text-white m-2">Team Moveto</div>
      </div>

      <div className="bg-orange-50/50 h-1/2 w-full grid grid-cols-2 gap-4 p-4 md:p-6 md:gap-6 lg:p-8 lg:gap-8 lg:grid-cols-4">
        <Link
          href="/download"
          className=" bg-white hover:bg-orange-600 hover:text-white hover:scale-105 transition duration-300 text-black flex justify-center items-center rounded-xl shadow-lg"
        >
          <div className="text-xl font-semibold">다운로드</div>
        </Link>
        <Link
          href="https://forms.gle/VY4MvK6tLBKgucfNA"
          className=" bg-white hover:bg-orange-600 hover:text-white hover:scale-105 transition duration-300 text-black flex justify-center items-center rounded-xl shadow-lg"
        >
          <div className="text-xl font-semibold">앱 기능 제안하기</div>
        </Link>
        <Link
          href="https://moveto.kr"
          className=" bg-white hover:bg-orange-600 hover:text-white hover:scale-105 transition duration-300 text-black flex justify-center items-center rounded-xl shadow-lg"
        >
          <div className="text-xl font-semibold">Team Moveto</div>
        </Link>
        <Link
          href="https://toss.me/hyunwo/3000"
          className=" bg-white hover:bg-orange-600 hover:text-white hover:scale-105 transition duration-300 text-black flex justify-center items-center rounded-xl shadow-lg"
        >
          <div className="text-xl font-semibold">☕개발자 커피 사주기</div>
        </Link>
      </div>
    </div>
  );
}
