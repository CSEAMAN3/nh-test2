import { ReactNode } from "react"
import Image from "next/image";

interface CoachSectionProps {
  children: ReactNode;
  heading: string;
}

export default function CoachSection({children, heading} : CoachSectionProps) {
  return (
    <div className="bg-primary">
            <div className="max-w-[1200px] mx-auto grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="px-8 mb-8 pt-8 md:grid md:place-content-center">
                <h2 className="font-bold text-2xl sm:text-4xl italic sm:mb-2 text-primary-accent">{heading}</h2>
                {children}
              </div>
              <Image 
                src={"/images/the_coach.png"}
                alt={"Noah hunt head coach and owner of NH Football Coaching"}
                width={400}
                height={400}
                className="w-[60%] max-w-[400px] md:w-full mx-auto"
              />
            </div>
          </div>
  )
}
