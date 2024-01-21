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


  const [projects, setProjects] = useState([]);
  async function handleProjectsReadData() {
    const request = await fetch(`${props.backendURL}/api/retriveProject`, {
      method: "get",
      headers: {
        "Content-Type": "application/json"
      }
    });
    const response = await request.json();
    console.warn("Response : ", response.data);
    if (response.success) {
      setProjects(response.data);
    }
    else {
      setProjects([]);
    }
  }
  useEffect(() => {
    handleProjectsReadData();
  }, [])



  return (
    <>
      <div className="px-3 sm:px-10 md:px-16 pb-10">
        <div className="mb-5 flex flex-nowrap items-center gap-3 px-4 md:px-0">
          <div className="line-before h-[1.5px] w-full bg-slate-300"></div>
          <h1 className='text-lg font-bold text-center uppercase text-slate-500 text-nowrap'>Projects</h1>
          <div className="line-after h-[1.5px] w-full bg-slate-300"></div>
        </div>
        {
          projects.length !== 0
          &&
          (
            <div className="flex flex-nowrap items-center pt-6">
              <Carousel
                breakPoints={breakPoints}
                showArrows={false}
                enableSwipe={true}
                enableMouseSwipe={true}
              >
                {projects.map((item, index) => (
                  <div className="card h-full card  flex-1 mx-1 rounded-lg relative" key={index}>
                    <div className="h-full border-[2px] border-slate-700 shadow-sm rounded-lg ">
                      <div className="thumbnail h-[160px]">
                        <img className='object-cover h-full w-full rounded-t-md' src={`http://localhost:8000/uploads/${item.thumbnail}`} alt="" />
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
                ))}
              </Carousel>
            </div>
          )
        }
      </div>
    </>
  );
}
