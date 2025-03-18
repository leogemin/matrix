import "../style/BookingWidget.scss"
import TextInput from "./TextInput"

const BookingWidget = () => {
    return (
        <section className="booking_widget_wrapper">
            <div className="booking_widget">
                <h2 className="booking_widget__title">Reserve a Vehicle</h2>
                <div className="booking_widget__input_wrapper">
                    <h4 className="booking_widget__input_wrapper__label">Pick-up & Return Location (ZIP, City or Airport)*</h4>
                    <TextInput placeholder="Provide a Location" required={true}/>
                </div>
            </div>
        </section>
    )
}

export default BookingWidget