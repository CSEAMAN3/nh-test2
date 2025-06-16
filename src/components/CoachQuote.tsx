import { ImQuotesLeft } from "react-icons/im";
import { ImQuotesRight } from "react-icons/im";



interface CoachQuoteProps {
  quote: string;
}

export default function CoachQuote({quote} : CoachQuoteProps) {
  return (
    <div className="px-8 py-16">
      <div className="w-fit mx-auto px-8 relative">
        <h3 className="absolute -bottom-8 right-16 font-light text-secondary-accent-drk">Head Coach - Noah Hunt</h3>
        <p className="text-lg sm:text-xl max-w-[620px] text-center">{quote}</p>
        <ImQuotesLeft className="text-3xl sm:text-4xl text-secondary-accent absolute -top-4 -left-4" />
        <ImQuotesRight className="text-3xl sm:text-4xl text-secondary-accent absolute -bottom-4 -right-4" />
      </div>
    </div>
  )
}
