import React from 'react'
import Spinnergif from '../spinner.gif'

const Spinner = () => {
    return (
        <div>
            <img src={Spinnergif} alt="loading..." />
        </div>
    )
}

export default Spinner;