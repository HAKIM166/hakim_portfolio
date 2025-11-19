"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
export default function WorkSliderBtns({
  containerStyles,
  btnStyles,
  iconsStyle,
}) {
  const swiper = useSwiper();
  return (
    <div className={containerStyles}>
      <button className={btnStyles}>
        <PiCaretLeftBold className={iconsStyle} onClick={() => swiper.slidePrev()} />
      </button>
      <button className={btnStyles}>
        <PiCaretRightBold className={iconsStyle} onClick={() => swiper.slideNext()}/>
      </button>
    </div>
  );
}
