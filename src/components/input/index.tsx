import React, { InputHTMLAttributes } from 'react';

import InputStyle from "./style";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label: string;
}

const Input: React.FC<InputProps> = ({label, name, ...rest}) => {
    return (
        <InputStyle className="input-block">
            <label htmlFor={name}>{label}</label>
            <input type="text" id={name} {...rest}/>
        </InputStyle>
    )
}

export default Input;