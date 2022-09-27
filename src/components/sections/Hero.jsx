import React from "react";
import heroData from "../../utils/heroData";
import CardLayout from "../layouts/CardLayout";

let Hero = () => {
   return (
      <>
         {heroData.map(props => {
            return (
               <CardLayout 
                  key={props.id}
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
      </>
   )
}

export default Hero;