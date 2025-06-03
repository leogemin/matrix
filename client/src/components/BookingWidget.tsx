import { useState } from "react"
import "../style/BookingWidget.scss"
import Button from "./Button"
import TextInput from "./TextInput"

const BookingWidget = () => {
    const [location, setLocation] = useState("")
    const [pickupDate, setPickupDate] = useState("")
    const [pickupTime, setPickupTime] = useState("")
    const [returnDate, setReturnDate] = useState("")
    const [returnTime, setReturnTime] = useState("")

    const dateRegex = /^\d{0,2}\/?\d{0,2}\/?\d{0,4}$/
    const DATE_MAX_LENGTH = 10
    const TIME_MAX_LENGTH = 8

    const handleLocationInput = (e: any) => {
        setLocation(e.target.value)
    }

    const handlePickupDateInput = (e: any) => {
        const value = e.target.value
        if (value.length <= DATE_MAX_LENGTH && dateRegex.test(value)) {
            setPickupDate(value)
        } 
    }
    const handleReturnDateInput = (e: any) => {
        const value = e.target.value
        if (value.length <= DATE_MAX_LENGTH && dateRegex.test(value)) {
            setReturnDate(value)
        }
    }
    const handlePickupTimeInput = (e: any) => {
        e.target.value.length <= TIME_MAX_LENGTH && setPickupTime(e.target.value)
    }
    const handleReturnTimeInput = (e: any) => {
        e.target.value.length <= TIME_MAX_LENGTH && setReturnTime(e.target.value)
    }
    
    return (
        <section className="booking_widget_wrapper">
            <form action="">
            <div className="booking_widget">
                <h1 className="booking_widget__title">Reserve a Vehicle</h1>
                <div className="booking_widget__input_wrapper">
                    <label htmlFor="location_input" className="booking_widget__input_wrapper__label">Pick-up & Return Location (ZIP, City or Airport)*</label>
                    <TextInput id="location_input" placeholder="Provide a Location" required={true} onChange={handleLocationInput} value={location}/>
                </div>
                <div className="booking_widget__footer">

    {/*                                      MOBILE RETURN AND PICKUP                                                 */}

                    <div className="booking_widget__footer__mobile">
                        <div className="booking_widget__footer__mobile__cell">
                            <label>Pick-up</label>
                            <TextInput placeholder="DD/MM/YYYY" onChange={handlePickupDateInput} value={pickupDate} />
                        </div>
                        <div className="booking_widget__footer__mobile__cell">
                            <label>Pick-up Time</label>
                            <TextInput placeholder="00:00 AM" onChange={handlePickupTimeInput} value={pickupTime}/>
                        </div>
                        <div className="booking_widget__footer__mobile__cell">
                            <label>Return</label>
                            <TextInput placeholder="DD/MM/YYYY" onChange={handleReturnDateInput} value={returnDate} />
                        </div>
                        <div className="booking_widget__footer__mobile__cell">
                            <label>Return Time</label>
                            <TextInput placeholder="00:00 AM" onChange={handleReturnTimeInput} value={returnTime}/>
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
                                    <label className="booking_widget__footer__desktop__cell__input_wrapper__label">Date</label>
                                    <TextInput placeholder="DD/MM/YYYY" onChange={handleReturnDateInput} value={returnDate} />
                                </div>
                                <div>
                                    <label className="booking_widget__footer__desktop__cell__input_wrapper__label">Time</label>
                                    <TextInput placeholder="00:00 AM" onChange={handleReturnTimeInput} value={returnTime}/>
                                </div>
                            </div>
                        </div>
                        <div className="booking_widget__footer__desktop__cell"> 
                            <h2 className="booking_widget__footer__desktop__cell__title">PICK-UP</h2>
                            <div className="booking_widget__footer__desktop__cell__input_wrapper">
                                <div>
                                    <label className="booking_widget__footer__desktop__cell__input_wrapper__label">Date</label>
                                    <TextInput placeholder="DD/MM/YYYY" onChange={handlePickupDateInput} value={pickupDate} maxLength={10}/>
                                </div>
                                <div>
                                    <label className="booking_widget__footer__desktop__cell__input_wrapper__label">Time</label>
                                    <TextInput placeholder="00:00 AM" onChange={handlePickupTimeInput} value={pickupTime}/>
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