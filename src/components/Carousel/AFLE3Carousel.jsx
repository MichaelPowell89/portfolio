import React from "react";
import Slider from "react-slick";
import Content from '../Content'
import AFLE3 from "../../AFLE3";

export default function SimpleSlider() {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings}>
      {AFLE3.map((props) => (
        <Content
          image={props.image}
       />
       ))}
    </Slider>
  );
}