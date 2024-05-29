import {brainwave} from "../assets"
import Button from "./Button"
import { useLocation } from "react-router-dom"

// time 30:30
const Header = () => {
    const navItems = [
        { name: 'Home', href: '#hero' },
        { name: 'Somewhere', href: '#somewhere' },
        { name: 'idk wut', href: '#idk' },
        { name: 'lmaoxd', href: '#lmaoxd' }
    ];
    
    const navItemClasses  = `inline-block relative text-2xl uppercase text-n-1 transition-colors hover:text-color-1 px-6 py-6 md:py-8 lr:-mr-0.25 lg:text-xs lg:font-semibold`;
  return (
    //read the tailwind configurations plz and how assets are imported
    <div className="fixed top-0 l-0 w-full z-10 bg-n-8/90 backdrop-blur-sm border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm">
        
        <div className="flex items-center justify-between px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
            <a className="block w-[12rem] xl:mr-8" href="#hero">
                <img src={brainwave} width={190} height={40} alt="Logo"/>
            </a>
            <nav className="hidden fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent">
                <div className="relative z-2 items-center justify-center m-auto lg:flex-row">
                {navItems.map((item, index) => (
                            <a key={index} className={`${navItemClasses} font-code`} href={item.href}>
                                {item.name}
                            </a>
                        ))}
                </div>
            </nav>
            <a href="#Resume" className="button ml-8 sm:mr-8  text-n-1/50 transition-colors hover:text-n-1 lg:block">Resume</a>
            <Button className="lg:flex" href="#Contact">Contact</Button>
            
            
        </div>
    </div>
  )
}
//will jpg work instead of brainwave svvg 
// font style of nav elements
export default Header
