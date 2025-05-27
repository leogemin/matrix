import '../style/Status.scss'

const Status = () => {
  return (
    <section className="status">
      <div className="status__card">
        <h1 className="status__card__title">
          
          <span>RENTAL DETAILS</span>
        </h1>
        <p className="status__card__desc"></p>
      </div>
      <div className="status__card">
        <h1 className="status__card__title">

          <span>VEHICLE</span>
        </h1>
        <p className="status__card__desc"></p>
      </div>
      <div className="status__card">
        <h1 className="status__card__title">
          
          <span>EXTRAS</span>
        </h1>
        <p className="status__card__desc"></p>
      </div>
      <div className="status__card">
        <h1 className="status__card__title">

          <span>REVIEW & RESERVE</span>
        </h1>
        <p className="status__card__desc"></p>
      </div>
    </section>
  )
}

export default Status