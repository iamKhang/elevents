import Marquee from "react-fast-marquee";
import React from "react";

const MarqueeBanner = () => {
  return (
    <div className="marquee-banner-container">
      <Marquee speed={100} gradient={false}>
        <span className="marquee-text">
          STREETWEAR BRAND LIMITED - ELEVENTS™
        </span>
        <span className="marquee-gap">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> {/* Thêm khoảng cách sau mỗi lần lặp */}
      </Marquee>
    </div>
  );
};

export default MarqueeBanner;
