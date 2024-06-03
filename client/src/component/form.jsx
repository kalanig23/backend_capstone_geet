import React from "react";
import './form.css';

const Form=({ title, btnTitle, InputField, handleChange, handleSubmit})=>{
    return (
        <div className='form-part'>
            <h1>{title}</h1>
            <p>Your personal job finder is here</p>
            <form className='form' onSubmit={handleSubmit}>
                {InputField.map((li, idx)=>(
                    <div style={{display: "flex"}} key={idx}>
                        <input
                            type={li.type}
                            placeholder={li.placeholder}
                            style={{width: li.width, height: li.height}}
                            htmlFor={li.htmlFor}
                            name={li.name}
                            onChange={handleChange}
                        />
                        <label>{li.label}</label>
                    </div>
                ))}
                <button type='submit'>{btnTitle}</button>
            </form>
        </div>
    )
}

export default Form;