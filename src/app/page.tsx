import Hero from "@/components/Hero";
import { FaStar } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";




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
          <h2 className="font-bold text-2xl sm:text-4xl italic text-center">More Than Just Football</h2>
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
    </main>
  );
}
