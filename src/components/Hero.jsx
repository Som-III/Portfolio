import Section from "./Section"
import { brainwave, curve } from "../assets"
import Button from "./Button"
const Hero = () => {
  return (
    <Section
    className="pt-[12rem] -mt-[5.25]" id="hero"
    >
        <div className="container relative">
            <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-40 lg:mb:[6rem]">
                <h1 className="h1 pb-8 mb-6">
                    Som 
                    <span className="inline-block relative ">
                        Moroliya 
                        <img src={curve} className="absolute top-full bottom-0 left-0 w-full xl:-mt-2" 
                        width={624}
                        height={28}
                        alt="curve"/>
                    </span>
                </h1 >
                <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
                    skibbidy bibbidy boop boop spofjsfps affpfspfafaffffm aknnanaonanadawda
                </p>
                <Button white href="#contact" >Contact Me.</Button>
            </div>

            <div></div>
        </div>
    </Section>
  )
}
//hero section contains 3 parts one vertical flip and left vertical has 2 horrizontal
export default Hero
//empty div is container of rest of hero
