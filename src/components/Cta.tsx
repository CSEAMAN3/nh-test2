import BookingButton from "./BookingButton";




export default function Cta() {
  return (
    <div className="px-8 py-32 max-w-[1200px] mx-auto relative">
      <h2 className="font-bold text-2xl md:text-4xl italic sm:mb-2 text-primary text-center">Ready to get started?</h2>
      <p className="font-light md:text-lg max-w-[60ch] text-center mx-auto mb-8">Book your childs first session today and help them build skills, confidence, and a love for the game - one kick at a time.</p>
      <BookingButton className="cursor-pointer bg-secondary-accent hover:bg-secondary-accent-drk text-secondary block mx-auto" />
    </div>
  )
}
