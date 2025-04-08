import Image from 'next/image';
import gaJerkHero from '../../public/gaJerk-hero.crop.png'
import React from "react";
import Slider from "react-slick";
import Link from "next/link";


const Hero = () => {
  var settings = {
    dots: true,
   
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    waitForAnimate: false,
    };
  return (
    <section >
    <Slider className= " min-h-85 text-black  " {...settings}>
    <div className='h-85'>
        <Link href="?/shop">
        <Image src={gaJerkHero} 
        alt={''} 
        priority
        fill
        className=''/>
        </Link>
        </div>

        <div className='h-85'>
        <Link href="?/shop">
        <Image src={gaJerkHero} 
        alt={''} 
        priority
        fill
        className=''/>
        </Link>
        </div>

        <div className='h-85'>
        <Link href="?/shop">
        <Image src={gaJerkHero} 
        alt={''} 
        priority
        fill
        className=''/>
        </Link>
        </div>
   
    </Slider>
    </section>
  )
}
export default Hero