import { useState } from "react"
import ham from "../../assets/ham.svg"
import headerData from "../../utils/headerData"

let Header = () => {
   let [isNavBarOpen, setNavBarOpen] = useState(false);
   
   return (
      <>
         <header className={`${isNavBarOpen ? 'bg-black' : 'bg-black/80'} md:bg-black/80 w-full z-20 backdrop-blur-xl top-0 sticky`}>
            <nav className="px-2 lg:px-6 py-2 flex justify-between md:hidden items-center ">
               <img onClick={() => setNavBarOpen(!isNavBarOpen)} className="h-8 w-8 lg:hidden cursor-pointer" src={ham} alt="hamburger" />
               <i className="text-2xl hover:text-white text-gray-300 fa-brands fa-apple cursor-pointer"></i>
               <div className="flex gap-4 items-center">
                  <i className="invisible md:block text-lg cursor-pointer hover:text-white text-gray-300 fa-solid fa-magnifying-glass"></i>
                  <i className={`${isNavBarOpen ? 'invisible' : 'block'} text-lg cursor-pointer hover:text-white text-gray-300 fa-solid fa-bag-shopping`}></i>
               </div>
            </nav>
            <nav className={` ${isNavBarOpen ? 'block h-screen' : 'hidden'}  md:block`}>
               <ul onClick={() => setNavBarOpen(false)} className={`justify-around md:items-center md:text-center flex md:flex-row flex-col py-3 xl:gap-0 z-10 text-xs p-10 text-gray-300 pl-4 lg:px-16 xl:px-60 `}>
                  {headerData.map(props => {
                     return (
                        <a key={props.id} href={props.link} className="text-base md:text-xs border-b-2 border-gray-500 md:border-0 py-3 md:py-0 hover:text-white text-gray-300 " ><li > {props.title} </li></a>
                     )
                  })}
               </ul>
            </nav>
         </header>
      </>
   )
}

export default Header;