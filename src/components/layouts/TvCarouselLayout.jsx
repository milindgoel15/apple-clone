import React, { useState, useEffect } from "react";

let TvCarouselLayout = (props) => {
   const [isMobile, setIsMobile] = useState(window.innerWidth > 768);
   const [isTablet, setIsTablet] = useState(window.innerWidth > 1024);
   const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1280);

   useEffect(() => {
      window.addEventListener("resize", () => {
         const ismobile = window.innerWidth > 768;
         const istablet = window.innerWidth > 1024;
         const isdesktop = window.innerWidth > 1280;
         if (ismobile !== isMobile) setIsMobile(ismobile);
         if (istablet !== isTablet) setIsTablet(istablet);
         if (isdesktop !== isDesktop) setIsDesktop(isdesktop);
      }, false);
   }, [isMobile, isTablet, isDesktop]);

   return (
      <>
         <section key={props.id} className={`${isDesktop ? props.bgExtraLarge : (isTablet ? props.bgLarge : (isMobile ? props.bgMedium : props.bgSmall))} items-center bg-center bg-no-repeat h-full `}>
            <div className="flex flex-col justify-between gap-64 text-white items-center text-center">
               <div className="py-2 md:invisible">
                  <p className="text-4xl"><i className="fa-brands fa-apple"></i> tv+</p>
                  <p>{props.title}</p>
               </div>
               <div className={`flex flex-col md:flex-row-reverse gap-2 ${props.style} `}>
                  <div className="flex flex-col flex-wrap md:flex-row items-center text-center gap-2 px-16 md:px-0">
                     <h1 className="text-xl lg:text-3xl font-semibold">{props.genre}</h1>
                     <p className=" text-xl px-6 md:py-4 md:px-0 md:hidden lg:block">{props.desc}</p>
                  </div>
                  <button className="rounded-full font-semibold bg-white w-40 h-12 text-black">Stream now <i className="fa-solid fa-circle-play"></i></button>
               </div>
            </div>
         </section>
      </>
   )
}

export default TvCarouselLayout;