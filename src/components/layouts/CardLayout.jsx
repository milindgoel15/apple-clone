/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useState, useEffect } from "react";
import ButtonLayout from "./ButtonLayout";

let CardLayout = (props) => {
   const [isMobile, setIsMobile] = useState(window.innerWidth > 768);
   const [isTablet, setIsTablet] = useState(window.innerWidth > 1024);

   useEffect(() => {
      window.addEventListener("resize", () => {
         const ismobile = window.innerWidth > 768;
         const istablet = window.innerWidth > 1024;
         if (ismobile !== isMobile) setIsMobile(ismobile);
         if (istablet !== isTablet) setIsTablet(istablet);
      }, false);
   }, [isMobile, isTablet]);

   return (
      <>
         <a key={props.id} href={props.link} className={`${ isTablet ? props.large : (isMobile ? props.medium : props.small)} ${props.style} bg-center -z-10 bg-no-repeat flex text-white flex-col text-center items-center`}>
            <div className="pt-10">
               <h1 className={` ${props.titleColor} ${props.titleStyle} py-[2px] font-semibold`}> {props.logo} {props.title}</h1>
               <h3 className={` ${props.titleColor} ${props.subTitleStyle} py-[2px]`}>{props.subTitle}</h3>
               <p className={` ${props.descStyle} py-[3px]`}>{props.description}</p>
               <div className="pt-2">
                  <ButtonLayout text={props.button1Text} link={props.buttonLink1} buttonStyles={props.buttonStyles} />
                  <ButtonLayout text={props.button2Text} link={props.buttonLink2} buttonStyles={props.buttonStyles} />
               </div>
            </div>
         </a>
      </>
   );
};

export default CardLayout;