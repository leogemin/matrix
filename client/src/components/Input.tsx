import "../style/Input.scss"

type Props = {
    Placeholder: string,
    Required: boolean
}

const Input = ({Placeholder, Required}: Props) => {
    return (
        <input className="input" type="text" placeholder={Placeholder} required={Required}/>
    )
}

export default Input