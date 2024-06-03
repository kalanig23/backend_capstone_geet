import React from 'react';

const FormBtn = ({bottomQuote,handleSwitch,bottomQuoteTitle}) => {
    return (
        <div className='bottom-quote'>
            <h3>{bottomQuote}</h3>
            <h3 onClick={handleSwitch}>{bottomQuoteTitle}</h3>
        </div>
    )
}
export default FormBtn;