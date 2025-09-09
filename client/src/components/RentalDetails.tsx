import '../style/RentalDetails.scss'

const RentalDetails = () => {
  return (
    <section className="rental_details">
      <div className="rental_details__header">
        <h2>Rental Details</h2>
        <hr color="lightgray" />
      </div>
      <div className="rental_details__body">
        <div className="rental_details__body__item">
          <h3>Dates & Times</h3>
          <p>Fri, Mar 28, 2025 - 12:00 PM</p>
          <p>Sat, Mar 29, 2025 - 12:00 PM</p>
        </div>
        <div className="rental_details__body__item">
          <h3>Pick-up & Return Location</h3>
          <p>New York JFK International Airport</p>
          <p>Building 49 Federal Circle</p>
          <p>Jamaica, NY 11430</p>
        </div>
      </div>
    </section>
  )
}

export default RentalDetails