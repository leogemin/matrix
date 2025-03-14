import "../style/Button.scss"

type ButtonProps = {
    content: string,
    color: "white" | "black",
    type: "button" | "submit" | "reset",
    handleClick: () => void
}

//  Button
const Button = ({content, color, type, handleClick}: ButtonProps) => {
    return (
        <button type={type} className={`${color}_btn btn`} onClick={handleClick}>{ content }</button>
    )
}

export default Button
