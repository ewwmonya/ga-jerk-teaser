import Image from "next/image";
import gaJerkHero from "../../public/gaJerk-hero2.png";
import React from "react";
import Slider from "react-slick";
import Link from "next/link";

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
  };

  return (
<section className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
<Slider {...settings} className='h-full w-full'>
        
<div className='relative h-screen w-full'>
            <Image
              src={gaJerkHero}
              alt=''
              fill
              className=''
              priority
            />
    <p className="absolute inset-2.5 text-white text-7xl">Hello</p>
          </div>


      
      </Slider>
    </section>
  );
};

export default Hero;
