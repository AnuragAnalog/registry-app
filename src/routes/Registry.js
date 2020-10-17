import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './Registry.css';

function Registry() {
    const [registryData, setRegistryData] = useState([])
    const [textInput, setTextInput] = useState("")
    const [error, setError] = useState(false)

    const addItem = (e) => {
        e.preventDefault();
        if (error) return ;

        const tempData = [...registryData];
        tempData.push(textInput)
        setRegistryData(tempData)
        setTextInput("")
    }

    const removeItem = (index) => {
        let tempData = [...registryData];
        tempData.splice(index, 1)
        setRegistryData(tempData)
    }

    const editItem = (index) => {
        if (error) return ;

        let tempData = [...registryData];
        tempData[index] = textInput;
        setRegistryData(tempData)
    }

    useEffect(() => {
        if (textInput.length > 10) setError(true);
        else setError(false);
    }, [textInput])

    console.log(registryData)

    return (
        <div>
            <h1> Registry Page </h1>
            <Link to='/'> Go back to Home page </Link>
            <form onSubmit={addItem}>
                <label> Text input:
                    <input type="text" value={textInput} onChange={(e) => setTextInput(e.target.value)}/>
                </label>
                <input type='submit' value='Submit' />
            </form>
            {error ? <span style={{color: "red"}}> Error Occured </span> : null}
            {
                registryData.map((item , index) => {
                    return (
                        <li key={index}> {item} <button onClick={() => removeItem(index)}> Remove </button> <button onClick={() => editItem(index)}> Update </button> </li>
                    )
                })
            }
        </div>
    )
}

export default Registry;