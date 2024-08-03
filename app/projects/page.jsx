"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import { FaJs, FaReact, FaNodeJs, FaSass } from "react-icons/fa";
import {
  SiMongodb,
  SiFirebase,
  SiExpress,
  SiTailwindcss,
  SiSocketdotio,
  SiNextdotjs,
} from "react-icons/si";
import WorkSliderButton from "@/components/WorkSliderButton";

const projects = [
  {
    num: "01",
    category: "e-Commerce Platform",
    title: "Project 1",
    description:
      "SparkFly is a Multi vendor e-Commerce Platform made using MERN Stack along with TailwindCSS. Socket.IO is being used for Real time Chat with the Seller. This is my Final year project during my Graduation. All validations are available in this project",
    stack: [
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "ExpressJs", icon: <SiExpress /> },
      { name: "ReactJs", icon: <FaReact /> },
      { name: "NodeJs", icon: <FaNodeJs /> },
      { name: "Socket.IO", icon: <SiSocketdotio /> },
      { name: "TailwindCSS", icon: <SiTailwindcss /> },
    ],
    image: "/assets/work/project2.png",
    live: "https://sparkfly.vercel.app/",
    github: "https://github.com/TheBawMan/sparkfly",
  },
  {
    num: "02",
    category: "Student Registration Portal",
    title: "Project 2",
    description:
      "It is a Student Registration Portal where students can register themselves for Scholarships. Made using MERN Stack and has an Admin Panel for getting all the data.",
    stack: [
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "ExpressJs", icon: <SiExpress /> },
      { name: "ReactJs", icon: <FaReact /> },
      { name: "NodeJs", icon: <FaNodeJs /> },
      { name: "TailwindCSS", icon: <SiTailwindcss /> },
    ],
    image: "/assets/work/project1.png",
    live: "https://satyagrah-frontend.vercel.app/",
    github: "https://satyagrah-frontend.vercel.app/",
  },
  {
    num: "03",
    category: "TheBawMan 2.0",
    title: "Project 3",
    description:
      "Thebawman 2.0 is my modified Portfolio website. It is being made using Next.Js, TailwindCSS, Firebase.",
    stack: [
      { name: "NextJs", icon: <SiNextdotjs /> },
      { name: "TailwindCSS", icon: <SiTailwindcss /> },
      { name: "FireBase", icon: <SiFirebase /> },
      { name: "JavaScript", icon: <FaJs /> },
    ],
    image: "/assets/work/project3.png",
    live: "/",
    github: "https://github.com/TheBawMan/portfolio-v2",
  },
  {
    num: "04",
    category: "TheBawMan 1.0(Depricated)",
    title: "Project 4",
    description:
      "This is the old version of my portfolio website. It was made using ReactJs & SAAS. Now the project has been depricated.",
    stack: [
      { name: "ReactJs", icon: <FaReact /> },
      { name: "SASS", icon: <FaSass /> },
      { name: "JavaScript", icon: <FaJs /> },
    ],
    image: "/assets/work/project4.png",
    live: "https://old-thebawman.vercel.app/",
    github: "https://github.com/TheBawMan/portfolio",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.2, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num  */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* project title  */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category}
              </h2>
              {/* project category  */}

              {/* project description  */}
              <p className="text-white/60 ">{project.description}</p>
              {/* project stack  */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger>
                            <div className="text-4xl group-hover:text-accent transition-all duration-300">
                              {item.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{item.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  );
                })}
              </ul>
              {/* border  */}
              <div className="border border-white/20"></div>
              {/* buttons  */}
              <div className="flex items-center gap-4">
                {/* live project  */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github link  */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          {/* swiper  */}
          <div className="w-full xl:w-[50%] ">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className=" mb-12 rounded-xl"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full ">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay  */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>

                      {/* image  */}
                      <div className="rounded-xl relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          sizes="(max-width:640px)"
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* Slider Buttons  */}
              <WorkSliderButton
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)]  z-20 w-full justify-between "
                btnStyles="bg-transparent  text-green-800 text-primary text-[44px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
