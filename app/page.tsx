'use client'
import {Image} from "@nextui-org/react";


import { useState,useEffect } from "react";

export default function Home() {

  const [welome,setWelcome]=useState('Welcome');
  
  return (
    <div>
      <div className="flex flex-row justify-around items-center flex-wrap ">
      <h1 className="text-6xl text-white font-bold text-center">Welcome</h1>
      <div className="rounded-full">
      <Image
      isZoomed
      width={300}
      alt="Me"
      src="/Me.jpeg"
      
      
    />
      </div>
    
      </div>
      
      <video
        src={require('../public/BG.mp4')}
        autoPlay
        muted
        loop
        className="video"
      />
    </div>
  );
}
