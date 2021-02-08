import React, {useEffect, useState} from 'react';
import useFields from './useFields';
import GenerateMadlib from './GenerateMadlib';
import './Madlib.css';

const Madlib = () => {
    const [show, setShow] = useState(false)

    const [formData, handleChange] = useFields({
        noun: '',
        noun2: '',
        adjective: '',
        color: ''
    })
    const handleSubmit = e => {
        e.preventDefault();
    }

    //When the form is submitted, replace the form with the madlib
    if(show){
        return (
            <div className="Madlibs">
            <h1>Madlibs!</h1>
            <div>
                <GenerateMadlib noun={formData.noun} noun2={formData.noun2} adjective={formData.adjective} color={formData.color} />
            </div>
            </div>
        )
    }

    // Render form when DOM is loaded
    return (
        <div className="Madlibs">
            <h1>Madlibs!</h1>
            <form 
            onSubmit={handleSubmit}>
                <input
                className="Madlibs-input"
                type="text" 
                name="noun" 
                value={formData.noun}
                placeholder="noun"
                onChange={handleChange}/>
                <input
                className="Madlibs-input"
                type="text" 
                name="noun2" 
                value={formData.noun2}
                placeholder="nou2" 
                onChange={handleChange}/>
                <input
                className="Madlibs-input"
                type="text" 
                name="adjective" 
                value={formData.adjective} 
                placeholder="adjective"
                onChange={handleChange}/>
                <input
                className="Madlibs-input"
                type="text" 
                name="color" 
                value={formData.color}
                placeholder="color"
                onChange={handleChange}/>
                <button onClick={() => setShow(true)}>send</button>
            </form>
            <div>
            </div>
        </div>
    )
}

export default Madlib;