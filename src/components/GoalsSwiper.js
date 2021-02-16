import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper/core';
// Img
import plantGoal from '../assets/img/plantGoal.svg'
//Styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';

SwiperCore.use([Navigation]);


const GoalsSwiper = ({ tasks }) => {
  return (
    <Swiper slidesPerView={1}
     navigation
    >
      {tasks.map(task => 
        <SwiperSlide key={task.id} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <div className="plant-goal">
            <img src={plantGoal} alt="plant a new goal" />
            <p className="plant-goal-text">{task.text}</p>
          </div>
        </SwiperSlide>
      )}
    </Swiper>
  )
}

export default GoalsSwiper
