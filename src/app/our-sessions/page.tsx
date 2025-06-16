import Image from "next/image"

import Hero from "@/components/Hero"
import CoachQuote from "@/components/CoachQuote"
import CoachSection from "@/components/CoachSection"
import Cta from "@/components/Cta"

export default function OurSessionsPage() {
  return (
    <main>
      <Hero 
        titleBig="Real Coaching"
          titleSmall="Training That Makes a Difference"
          content="At NH Football Coaching, our sessions are built around one principle: The more attention a player gets, the more they grow. That&#39;s why we offer focused 1 to 1 and 1 to 2 small group coaching. To give young players the space, support and coaching they need to improve."
          mainImg="training_three.jpg"
          topImg="training_five.png"
          bottomImg="training_nine.jpg"
      />
      <CoachQuote quote="Every session is designed to be fun, energetic, and tailored to the individual. No pressure, no shouting, just positive, professional guidance from a coach who cares." />
      {/* main section */}
      <div className="max-w-[1200px] mx-auto">
      {/* What we focus on section */}
       <div className="grid gap-4 grid-cols-1 md:grid-cols-2 mb-4">
        <div className="grid md:place-content-center">
          <h2 className="font-bold text-2xl sm:text-4xl italic sm:mb-2 px-8">What We Focus On</h2>
            <p className="font-light text-base px-8 max-w-[60ch] mb-4">We keep things simple, structured, and development driven. Sessions typically include:</p>
            <ul className="font-light px-16 grid gap-4 list-disc">
              <li>Warm-up & Movement - To prepare the body and mind.</li>
              <li>Technical Drills - Ball mastery, passing, dribbling, finishing.</li>
              <li>Tactical Awareness - Decision making, movement off the ball, scanning.</li>
              <li>Game-like Scenarios - Applied learning through small sided play.</li>
              <li>Player Reflection - Encouragment, feedback, next steps.</li>
            </ul>
        </div>
        <Image 
          src={"/images/training_eight.jpg"}
          alt={"Football Coach giving player a high five after successfully completing a training drill."}
          width={400}
          height={400}
          className="w-full h-[200px] sm:h-[300px] md:h-full object-cover "
        />
      </div>
      {/* How We Coach section */}
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 mb-4">
        <div className="grid md:place-content-center md:order-2">
          <h2 className="font-bold text-2xl sm:text-4xl italic sm:mb-2 px-8">How We Coach</h2>
            <p className="font-light text-base px-8 max-w-[60ch] mb-4">To get the best out of young players our coaching ethos is centered around:</p>
            <ul className="font-light px-16 grid gap-4 list-disc">
              <li>Support - Mistakes are part of learning.</li>
              <li>Energy - Sessions are high tempo, fun and motivating.</li>
              <li>Focus - Small groups mean deeper learning and real understanding.</li>
              <li>Player Centered - We coach the person, as well as the footballer.</li>
            </ul>
        </div>
        <Image 
          src={"/images/training_eight.jpg"}
          alt={"Football Coach giving player a high five after successfully completing a training drill."}
          width={400}
          height={400}
          className="w-full h-[200px] sm:h-[300px] md:h-full object-cover md:order-1"
        />
      </div>
      {/* who's it for section */}
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 md:mb-8">
        <div className="grid md:place-content-center">
          <h2 className="font-bold text-2xl sm:text-4xl italic sm:mb-2 px-8">Who It&#39;s For</h2>
            <p className="font-light text-base px-8 max-w-[60ch] mb-4">We coach children aged 6-14, across all experience levels. We welcome players who:</p>
            <ul className="font-light px-16 grid gap-4 list-disc">
              <li>Want to build their skills in a calm, focused environment.</li>
              <li>Might not enjoy large group trianing .</li>
              <li>Are looking to take their game to the next level</li>
              <li>Need support growing confidence and understanding the game.</li>
            </ul>
        </div>
        <Image 
          src={"/images/training_eight.jpg"}
          alt={"Football Coach giving player a high five after successfully completing a training drill."}
          width={400}
          height={400}
          className="w-full h-[200px] sm:h-[300px] md:h-full object-cover "
        />
      </div>
      </div>
      {/* Where and When Section */}
      <CoachSection heading="Where & When">
        <p className="font-light text-secondary mb-4 max-w-[40ch]">Our goal is simple, to help players fall in love with the game while building real, lasting skills.</p>
        <p className="font-light text-secondary mb-4 max-w-[40ch]">Our 5 week training course sessions give you an allocated time slot running weekly at:</p>
        <address className="font-light text-secondary">
          <span className="block">The Abode Arena at Mulberry Park</span>
          <span className="block">The Common</span>
          <span className="block">Mulbarton</span>
          <span className="block">Norfolk</span>
          <span className="block">NR14 8AE</span>
        </address>
      </CoachSection>
      {/* cta section */}
      <Cta />
    </main>
  )
}
