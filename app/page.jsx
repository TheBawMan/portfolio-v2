"use client";
import React from "react";
import Typewriter from "typewriter-effect";
import { Button } from "@/components/ui/button";
import { FaDownload } from "react-icons/fa";
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import toast, { Toaster } from "react-hot-toast";

const Home = () => {
  return (
    <section className="h-80%">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl inline">
              <Typewriter
                options={{
                  strings: ["Softwere Developer", "Softwere Designer"],
                  autoStart: true,
                  loop: true,
                  cursor: "",
                }}
              />
            </span>
            <h1 className="h1 mt-4">
              <Typewriter
                options={{
                  strings: ["Hello I'm", "  नमस्ते मै", " নমস্কার আমি"],
                  autoStart: true,
                  loop: true,
                  cursor: "",
                  wrapperClassName: "typewriterpara",
                }}
              />{" "}
              <span className="text-accent">Arghadip Shee</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I create elegance in code. Proficient across languages and tech
              stacks, I build seamless digital journeys. Let’s make magic
              happen!
            </p>
            {/* button and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button variant="outline" className=" flex items-center gap-2">
                <FaDownload className="text-lg mb-[5px]" />
                <a href="/assets/Arghadip_Shee_Web_Developer.pdf" target="_blank">
                  Download CV
                </a>
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyle="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
      <Toaster />
    </section>
  );
};

export default Home;
