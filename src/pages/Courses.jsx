import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../App.css";

// import required modules
import { Pagination } from "swiper/modules";

const Courses = () => {
  return (
    <>
      <section className="flex mt-[100px] bg-[#FFF] gap-[100px] ">
        <div className="ml-[40px]">
          <img src="src/img/Rectangle 13.png" alt="" />
        </div>
        <div className="flex flex-col gap-[20px] items-start ">
          <div>
            <h1 className="text-[#000000] text-[48px] font-medium font-[DIN_Pro]">
              Филадельфия и <br /> лосось сет
            </h1>
            <h5 className="text-[#FF9846] text-[18px] font-light font-[DIN_Pro]">
              290 грамм
            </h5>
          </div>
          <div className="flex gap-[20px] items-center">
            <h1 className="text-[#000000] text-[24px] font-[DIN_Pro] font-bold">
              1150 СОМ
            </h1>
            <h1 className="text-[#111111] font-bold text-[24px] ">-</h1>
            <h1 className="text-[36px] text-[#000000] font-bold font-[DIN_Pro]">
              10
            </h1>
            <h1 className="bg-[#F46D40] p-[0px_10px] rounded-[50%] text-[24px] text-[#F2F2F2]">
              +
            </h1>
          </div>
          <h4 className="text-[#111111] text-[18px] font-medium font-[DIN_Pro]">
            Состав
          </h4>
          <p className="text-[#111111] text-[18px] font-light font-[DIN_Pro]">
            Лосось, сыр "Филадельфия", огурец, авокадо
          </p>
          <button className="bg-[#F46D40] p-[10px_80px] rounded-[5px] text-[#F2F2F2] text-[24px] font-medium font-[DIN_Pro]">
            Хочу!
          </button>
        </div>
      </section>

      <section className="mt-[100px] ">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="text-center flex flex-col gap-[5px] ">
              <img
                style={{ width: "200px", margin: "auto" }}
                src="src/img/Ellipse 6.png"
                alt=""
              />
              <h1 className="text-[18px] text-[#000000] font-medium">
                Филадельфия
              </h1>
              <h1 className="text-[#000000] text-[24px] font-bold">140 СОМ</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-center flex flex-col gap-[5px] ">
              <img
                style={{ width: "200px", margin: "auto" }}
                src="src/img/Ellipse 6 (1).png"
                alt=""
              />
              <h1 className="text-[18px] text-[#000000] font-medium">Банзай</h1>
              <h1 className="text-[#000000] text-[24px] font-bold">170 СОМ</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-center flex flex-col gap-[5px] ">
              <img
                style={{ width: "200px", margin: "auto" }}
                src="src/img/Ellipse 6 (2).png"
                alt=""
              />
              <h1 className="text-[18px] text-[#000000] font-medium">
                Аригато
              </h1>
              <h1 className="text-[#000000] text-[24px] font-bold">180 СОМ</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};

export default Courses;
