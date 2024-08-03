"use client";
import React from "react";
import { useSwiper } from "swiper/react";
import { MdArrowCircleLeft, MdArrowCircleRight } from "react-icons/md";

const WorkSliderButton = ({ containerStyles, btnStyles, iconStyles }) => {
  const swiper = useSwiper();
  return (
    <div className={containerStyles}>
      <button className={btnStyles} onClick={() => swiper.slidePrev()}>
        <MdArrowCircleLeft className={iconStyles} />
      </button>
      <button className={btnStyles} onClick={() => swiper.slideNext()}>
        <MdArrowCircleRight className={iconStyles} />
      </button>
    </div>
  );
};

export default WorkSliderButton;
