import "../style/VehicleCard.scss"
import CarImage from "../assets/car.png"
import Button from "./Button"

const VehicleCard = () => {
  return (
    <section className="vehicle_card">
      <div className="vehicle_card__image">
        <img src={CarImage} alt="" />
      </div>
      <div className="vehicle_card__details">
        <p className="vehicle_card__details__header">
          <h1>Full Size</h1>
          <h2>Chevy Malibu or Similar</h2>
        </p>
        <ul className="vehicle_card__details__list">
          <li>Automatic</li>
          <li>5 people</li>
          <li>4 bags</li>
        </ul>
        <a className="vehicle_card__details__more" href="#">Features & Price Details</a>
      </div>
      <div className="vehicle_card__price">
        <h1 className="vehicle_card__price__title">PAY LATER</h1>
        <div className="vehicle_card__price__content">
          <p>
            <h1>$100.00</h1>
            <h2>Per Day</h2>
          </p>
          <p>
            <h1>$127.00</h1>
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