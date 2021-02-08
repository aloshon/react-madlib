import React from 'react';

const GenerateMadlib = ({noun, noun2, adjective, color}) => {
    const madlib = `There was a ${color} ${noun} who loved a ${adjective} ${noun2}`
   
    return (<p>{madlib}</p>)
}

export default GenerateMadlib;