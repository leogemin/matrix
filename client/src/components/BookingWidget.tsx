import "../style/BookingWidget.scss"
import TextInput from "./TextInput"

const BookingWidget = () => {
    return (
        <section className="booking_widget_wrapper">
            <div className="booking_widget">
                <h2 className="booking_widget__title">Reserve a Vehicle</h2>
                <div className="booking_widget__input_wrapper">
                    <span>Pick-up & Return Location (ZIP, City or Airport)*</span>
                    <TextInput placeholder="Provide a Location" required={true}/>
                </div>
            </div>
        </section>
    )
}

export default BookingWidget