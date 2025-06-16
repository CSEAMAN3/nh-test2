'use client'

import {faQuestions} from "@/lib/faQuestions"
import { useState } from "react"
import FaqAccordion from "./FaqAccordion"


export default function Faq() {

  const [selectedCategory, setSelectedCategory] = useState("General Info")

  const categories = [...new Set(faQuestions.map(q => q.category))]

  const filteredFaqs = faQuestions.filter(q => q.category === selectedCategory)

  return (
    <div className="max-w-[800px] mx-auto">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 mb-8">
        {categories.map(category => {
          return (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`${selectedCategory === category ? "bg-secondary-accent" : "bg-secondary-accent-drk"} hover:bg-secondary-accent cursor-pointer text-secondary font-bold px-2 py-4 rounded-sm`}
            >
              {category}
            </button>
          )
        })}
      </div>
      <FaqAccordion items={filteredFaqs} />
    </div>
  )
}
