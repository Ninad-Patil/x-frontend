import React from "react";
import Image from "next/image";
import { BiMessageRounded, BiUpload } from "react-icons/bi";
import { FaRetweet } from "react-icons/fa6";
import { AiOutlineHeart } from "react-icons/ai";
export default function FeedCard() {
  return (
    <div className="border border-l-0 border-r-0 border-b-0 border-gray-600 p-5 hover:bg-slate-900 transition-all cursor-pointer">
      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-1">
          <Image
            src="https://avatars.githubusercontent.com/u/72431205?s=96&v=4"
            alt="user image"
            height={50}
            width={50}
            className="rounded-full "
          />
        </div>
        <div className="col-span-11">
          <h5>NinadPatil</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
            hic! Voluptas.
          </p>
          <div className="flex justify-between mt-5 text-xl items-center w-[90%]">
            <div>
              <BiMessageRounded />
            </div>
            <div>
              <FaRetweet />
            </div>
            <div>
              <AiOutlineHeart />
            </div>
            <div>
              <BiUpload />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
