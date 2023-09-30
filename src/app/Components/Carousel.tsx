import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { PropsWithRef } from "react";
import { PropsWithChildren } from "react";

function SampleNextArrow(props:any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "flex", background: "gray", opacity:.5 , width:25,height:50,alignItems:'center', justifyContent:'center'  }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props:any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "flex", background: "gray", opacity:.5 , width:25,height:50,alignItems:'center', justifyContent:'center'  }}
        onClick={onClick}
      />
    );
  }

export default function SliderComp({children}:PropsWithChildren){
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };

      return(
        <Slider {...settings} >
            {children}
        </Slider>
      )
}