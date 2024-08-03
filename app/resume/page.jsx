"use client";
import React from "react";
import {
  FaCss3,
  FaHtml5,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaSass
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs, SiMongodb, SiCplusplus,SiExpress } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

import { Viewer, Worker } from "@react-pdf-viewer/core";

// Plugins
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

// Import styles
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { getFilePlugin } from "@react-pdf-viewer/get-file";

const about = {
  title: "About Me",
  description: "Engineer by Education, Web Developer by Passion, Technology Explorer by Interest.",
  info: [
    {
      fieldName: "Name :",
      fieldValue: "Arghadip Shee",
    },
    {
      fieldName: "Phone :",
      fieldValue: "+91 84204 48228",
    },
    {
      fieldName: "Experience :",
      fieldValue: "2+ Years",
    },
    {
      fieldName: "Email :",
      fieldValue: "agdipc9@gmail.com",
    },
    {
      fieldName: "Location :",
      fieldValue: "New Delhi",
    },
    {
      fieldName: "Nationality :",
      fieldValue: "Indian",
    },
    {
      fieldName: "Freelance :",
      fieldValue: "Available",
    },
    {
      fieldName: "Language :",
      fieldValue: "English, Hindi, Bengali",
    },
  ],
};

const experience = {
  icon: "/assets",
  title: "My Experience",
  description: "I am in the middle of my learning phase and early in my career phase. There are the listed companies who supported me to grow in my career.",
  items: [
    {
      company: "Frankfinn Aviation Services",
      position: "Tele Councellor",
      duration: "Aug-2023 - Aug,2023",
    },
    {
      company: "Vishveshwarya Group Of Instituion",
      position: "Social Media Intern",
      duration: "Aug,2022 - Jan,2023",
    },
  ],
};

const education = {
  icon: "/assets",
  title: "My Education",
  description: `"A man learns all his life and dies the day he thinks that he has learnt everything." These are only things that exists in paper. There are more lessons that I owns.`,
  items: [
    {
      instituition: "AKTU, Lucknow",
      degree: "B. Tech, CSE",
      duration: "Jul,2023",
    },
    {
      instituition: "E & ICT Academy, IIT Kanpur",
      degree: "MERN Stack",
      duration: "Jun,2023",
    },
    {
      instituition: "WBCHSE, West Bengal",
      degree: "Intermediate",
      duration: "April,2019",
    },
    {
      instituition: "WBBSE, West Bengal",
      degree: "Matriculation",
      duration: "Apr,2017",
    },
  ],
};

const skills = {
  title: "My Skills",
  description:
    ` Being a Technocrat, I have skills that all can't be displayed here, So the important ones are listed.`,
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML 5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS",
    },
    {
      icon: <FaSass />,
      name: "SCSS",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaReact />,
      name: "React.Js",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.Js",
    },
    {
      icon: <SiTailwindcss />,
      name: "TailwindCSS",
    },
    {
      icon: <FaNodeJs />,
      name: "NodeJs",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
    {
      icon: <SiMongodb />,
      name: "MongoDB",
    },
    {
      icon: <SiExpress />,
      name: "ExpressJs",
    },
    {
      icon: <SiCplusplus />,
      name: "C++",
    },
  ],
};

const Resume = () => {
  // const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const getFilePluginInstance = getFilePlugin();
  const { DownloadButton } = getFilePluginInstance;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.2, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="skills"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about"> About Me</TabsTrigger>
            <TabsTrigger value="resume"> Resume</TabsTrigger>
          </TabsList>
          {/* Content  */}
          <div className="min-h-[70vh] w-full">
            {/* Experience  */}
            <TabsContent value="experience" className="w-full ">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[180px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items:start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[40px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* Education  */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[180px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items:start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[40px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.instituition}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* Skills  */}
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            {/* About Me  */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            {/* Resume */}
            <TabsContent value="resume" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left relative z-0">
                <h3 className="text-4xl font-bold">Resume Viewer</h3>
                <ScrollArea className="h-[500px]  rounded-xl relative">
                  <div className="absolute bg-red-500 rounded-full mx-2 my-2 text-sm z-10 px-2 py-1 items-center justify-center ">
                    <DownloadButton />
                  </div>
                  <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
                    <Viewer
                      fileUrl="/assets/Arghadip_Shee_Web_Developer.pdf"
                      plugins={[
                        // Register plugins
                        getFilePluginInstance,
                      ]}
                    />
                  </Worker>
                </ScrollArea>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
