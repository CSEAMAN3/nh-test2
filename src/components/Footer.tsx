import Image from "next/image"
import Link from "next/link"

import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
import { FaSquareInstagram } from "react-icons/fa6";
import BookingButton from "./BookingButton";

export default function Footer() {

  const year = new Date().getFullYear()

  return (
    <footer className="bg-primary min-h-[400px] pb-16">
      <div className="max-w-[1200px] p-8 mx-auto grid grid-cols-1 gap-8 lg:gap-24 md:grid-cols-2 lg:grid-cols-3">
      {/* column 1 */}
        <div className="grid gap-8">
          <Link href="/">
            <Image 
              src={`/images/nhfc-logo-white.svg`}
              alt={`NH Football Coaching logo`}
              width={400}
              height={400}
              className="w-[140px]"
            />
          </Link>
          <div className="flex gap-4">
            <FaLocationDot className="text-secondary text-xl" />
            <address className="text-secondary font-light">
              <span className="block">The Abode Arena at Mulberry Park,</span>
              <span className="block">The Common, Mulbarton,</span>
              <span className="block">Norfolk, NR14 8AE</span>
            </address>
          </div>
          <div className="flex gap-4">
            <MdEmail className="text-secondary text-xl mt-[2px]" />
            <a 
              href="mailto:hello@nhfc.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Send us an email at hello@nhfc.co.uk"
              className="text-secondary font-light hover:text-primary-accent">hello@nhfc.co.uk</a>
          </div>
          <div className="flex gap-4">
            <IoLogoWhatsapp className="text-secondary text-xl" />
            <a href="https://wa.me/447123456789"
                aria-label="Message us on WhatsApp at 07123 456789"
                target="_blank"
                rel="noopener noreferrer"
                className="font-light text-secondary hover:text-primary-accent"
                >Message us on WhatsApp here</a>
          </div>
          <div className="text-secondary text-4xl flex gap-4">
            <a href="">
              <FaFacebookSquare className="hover:text-primary-accent"/>
            </a>
            <a href="">
              <FaSquareXTwitter className="hover:text-primary-accent"/>
            </a>
            <a href="">
              <AiFillTikTok className="hover:text-primary-accent"/>
            </a>
            <a href="">
              <FaSquareInstagram className="hover:text-primary-accent"/>
            </a>
          </div>
        </div>
        {/* column two */}
        <div className="grid gap-8">
        <div className="grid grid-cols-1 gap-4 text-secondary h-fit">
          <Link href={"/"} className="hover:text-primary-accent w-fit">Home</Link>
          <Link href={"/about-nhfc"} className="hover:text-primary-accent w-fit">About NHFC</Link>
          <Link href={"/our-sessions"} className="hover:text-primary-accent w-fit">Our Sessions</Link>
          <Link href={"/blog"} className="hover:text-primary-accent w-fit">Blog</Link>
          <Link href={"/"} className="hover:text-primary-accent w-fit">FAQs</Link>
          <Link href={"/contact"} className="hover:text-primary-accent w-fit">Contact</Link>
        </div>
        {/* column three */}
        <div className="grid grid-cols-1 gap-4 text-secondary h-fit">
          <Link href={"/safe-gaurding"} className="hover:text-primary-accent w-fit">Safe Gaurding</Link>
          <Link href={"/privacy"} className="hover:text-primary-accent w-fit">Privacy Policy</Link>
          <Link href={"/terms"} className="hover:text-primary-accent w-fit">Terms & Conditions</Link>
        </div>
        </div>
        {/* column 4 */}
        <div className="">
          <h3 className="font-bold text-2xl italic mb-2 text-secondary">Ready to get started?</h3>
          <BookingButton className="cursor-pointer" />
        </div>
      </div>
      <p className="font-light text-secondary text-center">&copy;NH Football Coaching {year}. All rights reserved.</p>
    </footer>
  )
}
