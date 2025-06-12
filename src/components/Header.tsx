import Image from "next/image"
import Link from "next/link"
import HeaderNav from "./HeaderNav"
import BookingButton from "./BookingButton"


export default function Header() {
  return (
    <header className="bg-primary">
      <div  className="p-8 max-w-[1200px] mx-auto flex justify-between">
        <Link href={`/`}>
          <Image 
            src={`/images/nhfc-logo-white.svg`}
            alt={`logo`}
            width={400}
            height={400}
            className="w-[120px] lg:w-[160px]"
          />
        </Link>
        <HeaderNav />
        <BookingButton className="cursor-pointer hidden md:block md:mr-16 lg:mr-0" />
      </div>
    </header>
  )
}
