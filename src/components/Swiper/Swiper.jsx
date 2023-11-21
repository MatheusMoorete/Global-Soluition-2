// Swiper.js
import { useRef, useEffect } from "react";
import { Mousewheel, Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import CardSwiper from "../CardSwiper/CardSwiper";
import styled from "styled-components";

const StyledNavigation = styled.div`
  .swiper-button-prev,
  .swiper-button-next {
    position: absolute;
    top: 50%;
    width: 30px;
    height: 30px;
    margin-top: -15px;
    z-index: 10;
    cursor: pointer;
  }

  .swiper-button-prev {
    left: 15px;
  }

  .swiper-button-next {
    right: 15px;
  }
`;

function MySwiper({ cards }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    console.log("Refs:", prevRef.current, nextRef.current);
  }, []); 

  return (
    <>
      <StyledNavigation>
        <Swiper
          modules={[Mousewheel, Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={5}
          slidesPerView={4}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log("Swiper initialized:", swiper)}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          loop={true}
          mousewheel={true}
        >
          {cards.map((card, index) => (
            <SwiperSlide key={index}>
              <CardSwiper {...card} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="swiper-button-prev" ref={prevRef}></div>
        <div className="swiper-button-next" ref={nextRef}></div>
      </StyledNavigation>
    </>
  );
}

export default MySwiper;
