import React from 'react'
import Spinnergif from './Spinner.js';

export const Users = (props) => {
   if (props.loading) {
       return <Spinnergif />
   } else {
       return (
           <div>
            {props.data}

           </div>


       )
   }

}
