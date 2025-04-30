import "../style/BookingWidget.scss"
import Button from "./Button"
import TextInput from "./TextInput"

const BookingWidget = () => {
    
    const handleLocationInput = () => {

    }

    const handleDateInput = (e: any) => {
        // console.log(e.target.value)
    }

    const handleTimeInput = (e: any) => {
        // console.log(e.target.value)
    }
    
    return (
        <section className="booking_widget_wrapper">
            <form action="">
            <div className="booking_widget">
                <h1 className="booking_widget__title">Reserve a Vehicle</h1>
                <div className="booking_widget__input_wrapper">
                    <label htmlFor="location_input" className="booking_widget__input_wrapper__label">Pick-up & Return Location (ZIP, City or Airport)*</label>
                    <TextInput id="location_input" placeholder="Provide a Location" required={true} onChange={handleLocationInput}/>
                </div>
                <div className="booking_widget__footer">

    {/*                                      MOBILE RETURN AND PICKUP                                                 */}

                    <div className="booking_widget__footer__mobile">
                        <div className="booking_widget__footer__mobile__cell">
                            <label htmlFor="">Pick-up</label>
                            <TextInput placeholder="DD/MM/YYYY" onChange={handleDateInput} />
                        </div>
                        <div className="booking_widget__footer__mobile__cell">
                            <label htmlFor="">Pick-up Time</label>
                            <TextInput placeholder="00:00 AM" onChange={handleTimeInput} />
                        </div>
                        <div className="booking_widget__footer__mobile__cell">
                            <label htmlFor="">Return</label>
                            <TextInput placeholder="DD/MM/YYYY" onChange={handleDateInput} />
                        </div>
                        <div className="booking_widget__footer__mobile__cell">
                            <label htmlFor="">Return Time</label>
                            <TextInput placeholder="00:00 AM" onChange={handleTimeInput} />
                        </div>
                        <div className="booking_widget__footer__mobile__btncell">
                            <Button content="Browse Vehicles" color="black" type="submit" handleClick={() => {}}/>  
                        </div>
                    </div>

    {/*                                      DESKTOP RETURN AND PICKUP                                                 */}
                    <div className="booking_widget__footer__desktop">
                        <div className="booking_widget__footer__desktop__cell">
                            <h2 className="booking_widget__footer__desktop__cell__title">RETURN</h2>
                            <div className="booking_widget__footer__desktop__cell__input_wrapper">
                                <div>
                                    <label htmlFor="" className="booking_widget__footer__desktop__cell__input_wrapper__label">Date</label>
                                    <TextInput placeholder="DD/MM/YYYY" onChange={handleDateInput} />
                                </div>
                                <div>
                                    <label htmlFor="" className="booking_widget__footer__desktop__cell__input_wrapper__label">Time</label>
                                    <TextInput placeholder="00:00 AM" onChange={handleTimeInput} />
                                </div>
                            </div>
                        </div>
                        <div className="booking_widget__footer__desktop__cell"> 
                            <h2 className="booking_widget__footer__desktop__cell__title">PICK-UP</h2>
                            <div className="booking_widget__footer__desktop__cell__input_wrapper">
                                <div>
                                    <label htmlFor="" className="booking_widget__footer__desktop__cell__input_wrapper__label">Date</label>
                                    <TextInput placeholder="DD/MM/YYYY" onChange={handleDateInput} />
                                </div>
                                <div>
                                    <label htmlFor="" className="booking_widget__footer__desktop__cell__input_wrapper__label">Time</label>
                                    <TextInput placeholder="00:00 AM" onChange={handleTimeInput} />
                                </div>
                            </div>
                        </div>
                        <div className="booking_widget__footer__desktop__cell">
                            <Button color="black" content="Browse Vehicles" type="submit" handleClick={() => {}} />
                        </div>
                    </div>

                </div>
            </div>
            </form>
        </section>
    )
}

export default BookingWidget