'use client'
import React  from 'react'
import { useState,useEffect } from 'react';
import { Poppins } from 'next/font/google';

const Home = () => {

    const [dateTime, setDateTime] = useState(new Date());

    useEffect(() => {
      const interval = setInterval(() => {
        setDateTime(new Date());
      }, 1000);
  
      return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);
  
    const formatDate = (date) => {
      const options = { weekday: 'long', month: 'long', day: 'numeric' };
      return date.toLocaleDateString(undefined, options);
    };
    const formatTime = (date) => {
        const options = { hour: '2-digit', minute: '2-digit'};
        return date.toLocaleTimeString(undefined, options);
      };

    


      const [currentStep, setCurrentStep] = useState(0);
      const [cycleComplete, setCycleComplete] = useState(false);
    
      const steps = [
        <div key="1" >WELCOME</div>,
        <div key="2" >BACK</div>,
        <div key="3" >TO</div>,
        <div key="4" >OVER</div>,
        <div key="4" >Customer relationship management</div>,
      ];
    
      useEffect(() => {
        if (currentStep < steps.length - 1) {
          const timer = setTimeout(() => {
            setCurrentStep(prevStep => prevStep + 1);
          }, 3000); // Adjust the time (3000ms = 3 seconds) as needed
    
          return () => clearTimeout(timer); // Clean up the timer on component unmount
        } else {
          setCycleComplete(true);
        }
      }, [currentStep]);





  return (
    <>
      <div className=" bg-[url('/Homepage.jpg')] bg-cover bg-center w-full pt-20 text-center min-h-screen bg-gray-100 text-white">
        <div className="text-center">
            <p className="text-6xl font-bold mt-4">{formatTime(dateTime)}</p>
            <p className="text-xl mt-2">{formatDate(dateTime)}</p>
        </div>
        <div className='text-xl'>
             {cycleComplete ? steps[steps.length - 1] : steps[currentStep]}
         </div>
      </div>
    </>
  )
}

export default Home
