import React, { useEffect, useState } from 'react';
// ICONS
import { TbExternalLink } from "react-icons/tb";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

// IMAGES
import bg1 from "../static/img/01.jpeg";
import bg2 from "../static/img/02.jpeg";
import bg3 from "../static/img/03.jpeg";
import bg4 from "../static/img/04.jpeg";


export default function Projects() {
    let [currentIndex, setCurrentIndex] = useState(0);
    const [cardSlider, setCardSlider] = useState(null);
    const [cards, setCards] = useState([]);
    const [cardWidth, setCardWidth] = useState(0);

    useEffect(() => {
        const cardSliderElement = document.querySelector('.cardSlider');
        setCardSlider(cardSliderElement);
        const cardElements = document.querySelectorAll('.card');
        setCards(Array.from(cardElements));
        const firstCard = cardElements[0];
        const cardWidth = firstCard ? firstCard.offsetWidth : 0;
        setCardWidth(cardWidth);
    }, []);
    // console.log(cardSlider);
    // console.log(cards);
    // console.log(cardWidth);

    function handleNext() {
        console.warn("Next Clicked Current Initial", currentIndex);
        if (currentIndex < cards.length - 1) {
            cards[currentIndex].style.display = "none";
            currentIndex = currentIndex + 1;
            setCurrentIndex(currentIndex);
            console.log(currentIndex, cards.length - 1);
        }
    }

    function handlePrev() {
        console.warn("Previous Clicked Current Initial", currentIndex);
        if (currentIndex > 0) {
            currentIndex = currentIndex - 1;
            setCurrentIndex(currentIndex);
            cards[currentIndex].style.display = "block";
            console.log(currentIndex);
        }
    }

    return (
        <div id='projects' className='projects relative px-5 md:px-10 max-w-[1600px] mx-auto mt-5' style={{ fontFamily: "'Poppins', sans-serif" }}>
            <div className="content  md:w-auto md:px-7">
                <div className="p-0 md:px-5  rounded-xl">
                    <div className="flex flex-nowrap items-end gap-2">
                        <div className="headings mb-2 text-white ps-5">
                            <h1 className='text-xl' style={{ fontFamily: "'Pacifico', cursive" }}>Some of</h1>
                            <h1 className='text-4xl md:text-5xl font-semibold whitespace-nowrap'>My<span className='text-[#47fffc]'> Projects</span></h1>
                        </div>
                        <div className="line flex flex-col flex-nowrap flex-1 mb-[25px] ">
                            <div className="line-1 w-full h-[1.4px] bg-[white] mb-1"></div>
                            <div className="line-2 w-full h-[1.4px] bg-[#47fffc] "></div>
                        </div>
                    </div>

                    <div className="wrapper relative p-5 my-5 md:my-10">
                        <button type='button' id='prevBtn' onClick={handlePrev} className={` ${currentIndex == 0 ? "hidden" : "block"}  h-[40px] w-[40px] bg-white text-black flex flex-nowrap items-center justify-center rounded-full text-lg absolute top-[50%] left-[20px] translate-x-[-50%] translate-y-[-50%] z-[999]`}>
                            <FaAngleLeft />
                        </button>
                        <div className="cardSlider  rounded-lg gap-10 flex overflow-hidden whitespace-nowrap">
                            {/* sm:p-8 md:p-6 lg:p-10 mt-10 sm:my-5 */}
                            <div className="card bg-white rounded-lg relative" style={{ flex: "0 0 auto", width: "300px" }}>
                                <div className="thumbnail h-[140px] sm:h-[200px] rounded-t-lg bg-[#2c2c2ce0]" style={{ backgroundImage: `url('${bg1}')`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover" }}></div>
                                <div className="details p-3">
                                    <h1 className='text-sm text-center sm:text-right capitalize' style={{ fontFamily: "'Pacifico', cursive" }}>ShopNow Ecommerce store</h1>
                                </div>
                                <button className="icon h-[40px] w-[40px] absolute top-[71%] left-5 bg-[#2c2c2c] border-0 shadow-md shadow-gray-500  rounded-full text-[white] flex flex-nowrap items-center justify-center hover:translate-y-[-3px] transition-transform">
                                    <TbExternalLink className='text-xl' />
                                </button>
                            </div>
                            <div className="card oveflow-hidden bg-white rounded-lg relative " style={{ flex: "0 0 auto", width: "300px" }}>
                                <div className="thumbnail h-[140px] sm:h-[200px] rounded-t-lg bg-[#2c2c2ce0]" style={{ backgroundImage: `url('${bg2}')`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover" }}></div>
                                <div className="details p-3">
                                    <h1 className='text-sm text-center sm:text-right capitalize' style={{ fontFamily: "'Pacifico', cursive" }}>Telegram ChatBot</h1>
                                </div>
                                <button className="icon h-[40px] w-[40px] absolute top-[71%] left-5 bg-[#2c2c2c] border-0 shadow-md shadow-gray-500  rounded-full text-[white] flex flex-nowrap items-center justify-center hover:translate-y-[-3px] transition-transform">
                                    <TbExternalLink className='text-xl' />
                                </button>
                            </div>
                            <div className="card bg-white rounded-lg relative " style={{ flex: "0 0 auto", width: "300px" }}>
                                <div className="thumbnail h-[140px] sm:h-[200px] rounded-t-lg bg-[#2c2c2ce0]" style={{ backgroundImage: `url('${bg3}')`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover" }}></div>
                                <div className="details p-3">
                                    <h1 className='text-sm text-center sm:text-right capitalize' style={{ fontFamily: "'Pacifico', cursive" }}>StoryTeller Blogs</h1>
                                </div>
                                <button className="icon h-[40px] w-[40px] absolute top-[71%] left-5 bg-[#2c2c2c] border-0 shadow-md shadow-gray-500  rounded-full text-[white] flex flex-nowrap items-center justify-center hover:translate-y-[-3px] transition-transform">
                                    <TbExternalLink className='text-xl' />
                                </button>
                            </div>
                            <div className="card bg-white rounded-lg relative " style={{ flex: "0 0 auto", width: "300px" }}>
                                <div className="thumbnail h-[140px] sm:h-[200px] rounded-t-lg bg-[#2c2c2ce0]" style={{ backgroundImage: `url('${bg4}')`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover" }}></div>
                                <div className="details p-3">
                                    <h1 className='text-sm text-center sm:text-right capitalize' style={{ fontFamily: "'Pacifico', cursive" }}>Chatting App chatnow</h1>
                                </div>
                                <button className="icon h-[40px] w-[40px] absolute top-[71%] left-5 bg-[#2c2c2c] border-0 shadow-md shadow-gray-500  rounded-full text-[white] flex flex-nowrap items-center justify-center hover:translate-y-[-3px] transition-transform">
                                    <TbExternalLink className='text-xl' />
                                </button>
                            </div>

                            <div className="card  cursor-pointer rounded-lg relative border-2 border-[#e1dede4c] hover:border-[#47fffc]  text-[#e1dede4c] hover:text-[#47fffc]" style={{ flex: "0 0 auto", width: "290px" }}>
                                <div className="thumbnail h-[180px] sm:h-[250px] rounded-t-lg bg-[#2c2c2ce0] relative" style={{ backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover" }}>
                                    <h1 className='text-lg  tracking-[1.2px] font-[400] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-nowrap items-center justify-center gap-2'>More Projects <TbExternalLink /></h1>
                                </div>
                            </div>
                        </div>
                        <button type='button' id='nextBtn' onClick={handleNext} className={` ${currentIndex == cards.length - 1 ? "hidden" : ""}  md:${currentIndex == cards.length - 2 ? "hidden" : ""}  h-[40px] w-[40px]  bg-white text-black flex flex-nowrap items-center justify-center rounded-full text-lg absolute top-[50%] right-[-20px] translate-x-[-50%] translate-y-[-50%] z-[999]`}>
                            <FaAngleRight />
                        </button>




                    </div>
                </div>


            </div>
        </div>
    )
}
