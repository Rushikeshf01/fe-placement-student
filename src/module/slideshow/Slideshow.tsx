import React,{useState} from 'react'
import Image from "next/image";

const slideshowImages:string[] = ["/sliderImages/1.webp","/sliderImages/2.webp", "/sliderImages/3.webp", "/sliderImages/4.webp","/sliderImages/5.webp"];

function Slideshow() {
    const [images, setImages] = useState(slideshowImages[0])
  return (
    
    
    <div className="w-2/3">
    <div className="w-full h-full bg-gray-200">
        <Image
          src={images}
          alt="Logo"
          width={100}
          height={100}
          className="w-full h-full"
        />
    </div>
  </div>

  )
}

export default Slideshow