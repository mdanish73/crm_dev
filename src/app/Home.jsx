'use client'
import React  from 'react'
import { useState,useEffect } from 'react';
import { Poppins } from 'next/font/google';
import Link from 'next/link';
// import {styles} from '/global.css'
import axios from 'axios';

const Home = () => {

  //  Function of current time 

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

    
//  Animation and effect of Welcome back

      const steps = ['Welcome Back', 'To', 'Customer Relationship Management'];
      const [currentStep, setCurrentStep] = useState(0);
      const [fadeOut, setFadeOut] = useState(false);
    
      useEffect(() => {
        if (currentStep < steps.length - 1) {
          const timer = setTimeout(() => {
            setFadeOut(true);
            setTimeout(() => {
              setCurrentStep((prevStep) => prevStep + 1);
              setFadeOut(false);
            }, 1000); // Match this timeout with the CSS transition duration
          }, 3000); // Adjust the time as needed
    
          return () => clearTimeout(timer); // Clean up the timer on component unmount
        }
      }, [currentStep]);
    
      useEffect(() => {
        if (currentStep === steps.length - 1) {
          const finalStepTimer = setTimeout(() => {
            setFadeOut(true);
            setTimeout(() => {
              setFadeOut(false);
            }, 1000); // Match this timeout with the CSS transition duration
          }, 3000); // Adjust the time as needed
    
          return () => clearTimeout(finalStepTimer); // Clean up the timer on component unmount
        }
      }, [currentStep, steps.length]);

      

//       Function API of Live Weather 




      const [weather, setWeather] = useState(null);

      useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(
              'https://api.openweathermap.org/data/2.5/weather?lat=31.418715&lon=73.079109&appid=cf6c39715df30d25257e7d9705ad9471'
            );
            console.log(response)
            setWeather(response.data);
          } catch (error) {
            console.error('Error fetching weather data:', error);
          }
        };
    
        fetchData();
      }, []);


  return (
    <>
      <div className=" bg-[url('/Homepage.jpg')] bg-cover bg-center w-full pt-16 text-center min-h-screen text-white">

        {/* div of Time */}
        <div className="text-center mb-16">
            <p className="text-6xl font-bold my-4">{formatTime(dateTime)}</p>
            <p className="text-xl">{formatDate(dateTime)}</p>
        </div>
        
        {/* Div of Welcome */}
        <div className={`text-2xl transition-opacity duration-1000 ease-out ${fadeOut ? 'opacity-0' : 'opacity-100'} font-semibold mb-16`}>
            {steps[currentStep]}
        </div>

        {/* Login of Button */}
         <Link href='/login' className="px-32 py-4 rounded-lg bg-black">
            LOG IN
         </Link>
         

         {/* Function Of Weather */}
         {weather && (
            <div className="w-96 h-48 mx-10 px-10 py-5 rounded bg-black bg-opacity-50 ">
                <h2 className="text-4xl mb-4 text-left font-semibold">{weather.name}</h2>
                <div className="flex text-2xl mb-6 gap-4">
                  <p className="font-semibold">{weather.main.temp}°C</p>
                  <p className="">{weather.weather[0].description}</p>
                </div>
                <Link href='https://www.google.com/search?q=weather+forecast&oq=weather&gs_lcrp=EgZjaHJvbWUqEAgBEAAYgwEYsQMYyQMYgAQyEQgAEEUYJxg7GJ0CGIAEGIoFMhAIARAAGIMBGLEDGMkDGIAEMg0IAhAAGJIDGIAEGIoFMg0IAxAAGJIDGIAEGIoFMg0IBBAAGIMBGLEDGIAEMgYIBRBFGDwyBggGEEUYPDIGCAcQRRg80gEIODEwMWowajeoAgCwAgA&sourceid=chrome&ie=UTF-8'
                className='text-center'>
                  View Full Forecast
                </Link>
            </div>
          )}
      </div>
    </>
  )
}

export default Home
