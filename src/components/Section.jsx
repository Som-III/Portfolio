import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useEffect } from 'react';
import { useRef } from 'react';


const Section = ({
    className,
    id,
    children,
    customPaddings
}) => {
  const controls = useAnimation();
  const ref = useRef(null)
  const inView  = useInView(ref);

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: {
          type: 'spring',
          stiffness: 100,//controls scroll smoothness
          damping: 15
        }
      });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  }, [controls, inView, id]);
  return (
    <motion.div 
    ref={ref}
    id={id} 
    className={`relative   ${customPaddings || `py-10 lg:py-16 xl:py-20`}  ${className || ""} `} 
    initial={{ opacity: 0 }} 
    animate={controls} 
    transition={{ type:"spring",duration: 0.5,ease:"easeInOut"}}
    >
      {children}
      <div className="hidden border-b border-n-6 absolute bg-stroke-1 pointer-events-none md:block " />
    </motion.div>
  )
}
//imp for button 49:00
export default Section
