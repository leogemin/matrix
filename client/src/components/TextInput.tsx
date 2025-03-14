import "../style/Input.scss"

type InputProps = {
    placeholder: string,
    required: boolean
}

const TextInput = ({placeholder, required}: InputProps) => {
    return (
        <>
        <span style={{display: required ? "inherit" : "none"}} className="input_toast">* Required field</span>
        <input className="input" type="text" placeholder={placeholder} required={required}/>
        </>
    )
}

export default TextInput