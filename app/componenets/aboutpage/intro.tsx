import React from "react";
import {Card, CardBody} from "@nextui-org/react";

const Intro = () => {
  return (
    <Card >
      <CardBody>

      <div className="flex flex-col justify-center gap-4 intro">
   
   <h1 className="text-center text-4xl font-bold text-green-500 ">HI, I'M OSCAR LEAL</h1>

   <p className="text-center text-sm">
     I am a full time email developer at my current role, where I bring
     creativity and precision to every project. Outside of my role, I
     flourish as a part-time freelance developer, engaging with a variety of
     technologies & projects that ignite my coding passion. My journey in the tech industry
     has cultivated a versatile skill set and a profound appreciation for
     crafting efficient, user-friendly solutions.
   </p>


 </div>
      </CardBody>
    </Card>
   
  );
};

export default Intro;
