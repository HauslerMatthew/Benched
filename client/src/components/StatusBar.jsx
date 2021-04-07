import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StatusBar = (props) => {
    const { playerId, gameId } = props;
    const [player, setPlayer] = useState();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/player/${playerId}`)
            .then(response => {
                console.log("getting single players...");
                console.log(response);
                setPlayer(response.data)
            })
            .catch(err => console.log("errors found getting a player", err))
    }, [])

    const onPlayHandler = (statusNum) => {
        console.log("Inside onPlayingHandler");
        const updatedPlayer = {
            ...player,
            status: {
                ...player.status,
                [`game${gameId}`]: statusNum
            }
        }
        axios.put(`http://localhost:8000/api/player/${playerId}`, updatedPlayer)
            .then(response => {
                setPlayer(updatedPlayer);
            })
            .catch(err => {
                console.log("ERROR UPDATING PLAYER AT HANDLER")
            })
    }

    return (
        <div>
            <button type="button" className={player && player.status[`game${gameId}`] === 1 ? "btn btn-success" : "btn btn-light"}
                onClick={() => onPlayHandler(1)}>
                Playing
            </button>
            <button type="button" className={player && player.status[`game${gameId}`] === -1 ? "btn btn-danger" : "btn btn-light"}
                onClick={() => onPlayHandler(-1)}>
                Not Playing
            </button>
            <button type="button" className={player && player.status[`game${gameId}`] === 0 ? "btn btn-warning" : "btn btn-light"}
                onClick={() => onPlayHandler(0)}>
                Undecided
            </button>
        </div>
    );
};

export default StatusBar;