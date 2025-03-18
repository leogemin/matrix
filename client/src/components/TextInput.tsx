import "../style/Input.scss"

type InputProps = {
    placeholder?: string,
    required: boolean,
    onChange?: () => void
}

const TextInput = ({placeholder, required, onChange}: InputProps) => {
    return (
        <>
        <span style={{display: required ? "inherit" : "none"}} className="input_toast">* Required field</span>
        <input 
            className="input" 
            type="text" 
            placeholder={placeholder} 
            required={required}
            onChange={onChange}
        />
        </>
    )
}

export default TextInput