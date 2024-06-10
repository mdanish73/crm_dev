"use client";
import React, { useContext } from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import Image from "next/image";
import { SuperadminContext } from "@/Context/superadmin/Superadmin";

const Home = () => {
  const { data } = useContext(SuperadminContext);
  // Function of current time
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const formatDate = (date) => {
    const options = { weekday: "long", month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  const formatTime = (date) => {
    const options = { hour: "2-digit", minute: "2-digit", hour12: true };
    return date
      .toLocaleTimeString("en-US", options)
      .replace(" am", " AM")
      .replace(" pm", " PM");
  };

  // Animation and effect of Welcome back
  const steps = ["Welcome Back", "To", "Customer Relationship Management"];
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

  // Function API of Live Weather
  const [weather, setWeather] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://api.weatherapi.com/v1/current.json?key=0bb3aa2bba0a446986a95206242505&q=Faisalabad&aqi=yes"
        );
        setWeather(response.data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="bg-[url('/Homepage.jpg')] bg-cover bg-center w-full text-center min-h-screen text-white">
        {/* div of Time */}
        <div className="text-center py-16">
          <p className="text-6xl font-bold my-4">{formatTime(dateTime)}</p>
          <p className="text-xl">{formatDate(dateTime)}</p>
        </div>

        {/* Div of Welcome */}
        <div
          className={`text-2xl transition-opacity duration-1000 ease-out ${
            fadeOut ? "opacity-0" : "opacity-100"
          } font-semibold mb-16`}
        >
          {steps[currentStep]}
        </div>

        {/* Login Button */}
        {currentStep + 1 === steps.length && (
          <Link href={data ? "/dashboard" : "/login"}>
            <span className="px-14 py-4 font-bold text-sm rounded-lg bg-black bg-opacity-70 text-white transition-all duration-700 ease-in-out hover:bg-white hover:bg-opacity-20 hover:scale-110 hover:text-black">
              {data ? "dashboard" : "login"}
            </span>
          </Link>
        )}

        {/* Weather Information */}
        {weather && (
          <div className="bottom-7 absolute mx-10 px-8 py-2 rounded text-left bg-black bg-opacity-50 ">
            <h2 className="text-base font-semibold uppercase pt-2">
              {weather?.location?.name}
            </h2>
            <div className="flex gap-5 py-4">
              <Image
                priority
                height={400}
                width={400}
                alt="weather condition image"
                className="rounded-full h-12 w-12 object-cover"
                src={
                  weather?.current?.condition?.text === "Sunny"
                    ? "https://img.freepik.com/free-photo/view-3d-burning-sun_23-2150938039.jpg?t=st=1716633955~exp=1716637555~hmac=099964a6b0f248ee8da0928e74db31298b7156d0bc9774a6cfb68c2c967f8e69&w=900"
                    : "https://img.freepik.com/premium-photo/thunder-cloud_895561-15273.jpg?w=900"
                }
              />
              <div>
                <p className="font-bold text-3xl">
                  {weather?.current?.temp_c}
                  <span className="text-xs transform translate-y-full">°C</span>
                </p>
                <p className="text-gray-300 text-xs">
                  {weather?.current?.condition?.text}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
