"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import photo1 from "../../../public/sliderImages/1.jpg";
import photo2 from "../../../public/sliderImages/2.jpg";
import photo3 from "../../../public/sliderImages/3.jpg";
import photo4 from "../../../public/sliderImages/4.jpg";
import photo5 from "../../../public/sliderImages/5.jpg";
// import style from "./slideshow.module.css";

const slideshowImages: StaticImageData[] = [
  photo1,
  photo2,
  photo3,
  photo4,
  photo5,
];

function Slideshow() {
  const [slideImage, setSlideImage] = useState(slideshowImages[1]);
  return (
    <div className="w-2/3">
      <Image
        src={slideImage}
        alt="Placement Overview Photos"
        className="h-screen w-auto"
      />
    </div>
  );
}

export default Slideshow;
