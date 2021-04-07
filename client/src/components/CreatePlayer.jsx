import React, { useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const CreatePlayer = () => {
    const [newPlayer, setNewPlayer] = useState({
        name: "",
        position: "",
        game1: 0,
        game2: 0,
        game3: 0,
        
    });

    const [errors, setErrors] = useState({});

    const changeHandler = e => {
        console.log("your changing something")
        console.log(e.target)
        setNewPlayer({
            ...newPlayer,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:8000/api/player`, newPlayer)
            .then(res => {
                console.log("response after submitting the post request!", res)
                if (res.data.errors) {
                    console.log("validation errors...")
                    setErrors(res.data.errors)
                } else {
                    navigate("/players/list")
                }
            })
            .catch(err => console.log(err))
    }


    return (
        <div className="mt-4">
            <form onSubmit={submitHandler} className="col-6 mx-auto">
                <div className="form-group">
                    <label htmlFor="">Name</label>
                    <input type="text" name="name" id="" className="form-control" onChange={changeHandler} />
                    <p className="text-danger">{errors.name ? errors.name.properties.message : ""}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="">Preferred Position</label>
                    <input type="text" name="position" id="" className="form-control" onChange={changeHandler} />
                </div>
                <input type="submit" value="Create" className="btn btn-success" />

            </form>
        </div>
    );
};

export default CreatePlayer;