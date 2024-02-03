import React from 'react';
import "./form-input.scss";
import { Icon } from '@iconify/react';

export const FormInput = (props) => {
    const [focused, setFocused] = React.useState(false);


const {label, type, errorMessage, value, onChange, ...inputProps} = props

const handleFocus = (e)=> {
    setFocused(true)
}

    return (
        <div className='input-control'>
            <label>{label}</label>
            
                <input type={type} {...inputProps} onChange={onChange} onBlur={handleFocus} focused={focused.toString()} onFocus={()=> inputProps.name ==="password" && setFocused(true) }/>
            
            <span className='error-message'>
                 <Icon icon="mingcute:warning-line" />
                <span>{errorMessage}</span>
            </span>
        </div>
    )
}
