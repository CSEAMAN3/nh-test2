import BookingButton from "./BookingButton";


export default function Hero() {
  return (
    <div className="w-full min-h-[70vh] bg-primary">
      <div className="max-w-[1200px] p-8 border-1 border-primary-accent mx-auto">
        <div className="text-secondary">
          <h1 className="font-black text-5xl leading-10 mb-2">JOIN THE SQUAD <span className="text-lg block">Football Coaching for Children in Norwich</span></h1>
          <p className="font-light max-w-[42ch] mb-4">Whether you&#39;re new to football or ready to level up, we provide professional football coaching in a safe, supportive environment for all abilities.</p>
          <BookingButton className="cursor-pointer" />
        </div>
      </div>
    </div>
  )
}
