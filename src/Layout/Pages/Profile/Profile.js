import React from "react";
import { Divider, Link, Stats } from "react-daisyui";
import me from "../../../Static/Images/ME.jpg";
import { BsGithub, BsGlobe, BsLinkedin } from "react-icons/bs";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { RiMessengerLine } from "react-icons/ri";

const Profile = () => {
  return (
    <div className="container mx-auto ">
      <div className="items-center flex gap-4">
        <div className="flex flex-col w-full lg:w-8/12">
          <h1 className="text-4xl text-secondary-content font-serif px-2 mb-5 text-center  lg:text-start">
            Fahim Faisal Khan
          </h1>
          <div className="flex w-full mb-5 lg:hidden justify-center items-center ">
            <img
              className="block max-w-[50%] sm:max-w-[35%] rounded-box "
              src={me}
              alt=""
            />
          </div>
          <div className="flex justify-start items-center px-5 h-20  bg-base-300 rounded-box gap-5">
            <BsGithub size={25} />
            <Link
              className="text-indigo-500"
              href="https://github.com/FahimFaisalKhan"
              target={"_blank"}
            >
              github.com/FahimFaisalKhan
            </Link>
          </div>
          <Divider className="my-1.5"></Divider>
          <div className="flex justify-start items-center px-5 h-20  bg-base-300 rounded-box gap-5">
            <BsLinkedin size={25} />
            <Link
              className="text-indigo-500"
              href="https://www.linkedin.com/in/fahim-faisal-khan/"
              target={"_blank"}
            >
              linkedin.com/in/fahim-faisal-khan
            </Link>
          </div>
          <Divider className="my-1.5"></Divider>
          <div className="flex justify-start items-center px-5 h-20  bg-base-300 rounded-box gap-5">
            <BsGlobe size={25} />
            <Link
              className="text-indigo-500"
              href="https://my-portfolio-b94f4.web.app/"
              target={"_blank"}
            >
              my-portfolio-b94f4.web.app
            </Link>
          </div>
        </div>
        <div className="hidden lg:flex w-full lg:w-4/12  justify-center items-center ">
          <img className="block max-w-[50%] rounded-box " src={me} alt="" />
        </div>
      </div>
      <Stats
        className="stats-vertical  lg:stats-horizontal shadow w-full mt-8  h-auto text-secondary-content"
        style={{ overflow: "visible" }}
      >
        <Link
          href="mailto:khanfahimfaisal@gmail.com"
          target={"_blank"}
          className="justify-items-center hover:scale-[1.1] hover:border-none bg-base-300 transition-all py-5 rounded-sm hover:rounded-lg"
        >
          <Stats.Stat className="justify-items-center ">
            <Stats.Stat.Item variant="title">
              <AiOutlineMail size={25} />
            </Stats.Stat.Item>
            <Stats.Stat.Item
              variant="value"
              className="text-lg  font-bold mt-1.5"
            >
              KhanFahimFaisal@gmail.com
            </Stats.Stat.Item>
          </Stats.Stat>
        </Link>
        <Link
          href="tel:+8801871461409"
          className="justify-items-center hover:scale-[1.1] hover:border-none bg-base-300 transition-all py-5 rounded-sm hover:rounded-lg"
        >
          <Stats.Stat className="justify-items-center ">
            <Stats.Stat.Item variant="title">
              <AiOutlinePhone size={25} />
            </Stats.Stat.Item>
            <Stats.Stat.Item
              variant="value"
              className="text-lg  font-bold mt-1.5"
            >
              +8801871461409
            </Stats.Stat.Item>
          </Stats.Stat>
        </Link>
        <Link
          href="http://m.me/KhanFahimFaisal"
          target={"_blank"}
          className=" hover:scale-[1.1] hover:border-none bg-base-300 transition-all py-5 rounded-sm hover:rounded-lg"
        >
          <Stats.Stat className="justify-items-center ">
            <Stats.Stat.Item variant="title">
              <RiMessengerLine size={25} />
            </Stats.Stat.Item>
            <Stats.Stat.Item
              variant="value"
              className="text-lg  font-bold mt-1.5"
            >
              facebook.com/KhanFahimFaisal
            </Stats.Stat.Item>
          </Stats.Stat>
        </Link>
      </Stats>
    </div>
  );
};

export default Profile;
