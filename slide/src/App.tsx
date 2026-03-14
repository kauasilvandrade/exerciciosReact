import './App.css'

import { useState, useEffect } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'

export function App() {

  const [sliderPreview, setSliderPreview] = useState(1)

  const data = [
    {id: '1', image: 'https://sujeitoprogramador.com/wp-content/uploads/2022/08/fullstack-blog.png'},
    {id: '2', image: 'https://sujeitoprogramador.com/wp-content/uploads/2022/08/home.png'},
    {id: '3', image: 'https://sujeitoprogramador.com/wp-content/uploads/2022/03/Frame-321.png'},
    {id: '4', image: 'https://sujeitoprogramador.com/wp-content/uploads/2022/01/thumb-1.png'},
  ]

  useEffect(() => {
    
    function handleSize() {
      if (window.innerWidth < 720) {
        setSliderPreview(1)
      } else {
        setSliderPreview(2)
      }
    }

    handleSize()
    window.addEventListener('resize', handleSize)

    return () => {
      window.removeEventListener('resize', handleSize)
    }

  }, [])

  return (
    <div className="container">
      <h1 className="title">Slider com React JS</h1>

      <Swiper
      slidesPerView={1}
      pagination={{ clickable: true }}
      navigation
      >
        {
          data.map((item) => (
            <SwiperSlide key={item.id}>
              <img 
              src={item.image} 
              alt="Slider"
              className='slide-item'
              />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  )
}