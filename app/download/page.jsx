import Image from "next/image";
import Link from "next/link";
import googleplay from "../../public/google-play-badge.png";
import Appstore from "../../public/appstore-badge.svg";

export default function Download() {
  return (
    <div className="bg-orange-50/50">
      <div className="w-full py-24 bg-orange-400 flex justify-center items-center">
        <div className="text-white text-3xl font-semibold">앱 다운로드</div>
      </div>
      <div className="flex flex-col p-4 items-center">
        <Link
          href="https://play.google.com/store/apps/details?id=kr.moveto.cntextbook"
          className=" p-4  w-full flex flex-col items-center"
        >
          <Image src={googleplay} alt="google playstore" width={250}></Image>
        </Link>
        <Link
          href="https://apps.apple.com/us/app/cn%EA%B5%90%EA%B3%BC%EC%84%9C/id6443654907?itsct=apps_box_link&itscg=30200k"
          className=" p-4  w-full flex flex-col items-center"
        >
          <Appstore />
        </Link>
        <Link
          href="/"
          className="bg-orange-400 hover:ring-2 ring-offset-0 hover:ring-offset-2 transition duration-300 hover:bg-orange-500 hover:ring-orange-500 rounded-xl shadow-lg shadow-orange-300 mt-10 p-4 w-[250px] text-center text-white"
        >
          <div className="font-semibold text-xl">Home Page</div>
        </Link>
      </div>
      <div className="bg-orange-50/50 text-center p-4 py-8">
        <div className="text-slate-500">
          Copyright 2022. Team Moveto. All rights reserved.
        </div>
      </div>
    </div>
  );
}
