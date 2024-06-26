import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import TextPlugin from 'gsap/TextPlugin';
import ButtonGradient from './assets/svg/ButtonGradient';
gsap.registerPlugin(TextPlugin);
import Button from './components/Button';
import Header from './components/Header';
import Section from './components/Section';
import Hero from './components/Hero';

function App() {
  return (
    <>
      <div className='pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden'>
        <Header></Header>
        <Hero></Hero>
        <Hero></Hero>
        <Hero></Hero>
      </div>
      <ButtonGradient/>
  
      

      
    </>
  );
}

export default App;
