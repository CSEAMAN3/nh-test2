'use client'

import {createContext, useContext, useState, ReactNode} from "react"

type ModalContextType = {
  open: () => void;
  close: () => void;
}

const ModalContext = createContext<ModalContextType | null>(null)

export function ModalProvider({children} : {children : ReactNode}) {

  const [isOpen, setIsOpen] = useState(false)

  const open = () => setIsOpen(true)
  const close = () => setIsOpen(false)

  return (
    <ModalContext.Provider value={{open, close}}>
      {children}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
          <div className="bg-secondary p-6 rounded-lg w-full max-w-md shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Book Your First Session</h2>
            <button
              onClick={close}
              className="mt-4 bg-secondary-accent text-secondary px-4 py-2 rounded hover:bg-secondary-accent-drk transition-colors duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </ModalContext.Provider>
  )
}

export function useModal(){
  const context = useContext(ModalContext)
  if(!context) throw new Error(`useModal must be used within modal provider`)
  return context
}
