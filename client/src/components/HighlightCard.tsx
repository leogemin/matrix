import "../style/Hightlights.scss"

type CardProps = {
    icon: string,
    title: string,
    desc: string
}

const HighlightCard = ({icon, title, desc}: CardProps) => {
    return (
        <div className="card">
            <img src={icon} alt="" className="card__icon" />
            <h2 className="card__title">{title}</h2>
            <p className="card__desc">{desc}</p>
        </div>
    )
}

export default HighlightCard