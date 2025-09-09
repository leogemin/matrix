import "../style/VehicleCard.scss"
import Send from "../assets/send.svg"
import Bag from "../assets/bag.svg"
import People from "../assets/people.svg"
import Button from "./Button"

type VehicleCardProps = {
  carImage: string,
  title: string,
  label: string,
  pricePerDay: string,
  priceTotal: string
}

const VehicleCard = ({carImage, title, label, pricePerDay, priceTotal}: VehicleCardProps) => {
  return (
    <section className="vehicle_card">
      <div className="vehicle_card__image">
        <img src={carImage} alt="" />
      </div>
      <div className="vehicle_card__details">
        <p className="vehicle_card__details__header">
          <h1>{title}</h1>
          <h2>{label}</h2>
        </p>
        <ul className="vehicle_card__details__list">
          <li className="vehicle_card__details__list__item">
            <img src={Send} alt="" />
            <span>Automatic</span>
          </li>
          <li className="vehicle_card__details__list__item">
            <img src={People} alt="" />
            <span>5 people</span>
          </li>
          <li className="vehicle_card__details__list__item">
            <img src={Bag} alt="" />
            <span>4 bags</span>
          </li>
        </ul>
        <a className="vehicle_card__details__more" href="#">Features & Price Details</a>
      </div>
      <div className="vehicle_card__price">
        <h1 className="vehicle_card__price__title">PAY LATER</h1>
        <div className="vehicle_card__price__content">
          <p>
            <h1>{pricePerDay}</h1>
            <h2>Per Day</h2>
          </p>
          <p>
            <h1>{priceTotal}</h1>
            <h2>Total</h2>
          </p>
        </div>
        <br />
        <div className="vehicle_card__price__button_wrapper">
          <Button content="Select" type="button" color="black" handleClick={() => { }} />
        </div>
      </div>
    </section>
  )
}

export default VehicleCard