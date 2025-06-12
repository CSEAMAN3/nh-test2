'use client'

import {useModal} from "@/components/ModalProvider"

interface BookingButtonProps {
  className?: string;
}

export default function BookingButton({className} : BookingButtonProps) {

  const {open} = useModal()

  return (
    <button
      onClick={open}
      className={`bg-primary-accent text-primary font-bold px-4 py-2 rounded hover:bg-secondary transition-all duration-300 ${className}`}
    >
      Book Your First Session
    </button>
  )
}
