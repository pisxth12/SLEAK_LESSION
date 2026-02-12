import React from 'react'
import Carousel from '../components/Carousel'
import FeaturedProducts from '../components/FeaturedProducts'

const HomePage = () => {

    const carouselImages = [
        "https://previews.123rf.com/images/worldofvector/worldofvector2103/worldofvector210300025/165953458-meow-cat-kitten-set-square-head-face-banner-cute-cartoon-character-bbaby-pet-animal-yellow-eyes.jpg",
        "https://t3.ftcdn.net/jpg/02/04/09/76/360_F_204097685_38P3YRHzScSAfsPTtenEoi2AnrufPRzI.jpg",
        "https://static.vecteezy.com/system/resources/previews/027/100/338/large_2x/a-banner-with-copy-space-shows-a-ginger-cat-eating-cat-food-from-a-bowl-free-photo.jpg"
        ];

  return (
    <div className='space-y-7'>
            <Carousel carouselImages={carouselImages}/>
            <FeaturedProducts/>
    </div>
  )
}

export default HomePage