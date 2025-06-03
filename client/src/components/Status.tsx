import '../style/Status.scss'
import WarningIcon from "../assets/warning.svg"
import ConfirmedIcon from "../assets/confirmed.svg"

type StatusProps = {
  rentalDetailsState: boolean,
  rentalDetailsReturn?: string,
  rentalDetailsPickup?: string,
  vehicleState: boolean,
  vehicleDesc?: string,
  extrasState: boolean,
  extrasDesc?: string,
  reviewReserveState: boolean,
  reviewReserveDesc?: string
}

const Status = ({
  rentalDetailsState = true,
  rentalDetailsReturn,
  rentalDetailsPickup,
  vehicleState = false,
  vehicleDesc,
  extrasState = false,
  extrasDesc,
  reviewReserveState = false,
  reviewReserveDesc
}: StatusProps) => {
  return (
    <section className="status">
      <div className="status__card">
        <h1 className="status__card__title">
          {rentalDetailsState ? <img src={ConfirmedIcon} alt="" /> : <img src={WarningIcon} alt='' />}
          <span>RENTAL DETAILS</span>
        </h1>
        <p className="status__card__desc">
          <span>{rentalDetailsReturn}</span>
          <span>{rentalDetailsPickup}</span>
        </p>
      </div>
      <div className="status__card">
        <h1 className="status__card__title">
          {vehicleState ? <img src={ConfirmedIcon} alt="" /> : <img src={WarningIcon} alt='' />}
          <span>VEHICLE</span>
        </h1>
        <p className="status__card__desc">{vehicleDesc}</p>
      </div>
      <div className="status__card">
        <h1 className="status__card__title">
          {extrasState ? <img src={ConfirmedIcon} alt="" /> : <img src={WarningIcon} alt='' />}
          <span>EXTRAS</span>
        </h1>
        <p className="status__card__desc">{extrasDesc}</p>
      </div>
      <div className="status__card">
        <h1 className="status__card__title">
          {reviewReserveState ? <img src={ConfirmedIcon} alt="" /> : <img src={WarningIcon} alt='' />}
          <span>REVIEW & RESERVE</span>
        </h1>
        <p className="status__card__desc">{reviewReserveDesc}</p>
      </div>
    </section>
  )
}

export default Status