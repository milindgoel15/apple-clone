import React from "react";
import ButtonLayout from "../layouts/ButtonLayout"

let Ribbon = () => {
   return (
      <>
         <div className="py-3 px-4 md:px-8 bg-primaryBg flex flex-col items-center">
            <p className="text-base text-center">Get 5% instant Cashback up to ₹6000 with qualifying HDFC Bank credit cards on orders over ₹54900. <a className="hover:text-blue-500" href="#note1"><sup>1</sup></a></p>
            <ButtonLayout text={<>Learn more <span> &gt;</span></>} link="https://www.apple.com/in/shop/goto/ways_to_buy" buttonStyles={`text-base`} />
         </div>
         
      </>
   )
}

export default Ribbon;