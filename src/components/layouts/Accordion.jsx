import React, { useState, useEffect } from "react";

let Accordion = (props) => {
   let [selected, setSelected] = useState(false);
   const [isMobile, setIsMobile] = useState(window.innerWidth > 768);

   useEffect(() => {
      window.addEventListener("resize", () => {
         const ismobile = window.innerWidth > 768;
         if (ismobile !== isMobile) setIsMobile(ismobile);
      }, false);
   }, [isMobile]);

   let component = <div className="py-1">
      {props.content.map((props) => (
         <li key={props.id} className="py-1 text-sm hover:text-gray-800 text-gray-500">
            <a
               className="underline-offset-2 pl-4 md:pl-0 hover:underline "
               href={props.link}
               target="_blank"
               rel="noopener noreferrer"
            >
               {props.title}
            </a>
         </li>
      ))}
   </div>

   return (
      <div key={props.id} className="cursor-pointer outline-none py-2">
         <div
            className="flex flex-row transition-all justify-between"
            onClick={() => setSelected(!selected)}
         >
            <h2 className="font-semibold hover:text-gray-800 text-gray-600 pb-1 text-sm">{props.footerTitle}</h2>
            <span className="md:hidden">{selected ? "X" : "+"}</span>
         </div>
         { isMobile ? component : (selected && component)}
      </div>
   );
};

export default Accordion;
