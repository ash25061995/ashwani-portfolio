import React from 'react';
import plane from '../../assets/img/plane.gif';
import './Style.scss';

const Introduction=()=>{
    return(
        <div className='main'>
            <img src={plane} alt="plane.gif"/>
            <h1 className="heading">Ashwani Sinha</h1>
            <button className='Connect-btn'>Connect with me!</button>
        </div>
    )
}

export default Introduction;