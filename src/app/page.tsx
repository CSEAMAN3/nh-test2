import Image from "next/image";

import Hero from "@/components/Hero";
import { FaStar } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import ReviewSlider from "@/components/ReviewSlider";
import Cta from "@/components/Cta"


export default function Home() {
  return (
    <main className="">
      {/* hero section */}
      <Hero 
        titleBig="JOIN THE SQUAD"
        titleSmall="Football Coaching for Children in Norwich"
        content="Whether you&#39;re new to football or ready to level up, we provide professional football coaching in a safe, supportive environment for all abilities."
        mainImg="training_eight.jpg"
        topImg="training_seven.jpg"
        bottomImg="training_three.jpg"
      />
      {/* three card section */}
      <div className="px-8 py-8">
        <div className="max-w-[580px] mx-auto mb-8">
          <h2 className="font-bold text-2xl sm:text-4xl italic text-center sm:mb-2">More Than Just Football</h2>
          <p className="text-center sm:text-lg font-light">Our sessions are built to do more than improve technique, they&#39;re designed to grow confidence, connection, and a real love for the game.</p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 max-w-[1200px] mx-auto">
          <div className="bg-primary text-secondary rounded-lg p-8 text-center max-w-[400px] mx-auto">
            <FaStar className="text-4xl text-primary-accent mx-auto mb-4" />
            <h3 className="font-bold text-xl">Real Growth</h3>
            <p className="max-w-[30ch] font-light mx-auto">Football sessions focused on building self belief through positive coaching.</p>
          </div>
          <div className="bg-primary text-secondary rounded-lg p-8 text-center max-w-[400px] mx-auto">
            <FaUsers className="text-4xl text-primary-accent mx-auto mb-4" />
            <h3 className="font-bold text-xl">Football For All</h3>
            <p className="max-w-[30ch] font-light mx-auto">Tailored football coaching at all levels designed to bring out a players best.</p>
          </div>
          <div className="bg-primary text-secondary rounded-lg p-8 text-center max-w-[400px] mx-auto">
            <FaHeart className="text-4xl text-primary-accent mx-auto mb-4" />
            <h3 className="font-bold text-xl">True Support</h3>
            <p className="max-w-[30ch] font-light mx-auto">Making sure every player feels seen, supported and set up for success.</p>
          </div>
        </div>
      </div>
      {/* 8 card section */}
      <div className="p-8">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="font-bold text-2xl sm:text-4xl italic sm:mb-2">Confidence Starts Here</h2>
          <p className="max-w-[62ch] font-light mb-4">NH Football Coaching provides small, tailored coaching sessions designed to help young players grow. Every session is built around positive ecouragment, structured learning and a whole lot of fun, helping children advance thier ability, gain confidence and develop the right mindset.</p>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {/* card 1 */}
            <div className="bg-primary px-8 pt-8 pb-16 relative overflow-hidden min-h-[200px] order-1">
              <h3 className="font-bold text-primary-accent text-xl">1 to 1 / 1 to 2 Coaching</h3>
              <p className="text-secondary font-light">Smaller groups means more attention, faster learning, and a deeper connection with each and every child.</p>
              <div className="w-full h-[6px] bg-primary-accent absolute left-0 bottom-4" />
              <div className="w-16 h-16 border-[6px] border-primary-accent rounded-full absolute right-8 -bottom-[14px]" />
              <div className="w-4 h-4 rounded-full bg-primary-accent absolute bottom-[10px] right-14" />
            </div>
            {/* img card 1 */}
            <div className="order-2">
              <Image 
                src={`/images/training_three.jpg`}
                alt={`Football coach providing coaching to two young children. Coach is holding a clip board and pointing into the distance with the players looking forward.`}
                width={400}
                height={400}
                className="w-full h-[200px] sm:h-full object-cover"
              />
            </div>
            {/* card 2 */}
            <div className="bg-primary px-8 pt-8 pb-16 relative overflow-hidden order-3 sm:order-4 lg:order-3">
              <h3 className="font-bold text-primary-accent text-xl">Confidence Driven Sessions</h3>
              <p className="text-secondary font-light">We focus on effort, engagement, and progress - not pressure or performance.</p>
              <div className="w-full h-[6px] bg-primary-accent absolute left-0 bottom-4" />
              <div className="w-16 h-16 border-[6px] border-primary-accent rounded-full absolute right-8 -bottom-[14px]" />
              <div className="w-4 h-4 rounded-full bg-primary-accent absolute bottom-[10px] right-14" />
            </div>
            {/* img card 2 */}
            <div className="order-4 sm:order-3 lg:order-4">
              <Image 
                src={`/images/training_seven.jpg`}
                alt={`Football coach providing coaching to two young children. Coach is holding a clip board and pointing into the distance with the players looking forward.`}
                width={400}
                height={400}
                className="w-full h-[200px] sm:h-full object-cover"
              />
            </div>
            {/* card 3 */}
            <div className="bg-primary px-8 pt-8 pb-16 relative overflow-hidden order-5 lg:order-6">
              <h3 className="font-bold text-primary-accent text-xl">Fun, Safe and Structured</h3>
              <p className="text-secondary font-light">Every Session is designed to be enjoyable, well organised & supportive. From the first whistle to the last.</p>
              <div className="w-full h-[6px] bg-primary-accent absolute left-0 bottom-4" />
              <div className="w-16 h-16 border-[6px] border-primary-accent rounded-full absolute right-8 -bottom-[14px]" />
              <div className="w-4 h-4 rounded-full bg-primary-accent absolute bottom-[10px] right-14" />
            </div>
            {/* img card 3 */}
            <div className="order-6 lg:order-5">
              <Image 
                src={`/images/training_ten.jpg`}
                alt={`Football coach providing coaching to two young children. Coach is holding a clip board and pointing into the distance with the players looking forward.`}
                width={400}
                height={400}
                className="w-full h-[200px] sm:h-full object-cover"
              />
            </div>
            {/* card 4 */}
            <div className="bg-primary px-8 pt-8 pb-16 relative overflow-hidden order-7 sm:order-8">
              <h3 className="font-bold text-primary-accent text-xl">FA Certified & DBS Checked</h3>
              <p className="text-secondary font-light">Parents can relax knowing thier children are in safe, qualified hands.</p>
              <div className="w-full h-[6px] bg-primary-accent absolute left-0 bottom-4" />
              <div className="w-16 h-16 border-[6px] border-primary-accent rounded-full absolute right-8 -bottom-[14px]" />
              <div className="w-4 h-4 rounded-full bg-primary-accent absolute bottom-[10px] right-14" />
            </div>
            {/* img card 4 */}
            <div className="order-8 sm:order-7">
              <Image 
                src={`/images/training_eight.jpg`}
                alt={`Football coach providing coaching to two young children. Coach is holding a clip board and pointing into the distance with the players looking forward.`}
                width={400}
                height={400}
                className="w-full h-[200px] sm:h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Reviews Section */}
      <div className="bg-primary px-8 py-16 mt-8">
        <h2 className="font-bold text-2xl md:text-4xl italic sm:mb-2 text-primary-accent text-center">Trusted by parents throughout Norfolk</h2>
        <p className="text-secondary font-light text-center max-w-[500px] md:max-w-[700px] mx-auto md:text-lg mb-8">We&#39;re pleased to be rated 5 stars on google by parents who&#39;ve seen their child grow in confidence, skill and love for the game.</p>
        <ReviewSlider />
      </div>
      {/* CTA section */}
      <Cta />
    </main>
  );
}
