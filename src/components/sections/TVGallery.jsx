import React from "react";
import tvGalleryData from "../../utils/tvGalleryData";
import TvCarouselLayout from "../layouts/TvCarouselLayout";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
// import ButtonLayout from "./ButtonLayout";

let TVGallery = () => {
   return (
      <>
         <Swiper
            spaceBetween={30}
            centeredSlides={true}
            loop={true}
            autoplay={{
               delay: 3000,
               disableOnInteraction: false,
            }}
            pagination={{
               clickable: true,
            }}
            keyboard={{
               enabled: true,
               onlyInViewport: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="h-[540px] xl:h-[700px] my-10 mySwiper"
         >
            {
               tvGalleryData.map(props => (
                  <SwiperSlide key={props.id} >
                     <TvCarouselLayout
                        title={props.title}
                        genre={props.genre}
                        desc={props.desc}
                        bgSmall={props.bgSmall}
                        bgMedium={props.bgMedium}
                        bgLarge={props.bgLarge}
                        bgExtraLarge={props.bgExtraLarge}
                        style={props.style}
                     />
                  </SwiperSlide>
               ))
            }

         </Swiper>


      </>
   )
}

export default TVGallery;