import BookingButton from "./BookingButton";
import Image from "next/image";

interface HeroProps {
  titleBig: string;
  titleSmall: string;
  content: string;
  mainImg: string;
  topImg: string;
  bottomImg: string;
}

export default function Hero({titleBig, titleSmall, content, mainImg, topImg, bottomImg} : HeroProps) {
  return (
    <div className="w-full min-h-[70vh] bg-primary">
      <div className="max-w-[1200px] p-8 mx-auto grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="text-secondary grid md:place-content-center">
          <h1 className="font-black text-4xl sm:text-5xl md:text-4xl lg:text-5xl leading-10 mb-2">{titleBig}<span className="text-base sm:text-lg md:text-base lg:text-lg block">{titleSmall}</span></h1>
          <p className="font-light max-w-[42ch] mb-4">{content}</p>
          <BookingButton className="cursor-pointer max-w-[300px]" />
        </div>
        <div className="relative grid place-content-center">
          <Image 
            src={`/images/${mainImg}`}
            alt={`football coach giving young player a high five.`}
            width={400}
            height={400}
            className="w-[90%] h-[300px] sm:h-[400px] object-cover object-right mx-auto border-2 border-primary-accent rounded-4xl"
          />
          <Image
            src={`/images/${topImg}`}
            alt={`Football coach training young player with resistant bands to strengthen legs.`}
            width={400}
            height={400}
            className="w-[25%] h-[140px] object-cover rounded-xl border-2 border-primary-accent absolute top-8"
          />
          <Image
            src={`/images/${bottomImg}`}
            alt={`Football coach training young player with resistant bands to strengthen legs.`}
            width={400}
            height={400}
            className="w-[25%] h-[140px] object-cover rounded-xl border-2 border-primary-accent absolute bottom-8 right-0"
          />
        </div>
      </div>
    </div>
  )
}
