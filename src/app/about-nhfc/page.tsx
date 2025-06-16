import Hero from "@/components/Hero"
import CoachQuote from "@/components/CoachQuote"
import Cta from "@/components/Cta"

import Image from "next/image"
import CoachSection from "@/components/CoachSection"

export default function page() {
  return (
    <main className="">
      {/* hero section */}
      <Hero 
        titleBig="BE THE BEST"
        titleSmall="Helping Young Players Grow"
        content="NH Football Coaching was founded by Noah Hunt, a life long footballer and passonate youth coach, with one clear goal - to help young players unlock thier potential while developing love for the game."
        mainImg="training_four.jpg"
        topImg="training_two.jpg"
        bottomImg="training_seven.jpg"
      />
      {/* coach quote section */}
      <CoachQuote quote="Whether a child is just starting out or looking to sharpen their skills, our sessions are designed to support their journey - through personalised coaching, real engagement, and a whole lot of energy" />
      {/* main section */}
      <div className="max-w-[1200px] mx-auto md:mb-8">
        {/* Why we Started */}
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 mb-4">
          <div className="grid md:place-content-center">
            <h2 className="font-bold text-2xl sm:text-4xl italic sm:mb-2 px-8">Why We Started</h2>
            <p className="font-light text-base px-8 max-w-[60ch] mb-4">Noah&#39;s passion for football runs deep. As a player for Mulbarton first team and head coach of the U18&#39;s, football has always been more than a game - it&#39;s been a way of life.</p>
            <p className="font-light text-base px-8 max-w-[60ch]">After finishing his studies, Noah launched NH Football coaching not to chase a market trend, but to give back to the game and support the next generation. His aim? To offer young players the space, guidance and belief they need to grow - as athletes and as individuals. </p>
          </div>
          <Image 
            src={"/images/training_eight.jpg"}
            alt={"Football Coach giving player a high five after successfully completing a training drill."}
            width={400}
            height={400}
            className="w-full h-[200px] sm:h-[300px] md:h-full object-cover "
          />
        </div>
        {/* our approach section */}
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
          <div className="grid md:place-content-center md:order-2">
            <h2 className="font-bold text-2xl sm:text-4xl italic sm:mb-2 px-8">Our Approach</h2>
            <p className="font-light text-base px-8 max-w-[60ch] mb-4">What makes NH Football Coaching is the focus on small group sessions, energy filled training, and coaching that truely connects.</p>
            <p className="font-light text-base px-8 max-w-[60ch]">We believe that with the right guidance, consitent effort, and a willingness to learn, any player can make real progress. Noah brings not only technical knowledge and engaging drills to each session, but also a mindset that helps players grow in confidence, focus and ability.</p>
          </div>
          <Image 
            src={"/images/training_three.jpg"}
            alt={"Football Coach giving player a high five after successfully completing a training drill."}
            width={400}
            height={400}
            className="w-full h-[200px] sm:h-[300px] md:h-full object-cover md:order-1"
          />
        </div>
      </div>
      {/* meet the coach section */}
      <CoachSection heading="Meet The Coach">
        <p className="font-light text-secondary max-w-[56ch] mb-4">With Noah parents can trust that their child is being coached by someone who&#39;s qualified, experienced, and genuinely committed to their development - not just as footballers, but as young people.</p>
        <ul className="font-light text-secondary list-disc grid gap-4 px-8">
          <li>First team player at Multbarton FC</li>
          <li>Head Coach of Mulbarton U18s</li>
          <li>Ex Norwich City Youth Academy Player</li>
          <li>FA Certified & DBS checked</li>
          <li>Known for high energy sessions & positive clear communication</li>
        </ul>
      </CoachSection>
      {/* cta section */}
      <Cta />
    </main>
  )
}
