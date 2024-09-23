import FeedCard from "@/components/FeedCard/page";
import React from "react";
import { BiHash, BiHome, BiUser } from "react-icons/bi";
import { BsBell, BsBookmark, BsEnvelope } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { SlOptions } from "react-icons/sl";

interface TwitterSidebarButton {
  title: string;
  icon: React.ReactNode;
}

const sidebarMenuItems: TwitterSidebarButton[] = [
  {
    icon: <BiHome />,
    title: "Home",
  },
  {
    icon: <BiHash />,
    title: "Explore",
  },
  {
    icon: <BsBell />,
    title: "Notification",
  },
  {
    icon: <BsEnvelope />,
    title: "Messages",
  },
  {
    icon: <BsBookmark />,
    title: "Bookmarks",
  },
  {
    icon: <BiUser />,
    title: "Profile",
  },
  {
    icon: <SlOptions />,
    title: "More Options",
  },
];
export default function Home() {
  return (
    <div className="px-56 grid grid-cols-12 h-screen w-screen">
      <div className="col-span-3  pt-8">
        <div className="text-3xl h-fit w-fit hover:bg-gray-600 rounded-full p-2 cursor-pointer">
          <FaXTwitter />
        </div>
        <div className="mt-4 font-semibold text-2xl">
          <ul>
            {sidebarMenuItems.map((items) => {
              return (
                <li
                  className="flex justify-start items-center gap-4 hover:bg-gray-800 rounded-full cursor-pointer px-3 py-3 w-fit mt-2"
                  key={items.title}
                >
                  <span className="text-3xl">{items.icon}</span>
                  <span>{items.title}</span>
                </li>
              );
            })}
          </ul>
          <div className="mt-5 px-3">
            <button className="bg-[#1DA1F2] font-semibold text-lg text-white w-full  rounded-full py-2 px-4     ">
              Tweet
            </button>
          </div>
        </div>
      </div>
      <div className="col-span-6 border-r-[1px] border-l-[1px] h-screen overflow-scroll     border-gray-600">
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard /> <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
      </div>
      <div className="col-span-3"></div>
    </div>
  );
}
