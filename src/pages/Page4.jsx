import React from "react";

const Page4 = () => {
  return (
    <>
      <section className="w-[90%] m-auto mt-[100px] flex flex-col gap-[15px] ">
        <div className="flex justify-between items-center">
          <h1 className="text-[#111111] text-[24px] font-[500]">Отзывы</h1>
          <button className="bg-[#111111] p-[10px_40px] text-[#FFF] rounded-[5px] ">
            + Добавить отзыв
          </button>
        </div>
        <div className="flex flex-col gap-[20px] ">
          <div className="bg-[#FFF] rounded-[5px] p-[10px] flex flex-col gap-[20px]">
            <div className="flex items-center gap-[20px]">
              <h1 className="text-[#111111] text-[24px] fotn-[500] ">
                Розалия
              </h1>
              <p className="text-[#A4ACAD] text-[16px] font-[500] ">02.24.21</p>
            </div>
            <p className="text-[#000000] text-[18px] font-[400]">
              Ваша доставка и ваши блюда лучшие в Харькове!) всегда очень
              вкусно, вовремя,<br/> всегда вежливые курьеры и девушки на телефоне
            </p>
          </div>
          <div className="bg-[#FFF] rounded-[5px] p-[10px] flex flex-col gap-[20px]">
            <div className="flex items-center gap-[20px]">
              <h1 className="text-[#111111] text-[24px] fotn-[500] ">Елена</h1>
              <p className="text-[#A4ACAD] text-[16px] font-[500] ">02.23.21</p>
            </div>
            <p className="text-[#000000] text-[18px] font-[400]">
              Ооочень вкусно!!!!!
            </p>
          </div>
          <div className="bg-[#FFF] rounded-[5px] p-[10px] flex flex-col gap-[20px]">
            <div className="flex items-center gap-[20px]">
              <h1 className="text-[#111111] text-[24px] fotn-[500] ">
                Сергей Гаврилюк
              </h1>
              <p className="text-[#A4ACAD] text-[16px] font-[500] ">02.23.21</p>
            </div>
            <p className="text-[#000000] text-[18px] font-[400]">
              Заказываем у Вас больше 2 -ух лет, были разные ситуации, но сервис
              стал лучше, <br /> суши вкуснее. За доставку сегодня на время,
              огромное спасибо, точь-в-точь в минута <br /> в минуту. Успехов
              Вам и приятных бонусов нам )
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page4;
