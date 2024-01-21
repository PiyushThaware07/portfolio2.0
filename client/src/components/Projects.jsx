import React, { useState, useEffect } from 'react';
import Carousel from 'react-elastic-carousel';
import { IoMdLink } from "react-icons/io";

export default function Projects(props) {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 3 },
  ];

  const state = {
    items: [
      { id: 1, title: 'Shopnow - Ecommerce' },
      { id: 2, title: 'Telegram ChatBot' },
      { id: 3, title: 'ChatNow - chatting app' },
      { id: 4, title: 'ERMS' },
      { id: 5, title: 'FreeTube - Youtube Clone' }
    ]
  }




  return (
    <>
      <div className="px-3 sm:px-10 md:px-16 pb-10">
        <div className="mb-5 flex flex-nowrap items-center gap-3 px-4 md:px-0">
          <div className="line-before h-[1.5px] w-full bg-slate-300"></div>
          <h1 className='text-lg font-bold text-center uppercase text-slate-500 text-nowrap'>Projects</h1>
          <div className="line-after h-[1.5px] w-full bg-slate-300"></div>
        </div>

        <div className="flex flex-nowrap items-center pt-6">

          <Carousel
            breakPoints={breakPoints}
            showArrows={false}
            enableSwipe={true}
            enableMouseSwipe={true}
          >
            {
              state.items.map((item, index) => (
                <div className="card h-full card  flex-1 mx-1 rounded-lg relative">
                  <div className="h-full border-[2px] border-slate-700 shadow-sm rounded-lg ">
                    <div className="thumbnail h-[160px]">
                      <img className='object-cover h-full w-full rounded-t-md' src='https://images.pexels.com/photos/1544376/pexels-photo-1544376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt="" />
                    </div>
                    <div className=" flex flex-wrap gap-2 justify-end p-2">
                      {/* FRONT_END */}
                      <h1 className='text-md font-semibold' >{item.title}</h1>
                    </div>
                  </div>
                  <a href={item.url} target='_blank' className="absolute bottom-[11%] left-[5%] h-[40px] w-[40px] bg-white shadow-md rounded-full flex flex-nowrap items-center justify-center">
                    <IoMdLink />
                  </a>
                </div>
              ))
            }
          </Carousel>
        </div>
      </div>
    </>
  );
}
