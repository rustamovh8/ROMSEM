import { Button } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../App.css";

// import required modules
import { Pagination } from "swiper/modules";
import React from "react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <>
      <div className="pl-[100px] mt-[100px] pr-[100px] pt-[50px] pb-[50px] sm:p-[10px]">
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
          <SwiperSlide>
            <div className="h-[100vh]">
              <img
                style={{ width: "100%", heght: "120vh" }}
                src="src/img/Rectangle 1 (1).png  "
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img
                className="w-[100%] h-[100vh]"
                src="src/img/Rectangle 1 (1).png"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img
                className="w-[100%] h-[100vh]"
                src="src/img/Rectangle 1 (1).png"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img
                className="w-[100%] h-[100vh]"
                src="src/img/Rectangle 1 (1).png"
                alt=""
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="pl-[100px] pr-[100px] pt-[50px] pb-[50px] flex justify-between items-center flex-wrap gap-[20px]">
        <div className="w-[48%]">
          <img className="w-[100%]" src="src/img/С лососем.png" alt="" />
        </div>
        <div className="flex gap-[60px]">
          <div className="w-[48%]">
            <img className="w-[]" src="src/img/С угрем.png" alt="" />
          </div>
          <div className="w-[48%]">
            <img className="w-[]" src="src/img/Без мяса.png" alt="" />
          </div>
        </div>
        <div className="w-[48%]">
          <img className="w-[100%]" src="src/img/Фила.png" alt="" />
        </div>
        <div className="w-[48%]">
          <img className="w-[100%]" src="src/img/Акции.png" alt="" />
        </div>
      </div>
      <div className="flex pl-[100px] pr-[100px] pt-[20px] pb-[20px] gap-[10px]">
        <h1 className="text-[20px] font-[500] hover:bg-[gray] p-[10px] rounded-xl hover:text-[white]">
          Новинки
        </h1>
        <h1 className="text-[20px] font-[500] text-[gray] hover:bg-[gray] p-[10px] rounded-xl hover:text-[white]">
          Популярное
        </h1>
      </div>
      <div className="pl-[100px] pr-[100px] pt-[20px] pb-[20px]">
        <div className="flex justify-between items-center bg-[whitesmoke]">
          <div className="p-[10px] w-[31%] rounded-xl bg-[white]">
            <img className="m-auto" src="src/img/Rectangle 3.png" alt="" />
            <h1 className="font-[600] text-[20px]">Саломон сет</h1>
            <h1 className="text-[gray] border-b-[2px] pb-[10px] pt-[10px]">
              1050 грамм, 30 кусочков
            </h1>
            <div className="flex items-center gap-[20px] ">
              <h1>1500 СОМ</h1>
              <button className="w-[70%] h-[40px] mt-[10px] rounded-xl bg-[orange] text-[white]">
                Хочу!
              </button>
            </div>
          </div>
          <div className="p-[10px] w-[31%] rounded-xl bg-[white]">
            <img className="m-auto" src="src/img/Rectangle 3 (1).png" alt="" />
            <h1 className="font-[600] text-[20px]">
              Филадельфия и <br /> лосось сет
            </h1>
            <h1 className="text-[gray] border-b-[2px] pb-[10px] pt-[10px]">
              1260 грамм, 36 кусочков
            </h1>
            <div className="flex items-center gap-[20px] ">
              <h1>1150 СОМ</h1>
              <button className="w-[70%] h-[40px] mt-[10px] rounded-xl bg-[orange] text-[white]">
                Хочу!
              </button>
            </div>
          </div>
          <div className="p-[10px] w-[31%] rounded-xl bg-[white]">
            <img className="m-auto" src="src/img/Rectangle 3 (2).png" alt="" />
            <h1 className="font-[600] text-[20px]">
              Самая большая <br /> Филадельфия
            </h1>
            <h1 className="text-[gray] border-b-[2px] pb-[10px] pt-[10px]">
              1050 грамм, 30 кусочков
            </h1>
            <div className="flex items-center gap-[20px] ">
              <h1>2100 СОМ</h1>
              <button className="w-[70%] h-[40px] mt-[10px] rounded-xl bg-[orange] text-[white]">
                Хочу!
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
