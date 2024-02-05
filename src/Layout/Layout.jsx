import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Layout = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <div className="bg-[#F2F2F2]">
      <header className="flex p-[30px_0px] justify-evenly items-center border-b">
        <div className="flex flex-col gap-[5px] text-center">
          <h1 className="text-[#111111] text-[18px] font-[500] font-[DIN_Pro]">
            Наш телефон
          </h1>
          <h1 className="text-[#FF9846] text-[18px] font-[500] font-[DIN_Pro] ">
            +996 705 188 955
          </h1>
          <h1 className="text-[#FF9846] text-[18px] font-[500] font-[DIN_Pro]">
            +996 555 188 955
          </h1>
          <h4 className="text-[#A4ACAD] text-[14px] font-[500] font-[DIN_Pro] ">
            работаем с 10:00 до 00:00
          </h4>
        </div>
        <div className="flex items-center gap-[40px]">
          <p className="text-[#424551] text-[16px] font-bold font-[Lato] not-italic">
            <Link to="/">Home</Link>
          </p>
          <p className="text-[#424551] text-[16px] font-bold font-[Lato] not-italic">
            <Link to="/courses">About</Link>
          </p>
          <p className="text-[#424551] text-[16px] font-bold font-[Lato] not-italic">
            <Link to="/events">Page3</Link>
          </p>
          <p className="text-[#424551] text-[16px] font-bold font-[Lato] not-italic">
            <Link to="/page4 ">Page4</Link>
          </p>
        </div>
        <div className="flex items-center gap-[20px]">
          <h1 className="text-[#111111] text-[18px] fotn-[400] font-[DIN_Pro">
            Отзывы
          </h1>
          <h1 className="text-[#FF9846] text-[18px] font-[500] font-[DIN_Pro]">
            Доставка и оплата
          </h1>
        </div>
      </header>
      <Outlet />
      <div>
        <footer className="pl-[100px] mt-[100px] pr-[100px] flex justify-between items-center pt-[50px] pb-[50px] border-[2px] bg-[whitesmoke] sm:p-[10px]">
          <div className="w-[31%] border-r-[2px] h-[100%] sm:p-[0]">
            <h1 className="pt-[10px] text-[18px]">О компании</h1>
            <h1 className="pt-[10px] text-[18px]">Доставка и оплата</h1>
            <h1 className="pt-[10px] text-[18px]">Лента материалов</h1>
            <h1 className="pt-[10px] text-[18px]">Политика возврата</h1>
          </div>
          <div className="w-[31%] h-[100%] sm:p-[0]">
            <img src="src/img/Обратная свзяь.png" alt="" />
          </div>
          <div className="w-[31%] border-l-[2px] pl-[10px] h-[100%] sm:p-[0]">
            <h1 className="pt-[10px] text-[18px] text-[gray]">
              Тел:+996 705 188 955{" "}
            </h1>
            <h1 className="pt-[10px] text-[18px] text-[gray]">
              Тел:+996 555 188 955{" "}
            </h1>
            <h1 className="pt-[10px] text-[18px] text-[gray]">
              Адрес:Бакаева 126
            </h1>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
