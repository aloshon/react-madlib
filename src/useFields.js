import React, {useState} from "react";

const useFields = (initialState) => {
    const [formData, setFormData] = useState(initialState);

    const handleChange = event => {
        const {value, name} = event.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }

    return [formData, handleChange];
}

export default useFields;