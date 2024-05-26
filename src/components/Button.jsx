
import ButtonSvg from "../assets/svg/ButtonSvg"
const Button = ({className,href,onClick,children,px,white}) => {
    const clas = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-3 ${px || 'px-7'} ${white? 'text-n-8':'text-n-1'} ${className || ''}`

    const spanclass = "relative z-10";
    const renderButton = () => (
    <button className={clas}>
        <span className={spanclass}>{children}</span>
        {ButtonSvg(white)}
    </button>
  );

  const renderLink = () => (
    <a className={clas} href={href} onClick={onClick}>{children}</a>
  )

  return href ? renderLink() : renderButton();

  
}

export default Button;
