"use client";
import React, { useRef } from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import './HeroImageSlider.css';
type Props = {};

function HeroImageSlider({}: Props) {
    gsap.registerPlugin(useGSAP);
    const container = useRef(null);
    const sliderContent = [
        "hello",
        "Hi",
        "Hello World"
    ];
    let currImgIdx = 2;
    let currContentIdx = 1;
    const totalImgs = 3;
    let isAnimating = false;
    // function splitTextIntoSpans (selector:string){
    //     let elements = document.querySelectorAll(selector);
    //     elements.forEach((elem) => {
    //         let text = elem?.innerText;
    //         let splitText = text?.split("").map((char:string)=>{
    //             return `<span>${char === " " ? "&nbsp;&nbsp;" : char}</span>`
    //         }).join("");
    //         elem.innerHTML = splitText;
    //         console.log(splitText);
    //     });
    // }
    // useGSAP(() => {
    //     // gsap code here...
    //     gsap.to(".slide-next-img", { 
    //         clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    //         duration: 1.5, // Adjust duration as needed
    //         ease: "power3.out", // Adjust easing as needed
    //         delay: 1,
    //     });
    //     document.addEventListener("click", ()=>{
    //         if(isAnimating) return;

    //         splitTextIntoSpans(".slider-content-active h1");
    //         gsap.to('.slide-active img',{
    //             scale: 2,
    //             duration: 2,
    //             ease: "power3.out",
    //         })

    //         gsap.to('.slider-content-active h1 span', {
    //             top: "-175px",
    //             stagger: 0.05,
    //             ease: "power3.out",
    //             duration: 0.5,
    //             onComplete: ()=>{
    //                 gsap.to(".slider-content-active", {
    //                     top: "-175px",
    //                     ease:"power3.out",
    //                     duration: 0.25,
    //                 })
    //             }
    //         });
    //     })
    //     splitTextIntoSpans(".slider-content-next h1");
    //     gsap.set(".slider-content-next h1 span", {
    //         top:"200px",
    //     });
    //     gsap.to(".slider-content-next", {
    //         top: "0",
    //         duration: 1.125,
    //         ease:"power3.out",
    //         onComplete: ()=>{
    //             document.querySelector("slider-content-active")?.remove();
    //             gsap.to(".slider-content-next h1 span", {
    //                 top: 0,
    //                 stagger:0.05,
    //                 ease:"power3.out",
    //                 duration: 0.5,
    //             });

    //             const nextContent = document.querySelector(".slider-content-next");
    //             nextContent?.classList.remove("slider-content-next");
    //             nextContent?.classList.add("slider-content-active");
    //             nextContent.style.top = "0";
    //             currContentIdx = (currContentIdx + 1) % totalImgs;
    //             const nextContentText = sliderContent[currContentIdx];
    //             const newContentHTML = `<div className='slider-content-next' style="top: 200px;">${nextContentText}</div>`;
    //             document.querySelector(".slider-content")?.insertAdjacentHTML("beforeend", newContentHTML);
    //         }
    //     });

    //     currImgIdx = (currImgIdx % totalImgs) + 1;
    //     const newSlideHTML = `
    //         <div className="slide-next">
    //             <div className="slide-next-img">
    //                 <img
    //                     className='img'
    //                     src="./Assets/Banner/BannerImg${currImgIdx}.jpg" alt="Banner image"
    //                 />
    //             </div>
    //         </div>
    //     `;
    //     document.querySelector(".slider")?.insertAdjacentHTML("beforeend", newSlideHTML);
    //     gsap.to(".slider .slide-next .slide-next-img", {
    //         clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    //         duration: 1.5,
    //         ease: "power3.out",
    //         delay: 0.5,
    //     });
    //     const slideNextImg = document.querySelector(".slide-next-img");
    //     gsap.to(slideNextImg, {
    //         width:"100vw",
    //         height:"100vh",
    //         duration: 2,
    //         ease: "power3.out",
    //         onComplete: () => {
    //             const currActiveSlide = document.querySelector(".slide-active");
    //             if(currActiveSlide){
    //                 currActiveSlide.parentNode?.removeChild(currActiveSlide);
    //             }
    //             const nextSlide = document.querySelector(".slide-next");
    //             if(nextSlide){
    //                 nextSlide.classList.remove("slide-next");
    //                 nextSlide.classList.add("slide-active");

    //                 const nextSlideImg = nextSlide?.querySelector(".slide-next-img");
    //                 if(nextSlide){
    //                     nextSlideImg?.classList.remove(".slide-next-img");
    //                 }
    //             };
    //             setTimeout(()=>{
    //                 isAnimating = false;
    //             }, 500)
    //         },
    //     })
    //     // gsap.to(".bottom", { 
    //     //     duration: 1, // Adjust duration as needed
    //     //     ease: "power3.out", // Adjust easing as needed
    //     //     y: "0%"
    //     // }); 
      
    // }, { scope: container });
  return (
        <div ref={container} className='relative w-full min-h-[100vh]'>

        </div>
    // <div ref={container} className='relative w-full min-h-[100vh]'>
    //     <div className='absolute top-0 left-0 overflow-hidden w-full h-[100%] slider'>
    //         <div className="absolute w-[100%] h-[100%] slide-active">
    //             <img
    //                 className='img'
    //                 src="./Assets/Banner/BannerImg1.jpg" alt="Banner image"
    //             />
    //         </div>
    //         <div className="absolute w-[100%] h-[100%] flex items-center justify-center slide-next">
    //             <div className="slide-next-img">
    //                 <img
    //                     className='img'
    //                     src="./Assets/Banner/BannerImg2.jpg" alt="Banner image" 
    //                 />
    //             </div>
    //         </div>
    //     </div>
    //     <div className="slider-content">
    //         <div className="slider-content-active">
    //             <h1>John</h1>
    //         </div>
    //         <div className="slider-content-next">
    //             <h1>Mathew</h1>
    //         </div>
    //     </div>
    //     {/* <div className="animated-title">
    //         <div className="text-top">
    //             <div className=''>
    //                 <span className=''>
    //                     A limited NT's men's collection
    //                 </span>
    //                 <span className=''>Casual Fits</span>
    //             </div>
    //         </div>
    //         <div className="text-bottom">
    //             <div className=''>SHOP NOW</div>
    //         </div>
    //     </div> */}
    // </div>
)}

export default HeroImageSlider