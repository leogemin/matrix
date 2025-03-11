import "../style/Button.scss"

type Props = {
    Content: string,
    Color: "white" | "black",
    Type: "button" | "submit" | "reset",
    HandleClick: () => void
}

//  Button
const Button = ({Content, Color, Type, HandleClick}: Props) => {
    return (
        <button type={Type} className={`${Color}_btn btn`} onClick={HandleClick}>{ Content }</button>
    )
}

export default Button
