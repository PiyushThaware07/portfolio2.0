import React from 'react';
import Carousel from 'react-elastic-carousel';
import { IoMdLink } from "react-icons/io";

export default function Projects() {
  const state = {
    items: [
      { id: 1, title: 'item #1' },
      { id: 2, title: 'item #2' },
      { id: 3, title: 'item #3' },
      { id: 4, title: 'item #4' },
      { id: 5, title: 'item #5' },
    ],
  };

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 3 },
  ];




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
            easing="cubic-bezier(1,.15,.55,1.54)"
            transitionMs={700}
            enableSwipe={true}
            enableMouseSwipe={true}
          >
            {state.items.map((item, index) => (
              <div className="card h-full card  flex-1 mx-1 rounded-lg relative" key={index}>
                <div className="h-full border-[2px] border-slate-700 shadow-sm rounded-lg ">
                  <div className="thumbnail h-[160px]">
                    <img className='object-cover h-full w-full rounded-t-md' src="https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                  </div>
                  <div className=" flex flex-wrap gap-2 justify-end p-2">
                    {/* FRONT_END */}
                    <h1 className='text-md font-semibold' >{item.title}</h1>
                  </div>
                </div>
                <button className="absolute bottom-[11%] left-[5%] h-[40px] w-[40px] bg-white shadow-md rounded-full flex flex-nowrap items-center justify-center">
                  <IoMdLink/>
                </button>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
}
