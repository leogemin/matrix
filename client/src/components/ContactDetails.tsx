import TextInput from "./TextInput"
import '../style/ContactDetails.scss'
import { useState } from "react"

const ContactDetails = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [email, setEmail] = useState('')

  return (
    <section className="contact_details">
      <div className="contact_details__header">
        <h2>Contact Details</h2>
        <hr color="lightgray" />
      </div>
      <div className="contact_details__body">
        <div className="contact_details__body__name">
          <div>
            <h3>First Name</h3>
            <TextInput
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="John"
            />
          </div>
          <div>
            <h3>Last Name</h3>
            <TextInput
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Doe"
            />
          </div>
        </div>
        <div className="contact_details__body__phone">
          <h3>Phone Number</h3>
          <TextInput
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="(00) 0000-0000"
          />
        </div>
        <div className="contact_details__body__email">
          <h3>E-mail Address</h3>
          <TextInput
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@email.com"
          />
        </div>
      </div>
    </section>
  )
}

export default ContactDetails