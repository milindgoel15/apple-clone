/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import footerData from "../../utils/footerData";
import Accordion from "../layouts/Accordion";

let Footer = () => {
   return (
      <>
         <footer className="bg-primaryBg mt-12 px-6 md:px-8 lg:px-16 xl:px-48">
            <ul className=" text-xs py-8 text-gray-700 leading-relaxed list-decimal">
               <li id="note1">Instant cashback of 5% of order value is available for qualifying HDFC Bank Credit Cards & HDFC Credit Card EMI only. Offer is limited to Maximum Instant Cashback Amount of ₹6000 per successful single order of ₹54900 and above. Instant cashback is available for up to two orders per 90-day period with an eligible card. Any additional orders may be cancelled. Card eligibility is subject to terms and conditions between you and your card-issuing bank. Total transaction value is calculated after any trade-in credit or eligible discount is applied. Any subsequent order adjustment(s) or cancellation(s) may result in instant cashback being recalculated, and any refund may be adjusted to account for instant cashback reclaim, which may result in no refund being made to you. Offer may be revised or withdrawn at any time without any prior notice. Terms & conditions apply. Offer cannot be combined with Apple Store for Education or Corporate Employee Purchase Plan pricing. Multiple separate orders cannot be combined for instant cashback.</li>
               <li id="note2">Qualified purchasers can receive promotion savings when they purchase an eligible Mac or eligible iPad with eligible AirPods at a qualifying location. Only one pair of AirPods per eligible Mac or eligible iPad per qualified purchaser. Offer is subject to availability. Subject to terms and conditions herein.</li>
            </ul>

            <hr />

            <ul className="grid md:grid-cols-5 py-6 md:gap-6 select-none">
               {
                  footerData.map(props => (
                     <div key={props.id}>
                        {props.data.map(props => (
                           <Accordion
                              key={props.id}
                              footerTitle={props.head}
                              content={props.content}
                           />

                        ))}
                     </div>
                  ))
               }
            </ul>

            <p className="py-2 text-sm text-gray-500">More ways to shop: <a className="underline-offset-2 hover:underline text-blue-500" href="#">Find a retailer</a> near you. Or call 000800 040 1966.</p>
            <hr />
            <div className="flex flex-col-reverse md:flex-row justify-between pt-2 pb-5">
               <div className="flex flex-col md:flex-row md:gap-10">
                  <p className="py-1 text-xs hover:text-gray-800 text-gray-500">Copyright © 2022 Apple Inc. All rights reserved.</p>
                  <ul className="flex gap-3">
                     <li className="py-1 text-xs underline-offset-2 hover:underline hover:text-gray-800 text-gray-500"><a href="#">Privacy Policy</a></li>
                     <li className="py-1 text-xs underline-offset-2 hover:underline hover:text-gray-800 text-gray-500"><a href="#">Terms of Use</a></li>
                     <li className="py-1 text-xs underline-offset-2 hover:underline hover:text-gray-800 text-gray-500"><a href="#">Sales Policy</a></li>
                     <li className="py-1 text-xs underline-offset-2 hover:underline hover:text-gray-800 text-gray-500"><a href="#">Legal</a></li>
                     <li className="py-1 text-xs underline-offset-2 hover:underline hover:text-gray-800 text-gray-500"><a href="#">Site Map</a></li>
                  </ul>
               </div>
               <p className="py-1 text-xs underline-offset-2 hover:underline hover:text-gray-800 text-gray-500">India</p>
            </div>

            <div className="flex flex-col text-sm gap-3 justify-center text-center py-6 mx-6 ">

            <hr />
            
            <p>DISCLAIMER: This project is just for learning purposes only. All the credit goes to the <a className="text-black font-semibold  no-underline hover:underline" href="https://apple.com" target="_blank" rel="noopener noreferrer">Apple</a>.
               <br />
               This project is made possible using <a className="font-semibold no-underline hover:underline" href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">ReactJS</a> and <a className="font-semibold no-underline hover:underline" href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">TailwindCSS</a> with further styling improvements.
            </p>
            <p className="text-md py-2 duration-300 ease-in">Made with<span className="cursor-default"> ❤ </span> by <a rel="noreferrer" href="https://github.com/milindgoel15" target="_blank" className="font-semibold no-underline hover:underline">Milind Goel</a>.
            </p>
         </div>
         </footer>
      </>
   )
}

export default Footer;