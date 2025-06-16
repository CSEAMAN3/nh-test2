'use client'

import { useState } from "react";
import {motion, AnimatePresence} from "framer-motion"
import { FaChevronLeft } from "react-icons/fa";

type FaqItem = {
  id: number;
  question: string;
  answer: string;
}

interface FaqProp {
  items: FaqItem[];
} 

export default function FaqAccordion({items} : FaqProp) {

  const [openItemId, setOpenItemId] = useState<number | null>(null)

  const toggleItem = (id : number) => {
    setOpenItemId(prev => (prev === id ? null : id))
  }


  return (
    <div className="space-y-4">
    {items.map(item => {
      const isOpen = openItemId === item.id
      const contentId = `faq-${item.id}-content`

      return (
        <div key={item.id} className="border-b border-primary pb-4 group">
          <button
            onClick={() => toggleItem(item.id)}
            className="flex justify-between items-center w-full text-left font-semibold text-lg focus:outline-none"
            aria-expanded={isOpen}
            aria-controls={contentId}
          >
            <span className="text-primary group-hover:text-grassroots">{item.question}</span>
            <motion.span
              animate={{ rotate: isOpen ? -90 : 0 }}
              transition={{ duration: 0.2 }}
              className="text-primary group-hover:text-grassroots"
            >
              <FaChevronLeft size={20} />
            </motion.span>
          </button>
          <AnimatePresence initial={false}>
           {isOpen && <motion.div
              key="content"
              id={contentId}
              initial={{height: 0, opacity: 0}}
              animate={{height: "auto", opacity: 1}}
              exit={{height: 0, opacity: 0}}
              transition={{duration: 0.3, ease: 'easeInOut'}}
              className="overflow-hidden text-primary text-base"
            >
              <p className="py-2">{item.answer}</p>
            </motion.div>}
          </AnimatePresence>
        </div>
      )
    })}
  </div>
  )
}
