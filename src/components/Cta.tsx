import BookingButton from "./BookingButton";
import Image from "next/image";


export default function Cta() {
  return (
    <div className="px-8 py-32 lg:py-40 max-w-[1200px] mx-auto relative">
      <h2 className="font-bold text-2xl md:text-4xl italic sm:mb-2 text-primary text-center">Ready to get started?</h2>
      <p className="font-light md:text-lg max-w-[60ch] text-center mx-auto mb-8">Book your childs first session today and help them build skills, confidence, and a love for the game - one kick at a time.</p>
      <BookingButton className="cursor-pointer bg-secondary-accent hover:bg-secondary-accent-drk text-secondary block mx-auto" />
      {/* arrow top left */}
      <Image 
        src={`/images/tactical_arrow.svg`}
        alt={`tactical arrow`}
        width={400}
        height={400}
        className="w-[80px] absolute top-8 left-8 rotate-90 md:left-[10%]"
      />
      {/* arrow top right */}
      <Image 
        src={`/images/tactical_arrow.svg`}
        alt={`tactical arrow`}
        width={400}
        height={400}
        className="w-[80px] absolute top-8 right-8 rotate-180 md:right-[10%]"
      />
      {/* arrow bottom left */}
      <Image 
        src={`/images/tactical_arrow.svg`}
        alt={`tactical arrow`}
        width={400}
        height={400}
        className="w-[80px] absolute bottom-8 left-8 md:left-[10%]"
      />
      {/* arrow bottom right */}
      <Image 
        src={`/images/tactical_arrow.svg`}
        alt={`tactical arrow`}
        width={400}
        height={400}
        className="w-[80px] absolute bottom-8 right-8 -rotate-90 md:right-[10%]"
      />
    </div>
  )
}
