import "../style/Hightlights.scss"
import HighlightCard from "./HighlightCard"

// icons
import sell from "../assets/sell.svg"
import mail from "../assets/mail.svg"
import star from "../assets/star.svg"
import tool from "../assets/tool.svg"

const HighlightSection = () => {
    return (
        <section className="highlights">
            <HighlightCard
                icon={sell}
                title="Best Deals"
                desc="We have the best deals and promotions. Check our reservations to find the right vehicle at everyday low rates."
            />
            <HighlightCard
                icon={tool}
                title="Rent After an Accident"
                desc="Need to rent a vehicle after and accident? Let us help you get back on the road."
            />
            <HighlightCard
                icon={mail}
                title="Sign Up for Specials"
                desc="Need to rent a vehicle after and accident? Let us help you get back on the road."
            />
            <HighlightCard
                icon={star}
                title="Plus Your Points"
                desc="You're automatically enrolled in our loyalty program. Enjoy your benefits!"
            />
        </section>
    )
}

export default HighlightSection