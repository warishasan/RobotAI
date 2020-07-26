import React from 'react';
import NavBar from './components/navBar.js'
import './App.css';
import android1 from './images/android1.png'
import android2 from './images/android2.png'
import android3 from './images/android3.png'
import matlab from './images/matlab.png'
import ros from './images/ros.png'
import cpp from './images/c++.png'
import python from './images/python.png'
import java from './images/java.png'
import robot1 from './images/robot1.png'
import robot2 from './images/robot2.png'
import robot3 from './images/robot3.png'
import useWebAnimations, { fadeInLeft } from "@wellyshen/use-web-animations";
import {headShake } from "@wellyshen/use-web-animations";
import {fadeIn } from "@wellyshen/use-web-animations";
import {tada } from "@wellyshen/use-web-animations";







function App() {


/*
  const robo1 = useWebAnimations({ 
    keyframes: [
      { transform: 'translate(-100%,0)' },
   
      
      
      
    ],
    timing: {
      
      easing: "ease-in",
      direction: "reverse",
      duration: 500,
      playbackRate: 1,
      iterations: Infinity
    }
  });

*/

const swing= fadeInLeft;
const vibrate = headShake;
const fade = fadeIn;
const sway = tada;

const robo1 = useWebAnimations({
  keyframes: swing.keyframes,
  timing: {
    ...swing.timing,
    delay: 1000, // Delay 1s
    duration: swing.timing.duration * 0.1, // Speed up the animation
    iterations: 1
  }
});



const robo2 = useWebAnimations({
  keyframes: swing.keyframes,
  timing: {
    ...swing.timing,
    delay: 1500, // Delay 1s
    duration: swing.timing.duration * 0.1, // Speed up the animation
    iterations: 1
  }
});


const robo3 = useWebAnimations({
  keyframes: swing.keyframes,
  timing: {
    ...swing.timing,
    id: "slide",
    delay: 2000, // Delay 1s
    duration: swing.timing.duration * 0.1, // Speed up the animation
    iterations: 1
  },

  onFinish: ({ animate, animation }) => {

    if (animation.id === "vibrate") return;
    animate({
      id: "vibrate",
      keyframes: vibrate.keyframes,
      timing: {
        ...vibrate.timing,
        delay: 0, // Delay 1s
        duration: vibrate.timing.duration * 0.4, // Speed up the animation
       
      },
    });



  }


});



const text1 = useWebAnimations({
  keyframes: swing.keyframes,
  timing: {
    ...swing.timing,
    delay: 1000, // Delay 1s
    duration: swing.timing.duration * 0.1, // Speed up the animation
    iterations: 1
  }
});

const text2 = useWebAnimations({
  keyframes: swing.keyframes,
  timing: {
    ...swing.timing,
    delay: 1500, // Delay 1s
    duration: swing.timing.duration * 0.1, // Speed up the animation
    iterations: 1
  }
});

const text3 = useWebAnimations({
  keyframes: swing.keyframes,
  timing: {
    ...swing.timing,
    delay: 2000, // Delay 1s
    duration: swing.timing.duration * 0.1, // Speed up the animation
    iterations: 1
  }
});

const dot1 = useWebAnimations({
  keyframes: fade.keyframes,
  timing: {
    ...fade.timing,
    delay: 2100, // Delay 1s
    duration: fade.timing.duration * 0.3, // Speed up the animation
    iterations: 1
  }
});
const dot2 = useWebAnimations({
  keyframes: fade.keyframes,
  timing: {
    ...fade.timing,
    delay: 2100, // Delay 1s
    duration: fade.timing.duration * 0.3, // Speed up the animation
    iterations: 1
  }
});

const matlab1 = useWebAnimations({
  keyframes: sway.keyframes,
  timing: {
    ...sway.timing,
    duration: sway.timing.duration * 5, // Speed up the animation
    iterations: Infinity
  }
});

const ros1 = useWebAnimations({
  keyframes: sway.keyframes,
  timing: {
    ...sway.timing,
    duration: sway.timing.duration * 3, // Speed up the animation
    iterations: Infinity
  }
});

const slam1 = useWebAnimations({
  keyframes: sway.keyframes,
  timing: {
    ...sway.timing,
    duration: sway.timing.duration * 4, // Speed up the animation
    iterations: Infinity
  }
});

const cpp1 = useWebAnimations({
  keyframes: sway.keyframes,
  timing: {
    ...sway.timing,
    duration: sway.timing.duration * 3.5, // Speed up the animation
    iterations: Infinity
  }
});

const python1 = useWebAnimations({
  keyframes: sway.keyframes,
  timing: {
    ...sway.timing,
    duration: sway.timing.duration * 4.5, // Speed up the animation
    iterations: Infinity
  }
});


const java1 = useWebAnimations({
  keyframes: sway.keyframes,
  timing: {
    ...sway.timing,
    duration: sway.timing.duration * 1.2, // Speed up the animation
    iterations: Infinity
  }
});


  
  return (
    <div className="wrapper" >


      <div id="background1">
        <div className="header">
          <NavBar></NavBar>
        </div>


        <div className="firstblock">
          <h1 id = "mainheading" >Reshaping Robotics</h1>
          <p  id = "tagline" >Start integrating different aspects of your project easily and efficiently. Many libraries supported</p>
          <div id="buttonContainer">
            <button className='downloadButtons' >DOWNLOAD</button>
            <button className='downloadButtons' >VERSIONS</button>
          </div>


        </div>

      </div>

       <div className = "secondblock">
      
       <h1 ref = {text1.ref} id = "animatedText">Design </h1>
       <h1  ref = {dot1.ref} id = "animatedText"><b>.</b> </h1>
       <h1 ref = {text2.ref} id = "animatedText">Develop </h1>
       <h1  ref = {dot2.ref} id = "animatedText"><b>.</b> </h1>
       <h1 ref = {text3.ref} id = "animatedText">Integrate</h1>
       <div >
      <img ref = {robo1.ref}  id = "robot1" src={android1} alt = "robot1" frameBorder="0"></img>
      <img ref = {robo2.ref} id = "robot2" src={android2} alt = "robot2" frameBorder="0"></img>
      <img ref = {robo3.ref}  id = "robot3" src={android3} alt = "robot3"  frameBorder="0"></img>
      </div>
     </div>
      
     
     <div className = "thirdblock">
       <h1 id = "tagline2">Integrate with any platform using any language</h1>
       <img ref = {matlab1.ref} id = "matlab" src={matlab}  frameBorder="0" alt = "matlab"></img>
       <img ref = {ros1.ref} id = "ros" src={ros}  frameBorder="0" alt = "ros"></img>
       <img  ref = {slam1.ref} id = "slam" src="https://img.pngio.com/alex-wong-slam-png-300_114.png" alt = "slam" ></img>
       <img  ref = {cpp1.ref}id = "cpp" src={cpp} alt = "cpp"></img>
       <img  ref = {python1.ref}id = "python" src={python} alt = "python"></img>
       <img  ref = {java1.ref} id = "java" src={java} alt = "java"></img>
     </div>

    <div className = "fourthblock">
      <img id = "robot11" src = {robot1} alt = "robot5"></img>
      <img id = "robot22" src = {robot2} alt = "robot6"></img>
      <img id = "robot33" src = {robot3} alt = "robot7"></img>
     
    </div>

    <div className = "fifthblock">
      <div id = "debug">
      <h2>Highly Optimized Debugging Tools</h2>
      <p className = "extraText">We provide a user-friendly graphical interface that allows you to debug at each step of iteration using advnaced AI techniques</p>
      </div>
      
      <div id = "fluid">
      <h2>Highly Fluid Work Flow</h2>
      <p className = "extraText">Our architecture allows you to integrate all aspects of designing and coding in the same package seamlessly</p>
      </div>

      <div id = "modularity">
      <h2>Great Modularity</h2>
      <p className = "extraText">We allow you do design your prototypes in a modular fashion so that each aspect of the development can be handled independently</p>
      </div>
      
    </div>
    
    </div>
  );
}

export default App;
