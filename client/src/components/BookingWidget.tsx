import "../style/BookingWidget.scss"
import TextInput from "./TextInput"

const BookingWidget = () => {
    
    const handleChange = () => {

    }

    return (
        <section className="booking_widget_wrapper">
            <div className="booking_widget">
                <h1 className="booking_widget__title">Reserve a Vehicle</h1>
                <div className="booking_widget__input_wrapper">
                    <label htmlFor="location_input" className="booking_widget__input_wrapper__label">Pick-up & Return Location (ZIP, City or Airport)*</label>
                    <TextInput id="location_input" placeholder="Provide a Location" required={true} onChange={handleChange}/>
                </div>
            </div>
        </section>
    )
}

export default BookingWidget