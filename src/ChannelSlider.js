import React from "react";
import lpga_logo from "./LPGA.png"
import pga_logo from "./PGA_Tour_logo.png"

const ChannelSlider = () => {
    const items = [pga_logo, lpga_logo]; // Replace with your content

    return (
      <div className="horizontal-slider">
        <h1 style={{'color': "black"}}>Sponsored Channels</h1>
        <div className="slider-content">
          {items.map((item, index) => (
            <div key={index} className="slider-button">
                <img src={item} alt="logo"/>
            </div>
          ))}
        </div>
      </div>
    );
};

export default ChannelSlider;