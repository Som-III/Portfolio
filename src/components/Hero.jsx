import Section from "./Section"
import { brainwave, curve, heroBackground } from "../assets"
import { robot } from "../assets"
import Button from "./Button"
const Hero = () => {
  return (
    <Section
    className="pt-[12rem] -mt-[5.25rem]" id="hero" customPaddings={true}
    >
        <div className="container relative flex">
            <div className="relative z-1 max-w-[62rem] mx-auto text-center  mb-[4rem] md:mb-40 lg:mb:[4rem]">
                <h1 className="h1 pb-8 mb-6">
                    Som{` `} 
                    <span className="inline-block relative ">
                        Moroliya 
                        <img src={curve} className="absolute top-full bottom-0 left-0 w-full xl:-mt-2" 
                        width={624}
                        height={28}
                        alt="curve"/>
                    </span>
                </h1 >
                <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
                    skibbidy bibbidy boop boop spofjsfpsvxvfvvsgfgf  affpfspfafaffffm aknnanaonanadawda
                </p>
                <Button white href="#contact" >Contact Me.</Button>
            </div>

            <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-4">
                <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
                    <div className="relative bg-n-8 rounded-[1rem]">
                        <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]"/>
                        <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                            <img src={robot} className="w-full scale-[1.7] translate-y-[8%]"/>
                        </div>
                    </div>
                </div>
                <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[150%] lg:-top-[104%]">
                    <img src={heroBackground} className="w-full"  width={1440} height={1800} alt="hero"/>
                </div>

            </div>
        </div>
    </Section>
  )
}
//hero section contains 3 parts one vertical flip and left vertical has 2 horrizontal
export default Hero
//empty div is container of rest of hero

//inspect-> container as flex
//1:05:15 for parallax
//in notification.jsx