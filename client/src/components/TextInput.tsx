import "../style/Input.scss"

type InputProps = React.InputHTMLAttributes<HTMLInputElement>

const TextInput = ({id, placeholder, required, onChange, value}: InputProps) => {
    return (
        <>
        <span style={{display: required ? "inherit" : "none"}} className="input_toast">* Required field</span>
        <input 
            className="input" 
            type="text" 
            placeholder={placeholder} 
            required={required}
            onChange={onChange}
            id={id}
            value={value}
        />
        </>
    )
}

export default TextInput