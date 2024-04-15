import React, { useState } from 'react'
import './ImgSlider.css'

const ImgSlider = ({slides}) => {

const [activeIndex, setActiveIndex]=useState(0)


// Adding Previous and next slide function

const prevSlide=()=>{
    const isFirstIndex = activeIndex === 0
    const newIndex = isFirstIndex ? slides.length - 1 : activeIndex - 1
    setActiveIndex(newIndex)
}

const nextSlide=()=>{
    const isLastIndex = activeIndex === slides.length - 1
    const newIndex = isLastIndex ? 0 : activeIndex + 1
    setActiveIndex(newIndex)
}

const goToSlide=(index)=>{
    setActiveIndex (index);
}

  return (
    <div>
      <div className='slider-container'>
        { slides.map((slides, index)=>
        (
                <div key={slides.id}>
                    <div className={`${index === activeIndex ? "slider active" : "slider inactive"}`}>
                        <img src={slides.src} alt=''/>
                        <span onClick={prevSlide} className='leftArrow'>&#10094;</span>
                        <span onClick={nextSlide}className='rightArrow'>&#10095;</span>
                     </div>
                </div>
       )) }
      </div>
    </div>
  )
}

export default ImgSlider;
 