'use client'

import { headerNav } from "@/lib/navigations"
import { motion } from "framer-motion"
import Link from "next/link"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"

export default function HeaderNav() {

  const [toggleNav, setToggleNav] = useState(false)
  const [navWidth, setNavWidth] = useState("100vw")

  const pathname = usePathname()

  useEffect(() => {
    const updateNavWidth = () => {
      if(window.innerWidth < 550){
        setNavWidth("100vw")
      } else if(window.innerWidth < 650){
        setNavWidth("75vw")
      } else if(window.innerWidth < 750){
        setNavWidth("65vw")
      } else {
        setNavWidth("50vw")
      }
    }

    updateNavWidth()

    window.addEventListener("resize", updateNavWidth)
    return () => window.removeEventListener("resize", updateNavWidth)
  }, [])

  return (
    <div className="flex">
      {/* nav bars */}
      <motion.div 
        className={`w-10 h-[36px] ${toggleNav ? "fixed" : "absolute"} top-[36px] right-8 cursor-pointer lg:hidden z-50 group`}
        animate={toggleNav ? "open" : "close"}
        initial={false}
        onClick={() => setToggleNav(!toggleNav)}
      >
        {/* top bar */}
        <motion.div 
          className={`w-full h-[8px] bg-secondary absolute group-hover:bg-primary-accent transition-colors duration-300 group-hover:shadow`}
          style={{
            top: "0%",
            y: "0%",
            rotate: "0deg",
          }}
          variants={{
            open: {
              top: ["0%", "50%", "50%"],
              y: ["0%", "-50%", "-50%"],
              rotate: ["0deg", "0deg", "45deg"],
            },
            close: {
              top: ["50%", "50%", "0%"],
              y: ["-50%", "-50%", "0%"],
              rotate: ["45deg", "0deg", "0deg"],
            }
          }}
        />
        {/* mid bar */}
          <motion.div 
            className="w-full h-[8px] bg-secondary absolute group-hover:bg-primary-accent transition-colors duration-300 group-hover:shadow"
            style={{
              top: "50%",
              y: "-50%",
              rotate: "0deg"
            }}
            variants={{
              open: {
                rotate: ["0deg", "0deg", "45deg"]
              },
              close: {
                rotate: ["45deg", "0deg", "0deg"]
              }
            }}
          />
          {/* bottom bar */}
          <motion.div 
            className="w-full h-[8px] bg-secondary absolute group-hover:bg-primary-accent transition-colors duration-300 group-hover:shadow"
            style={{
              top: "100%",
              y: "-100%",
              rotate: "0deg"
            }}
            variants={{
              open: {
                top: ["100%", "50%", "50%"],
                y: ["-100%", "-50%", "-50%"],
                rotate: ["0deg", "0deg", "-45deg"]
              },
              close: {
                top: ["50%", "50%", "100%"],
                y: ["-50%", "-50%", "-100%"],
                rotate: ["-45deg", "0deg", "0deg"]
              }
            }}
          />
      </motion.div>
      {/* navigation */}
      <motion.div animate={toggleNav ? "open" : "close" }>
        <motion.div
          className="bg-primary-accent-drk h-screen fixed top-0 right-0 lg:hidden min-h-[600px] overflow-x-hidden overflow-y-scroll"
          style={{
            width: "0vw"
          }}
          variants={{
            open: {
              width: navWidth
            },
            close: {
              width: "0vw"
            }
          }}
        >
          <nav className="px-8 mt-32">
            <ul>
              {headerNav.map(link => {
                const isActive = pathname === link.href
                return (
                  <li key={link.href} className="mb-8">
                    <Link 
                      href={link.href} 
                      className={`font-bold text-3xl ${isActive ? "text-secondary" : "text-primary"} hover:text-secondary transition-all duration-300`}
                      onClick={() => setToggleNav(!toggleNav)}  
                    >{link.title}</Link>
                  </li>
                )
              })}
            </ul>
          </nav>
          <div className="px-8 text-secondary absolute bottom-18">
            <h5 className="font-bold text-2xl">Get in touch</h5>
            <a 
              href="http://wa.me/447957340793"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Send us a whatsapp message on 07957340793"
              className="block font-light text-lg"

            >Message us on WhatsApp</a>
            <a 
              href="mailto:hello@nhfc.co.uk"
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Send us an email at hello@nhfc.co.uk"
              className="block font-light text-lg"
            >email us hello@nhfc.co.uk</a>
          </div>
          <div className="w-full h-[12px] bg-primary-accent absolute bottom-12" />
          <div className={`w-24 h-24 rounded-full border-[12px] border-primary-accent absolute bottom-[6px] right-8`} />
          <div className="w-8 h-8 bg-primary-accent rounded-full absolute bottom-[38px] right-16" />
        </motion.div>
      </motion.div>
      <nav className="hidden lg:block mt-auto">
        <ul className="flex gap-8">
          {headerNav.map(link => {
            const isActive = pathname === link.href
            return (
              <li key={link.href} className="p-0">
                <Link href={link.href} className={`font-bold text-lg ${isActive ? "text-primary-accent" : "text-secondary"} hover:text-primary-accent transition-colors duration-300`}>{link.title}</Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}
