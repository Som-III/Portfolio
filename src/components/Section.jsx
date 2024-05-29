

const Section = ({
    className,
    id,
    children,
    crosses,
    crossesOffset,
    customPaddings
}) => {
  return (
    <div id={id} className={`relative   ${customPaddings || `py-10 lg:py-16 xl:py-20 ${className || ""}`} `}>
      {children}
      <div className="hidden border-b border-n-6 absolute bg-stroke-1 pointer-events-none md:block " />
    </div>
  )
}
//imp for button 49:00
export default Section
