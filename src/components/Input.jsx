import React from 'react'

const Input = ({type , label , onChange}) => {
    return(
        <div className = "input_bar_uni">
            <label for = "abc">{label}</label>
            <input id = "cpassword" name = "abc" type = {type} onChange = {onChange} />
        </div>
    )
}

export default Input;