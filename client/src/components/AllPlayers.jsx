import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AllPlayers = () => {
    const [allPlayers, setAllPlayers] = useState([])
    const [deleteClicked, setDeleteClicked] = useState(false)

    useEffect(() => {
        axios.get("http://localhost:8000/api/player")
            .then(response => {
                console.log("getting all players...");
                console.log(response);
                setAllPlayers(response.data.results)
            })
            .catch(err => console.log("errors found getting all players", err))
    }, [deleteClicked])

    const deletePlayer = (e, playerid) => {
        axios.delete(`http://localhost:8000/api/player/${playerid}`)
            .then(response => {
                console.log("sending a delete request")
                console.log(response)
                setDeleteClicked(!deleteClicked)
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="d-flex justify-content-center mt-4">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Players</th>
                        <th scope="col">Preferred Position</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {allPlayers.map((player, idx) => {
                        return (
                            <tr key={idx}>
                                <td>{player.name}</td>
                                <td>{player.position}</td>
                                <td><button className="btn btn-danger" onClick={(e) => deletePlayer(e, player._id)}>Remove Player</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default AllPlayers;