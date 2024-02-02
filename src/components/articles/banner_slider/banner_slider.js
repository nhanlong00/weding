import React, { useState, useEffect, useRef } from "react";
import { Carousel, CarouselItem, CarouselCaption } from "reactstrap";
import BannerImage from "../../../assets/wedding-banner.jpg";
import BanImage from "../../../assets/wedding-ban.jpg";

const items = [
  {
    src: BannerImage,
    altText: "Thái Ninh & Thùy Linh",
    caption: "Thái Ninh & Thùy Linh",
    key: 1,
    dateText: "17 Tháng 2 2024",
  },
  {
    src: BanImage,
    altText: "Thái Ninh & Thùy Linh",
    caption: "Thái Ninh & Thùy Linh",
    key: 2,
    dateText: "17 Tháng 2 2024",
  },
];

const BannerSlider = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const carouselRef = useRef(null);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        className="custom-carousel-item" // Add custom class for fade effect
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
        <div className="date-schedule">
          {item.dateText ?? "17 Tháng 2 2024"}
        </div>
      </CarouselItem>
    );
  });

  // Auto slide change
  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex, next]);

  return (
    <div className="banner-slider">
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        ref={carouselRef} // Use innerRef to get a reference to the Carousel
        {...props}
      >
        {slides}
      </Carousel>
    </div>
  );
};

export default BannerSlider;
