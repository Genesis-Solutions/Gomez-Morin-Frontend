import React from 'react'
import CardImage from "./CardImage"

const GalleryCard = ({icon1, icon2, icon3}) => {
  return (
    <div class="w-full h-full">
        <div class="grid grid-cols-3 gap-4 mt-10 mb-10 ml-10 mr-10">
          <div class="mr-8">
            <CardImage  icon = {icon1}/>
          </div>
          <div class="mr-8">
            <CardImage  icon = {icon2}/>
          </div>
          <div class="mr-8">
            <CardImage  icon = {icon3}/>
          </div>
        </div>
    </div>
  )
}

export default GalleryCard
