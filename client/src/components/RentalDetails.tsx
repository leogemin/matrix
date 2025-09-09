import '../style/RentalDetails.scss'

type RentalDetailsProps = {
  pickupDateAndTime: string,
  returnDateAndTime: string,
  pickupLocation: string,
  returnLocation: string
}

const RentalDetails = ({pickupDateAndTime, returnDateAndTime, pickupLocation, returnLocation}: RentalDetailsProps) => {
  return (
    <section className="rental_details">
      <div className="rental_details__header">
        <h2>Rental Details</h2>
        <hr color="lightgray" />
      </div>
      <div className="rental_details__body">
        <div className="rental_details__body__item">
          <h3>Dates & Times</h3>
          <p>{pickupDateAndTime}</p>
          <p>{returnDateAndTime}</p>
        </div>
        <div className="rental_details__body__item">
          <h3>Pick-up & Return Location</h3>
          <p>{pickupLocation}</p>
          <p>{returnLocation}</p>
        </div>
      </div>
    </section>
  )
}

export default RentalDetails