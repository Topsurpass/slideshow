import React from 'react';
import { useEffect } from 'react';
import './imageSlider.css'
import window from './Images/window1.jpg'
import window2 from './Images/window2.jpg'
import door2 from './Images/door2.jpg'
import alu from './Images/Aluminium.jpg'
export const ImageSlider = () => {
    useEffect(()=>{
        let counter = 1;
        const interval =  setInterval(function(){
            document.getElementById('radio' + counter).checked = true;
            counter++;
            if(counter > 4){
                counter = 1;
            }
        }, 5000);
    return ()=>{
        clearInterval(interval);
    }
    },[])
  return (
    <div className='Container'>

        <div className='slideContainer'>
            
            <div className='slides'>

                <input type='radio' name='slideButton' id='radio1'/>
                <input type='radio' name='slideButton' id='radio2'/>
                <input type='radio' name='slideButton' id='radio3'/>
                <input type='radio' name='slideButton' id='radio4'/>

                <div className='slide first'>
                    <div className='letterings'>
                        {/* <h1>Glass, and Aluminium Services </h1> */}
                    </div>
                    <img src={alu} alt='image1'/>
                </div>
                <div className='slide'>
                    <img src={window} alt='image2'/>
                </div>
                <div className='slide'>
                    <img src={window2} alt='image3'/>
                </div>
                <div className='slide'>
                    <img src={door2} alt='image4'/>
                </div>

                <div className='autoSlideBut'>
                    <div className='autoBut1'/>
                    <div className='autoBut2'/>
                    <div className='autoBut3'/>
                    <div className='autoBut4'/>
                </div>
            </div>

            <div className='manualSlideBut'>
                <label for='radio1'className='manualBut'/>
                <label for='radio2'className='manualBut'/>
                <label for='radio3'className='manualBut'/>
                <label for='radio4'className='manualBut'/>
            </div>
        </div>
            
    </div>
  )
}
