import React, { useEffect, useState } from 'react';
// ICONS
import { TbExternalLink } from "react-icons/tb";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

export default function Projects() {
    let [currentIndex, setCurrentIndex] = useState(0);
    let [prevBtn, setPrevBtn] = useState(false);
    let [nextBtn, setNextBtn] = useState(true);
    const [cardSlider, setCardSlider] = useState(null); // Initialize with null
    const [cards, setCards] = useState([]);
    const [cardWidth, setCardWidth] = useState(0);

    useEffect(() => {
        const cardSliderElement = document.querySelector('.cardSlider');
        setCardSlider(cardSliderElement);
        const cardElements = document.querySelectorAll('.card');
        setCards(Array.from(cardElements)); // Convert NodeList to an array
        const firstCard = cardElements[0];
        const cardWidth = firstCard ? firstCard.offsetWidth : 0; // Check if the first card exists
        setCardWidth(cardWidth);
    }, []); // Empty dependency array means this effect runs once after the initial render

    // console.log(cards);
    // console.log(cardSlider);
    // console.log(cardWidth);



    useEffect(() => {
        console.log("useEffect : ", currentIndex);
        setPrevBtn(currentIndex !== 0);
    }, [currentIndex]);

    function prevSlide() {
        console.log("Previous Clicked", currentIndex);
        if (currentIndex > 0) {
            setPrevBtn(true);
            cards[currentIndex].style.display = "block";
            setCurrentIndex(currentIndex - 1); // Update currentIndex
        } else {
            setPrevBtn(false);
        }
    }

    function nextSlide() {
        console.warn("Next Clicked", currentIndex);
        if (currentIndex < cards.length - 1) {
          cards[currentIndex].style.display = "none";
          setCurrentIndex(currentIndex + 1); // Update currentIndex
        }
      }
    return (
        <div className='projects px-10 max-w-[1600px] mx-auto' style={{ fontFamily: "'Poppins', sans-serif" }}>
            <div className="content  md:p-7">
                <div className="headings mb-2 text-white">
                    <h1 className='text-xl' style={{ fontFamily: "'Pacifico', cursive" }}>Some of</h1>
                    <h1 className='text-5xl font-semibold'>My<span className='text-[#47fffc]'> Projects</span></h1>
                </div>
                <div className="wrapper relative py-10 sm:py-5">


                    <button type='button' id='prevBtn' onClick={prevSlide} className={` ${prevBtn ? "block" : "hidden"}  h-[40px] w-[40px] bg-white text-black flex flex-nowrap items-center justify-center rounded-full text-lg absolute top-[50%] left-0 translate-x-[-50%] translate-y-[-50%] z-[999]`}>
                        <FaAngleLeft />
                    </button>
                    <div className="cardSlider  rounded-lg gap-10 flex overflow-hidden whitespace-nowrap">
                        {/* sm:p-8 md:p-6 lg:p-10 mt-10 sm:my-5 */}
                        <div className="card overflow-hidden bg-white rounded-lg relative" style={{ flex: "0 0 auto", width: "300px" }}>
                            <div className="thumbnail h-[120px] sm:h-[140px] rounded-t-lg bg-[#2c2c2ce0]" style={{ backgroundImage: `url('https://wallpapers.com/images/high/amazon-red-art-8dg4jcrh10j3ydft.webp')`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover" }}></div>
                            <div className="details p-3">
                                <h1 className='text-sm text-right capitalize' style={{ fontFamily: "'Pacifico', cursive" }}>ShopNow Ecommerce store</h1>
                            </div>
                            <button className="icon h-[40px] w-[40px] absolute top-[65%] left-5 bg-[#2c2c2c] border-0 shadow-md shadow-gray-500  rounded-full text-[white] flex flex-nowrap items-center justify-center">
                                <TbExternalLink className='text-xl' />
                            </button>
                        </div>
                        <div className="card oveflow-hidden bg-white rounded-lg relative " style={{ flex: "0 0 auto", width: "300px" }}>
                            <div className="thumbnail h-[120px] sm:h-[140px] rounded-t-lg bg-[#2c2c2ce0]" style={{ backgroundImage: `url('https://wallpapers.com/images/high/amazon-red-art-8dg4jcrh10j3ydft.webp')`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover" }}></div>
                            <div className="details p-3">
                                <h1 className='text-sm text-right capitalize' style={{ fontFamily: "'Pacifico', cursive" }}>Chatting App</h1>
                            </div>
                            <button className="icon h-[40px] w-[40px] absolute top-[65%] left-5 bg-[#2c2c2c] border-0 shadow-md shadow-gray-500  rounded-full text-[white] flex flex-nowrap items-center justify-center">
                                <TbExternalLink className='text-xl' />
                            </button>
                        </div>
                        <div className="card overflow-hidden bg-white rounded-lg relative " style={{ flex: "0 0 auto", width: "300px" }}>
                            <div className="thumbnail h-[120px] sm:h-[140px] rounded-t-lg bg-[#2c2c2ce0]" style={{ backgroundImage: `url('https://wallpapers.com/images/high/amazon-red-art-8dg4jcrh10j3ydft.webp')`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover" }}></div>
                            <div className="details p-3">
                                <h1 className='text-sm text-right capitalize' style={{ fontFamily: "'Pacifico', cursive" }}>Telegram ChatBot</h1>
                            </div>
                            <button className="icon h-[40px] w-[40px] absolute top-[65%] left-5 bg-[#2c2c2c] border-0 shadow-md shadow-gray-500  rounded-full text-[white] flex flex-nowrap items-center justify-center">
                                <TbExternalLink className='text-xl' />
                            </button>
                        </div>
                        <div className="card overflow-hidden bg-white rounded-lg relative " style={{ flex: "0 0 auto", width: "300px" }}>
                            <div className="thumbnail h-[120px] sm:h-[140px] rounded-t-lg bg-[#2c2c2ce0]" style={{ backgroundImage: `url('https://wallpapers.com/images/high/amazon-red-art-8dg4jcrh10j3ydft.webp')`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover" }}></div>
                            <div className="details p-3">
                                <h1 className='text-sm text-right capitalize' style={{ fontFamily: "'Pacifico', cursive" }}>StoryTeller Blogs</h1>
                            </div>
                            <button className="icon h-[40px] w-[40px] absolute top-[65%] left-5 bg-[#2c2c2c] border-0 shadow-md shadow-gray-500  rounded-full text-[white] flex flex-nowrap items-center justify-center">
                                <TbExternalLink className='text-xl' />
                            </button>
                        </div>
                        <div className="card overflow-hidden bg-white rounded-lg relative " style={{ flex: "0 0 auto", width: "300px" }}>
                            <div className="thumbnail h-[120px] sm:h-[140px] rounded-t-lg bg-[#2c2c2ce0]" style={{ backgroundImage: `url('https://wallpapers.com/images/high/amazon-red-art-8dg4jcrh10j3ydft.webp')`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover" }}></div>
                            <div className="details p-3">
                                <h1 className='text-sm text-right capitalize' style={{ fontFamily: "'Pacifico', cursive" }}>ERMS</h1>
                            </div>
                            <button className="icon h-[40px] w-[40px] absolute top-[65%] left-5 bg-[#2c2c2c] border-0 shadow-md shadow-gray-500  rounded-full text-[white] flex flex-nowrap items-center justify-center">
                                <TbExternalLink className='text-xl' />
                            </button>
                        </div>
                    </div>
                    <button type='button' id='nextBtn' onClick={nextSlide} className={`h-[40px] w-[40px] ${nextBtn ? "block" : "hidden"} bg-white text-black flex flex-nowrap items-center justify-center rounded-full text-lg absolute top-[50%] right-[-40px] translate-x-[-50%] translate-y-[-50%] z-[999]`}>
                        <FaAngleRight />
                    </button>




                </div>

            </div>
        </div>
    )
}
