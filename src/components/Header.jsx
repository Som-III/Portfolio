import {brainwave} from "../assets"
// time 30:30
const Header = () => {
    const navItems = `inline-block relative text-2xl uppercase text-n-1 transition-colors hover:text-color-1 px-6 py-6 md:py-8 lr:-mr-0.25 lg:text-xs lg:font-semibold`;
  return (
    //read the tailwind configurations plz and how assets are imported
    <div className="fixed top-0 z-10 bg-n-8/90 backdrop-blur-sm border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm">
        
        <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
            <a className="block w-[12rem] xl:mr-8" href="#hero">
                <img src={brainwave} width={190} height={40} alt="Logo"/>
            </a>
            <nav className="hidden fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent">
                <div className="relative z-2 items-center justify-center m-auto lg:flex-row">
                    <a className={`${navItems} font-code`} href="#hero">Home</a>
                    <a className={`${navItems} font-code`} href="#hero">Somewhere</a>
                    <a className={`${navItems} font-code`} href="#hero">idk wut</a>
                    <a className={`${navItems} font-code`} href="#hero">lmaoxd</a>

                </div>
            </nav>
        </div>
    </div>
  )
}
//will jpg work instead of brainwave svvg 
// font style of nav elements
export default Header
