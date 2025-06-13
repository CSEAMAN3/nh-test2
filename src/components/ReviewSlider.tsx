'use client'

import { customerReviews } from "@/lib/reviews"
import Image from "next/image"
import { useState } from "react"

export default function ReviewSlider() {

  const [visibleReview, setVisibleReview] = useState(0)

  const increaseVisibleReview = () => {
    if(visibleReview === 2){
      setVisibleReview(0)
    } else {
      setVisibleReview(visibleReview + 1)
    }
  }

  const decreaseVisibleReview = () => {
    if(visibleReview === 0){
      setVisibleReview(2)
    } else {
      setVisibleReview(visibleReview - 1)
    }
  }

  return (
    <div className="flex max-w-[600px] mx-auto">
      <button 
        className="text-6xl text-secondary cursor-pointer hover:text-primary-accent"
        onClick={decreaseVisibleReview}
      >&#8249;</button>
      <div className="max-w-[300px] text-secondary mx-auto">
        <Image 
          src={`${customerReviews[visibleReview].src}`}
          alt={`customer profile`}
          width={400}
          height={400}
          className="w-16 h-16 object-cover rounded-full mx-auto mb-2 border-1 border-primary-accent"
        />
        <h6 className="font-bold text-lg text-center">{customerReviews[visibleReview].name}</h6>
        <p className="font-light text-lg text-center">{customerReviews[visibleReview].content}</p>
        <p className="text-center text-primary-accent">&#9733; &#9733; &#9733; &#9733; &#9733;</p>
      </div>
      <button 
        className="text-6xl text-secondary cursor-pointer hover:text-primary-accent"
        onClick={increaseVisibleReview}
      >&#8250;</button>
    </div>
  )
}

