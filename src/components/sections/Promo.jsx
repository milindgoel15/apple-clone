import React from "react";
import promoData from "../../utils/promoData";
import CardLayout from "../layouts/CardLayout";

let Promo = () => {
   return (
      <>
         <section className="grid md:grid-cols-2 gap-4">
            {promoData.map(props => {
               return (
                  <CardLayout
                     key={props.id}
                     logo={props.logo}
                     title={props.title}
                     subTitle={props.subTitle}
                     description={props.description}
                     titleColor={props.titleColor}
                     link={props.link}
                     buttonLink1={props.buttonLink1}
                     buttonLink2={props.buttonLink2}
                     button1Text={props.button1Text}
                     button2Text={props.button2Text}
                     small={props.small}
                     medium={props.medium}
                     large={props.large}
                     style={props.style}
                     titleStyle={props.titleStyle}
                     subTitleStyle={props.subTitleStyle}
                     descStyle={props.descStyle}
                     buttonStyles={props.buttonStyles}
                  />
                  
               )
            })}
         </section>
      </>
   )
}

export default Promo;