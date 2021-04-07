import React, { useEffect, useState } from 'react';
import GameHeader from './GameHeader';
import StatusBar from './StatusBar';
import Chat from './Chat';
import axios from 'axios';
// import io from 'socket.io-client';

const ManagePlayers = (props) => {
    const { player, setPlayer, gameId } = props;


    useEffect(() => {
        axios.get("http://localhost:8000/api/player")
            .then(response => {
                console.log("getting all players...");
                console.log(response);
                setPlayer(response.data.results)
            })
            .catch(err => console.log("errors found getting all players", err))
    }, [])

    return (
        <div>
            <h1>Player Status</h1>
            <GameHeader />
            <br />
            <h2>Game {gameId}</h2>
            <div className="d-flex justify-content-center mt-4">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Player Name</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {player.map((play, idx) => {
                            return (
                                <tr key={idx}>
                                    <td>{play.name}</td>
                                    <td><StatusBar playerId={play._id} gameId={gameId} /></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            <iframe
                loading="lazy"
                width="600"
                height="450"
                allowFullScreen
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAdf7xCwLPk-eZbXqXqc3LZ3GojttPHu4k
                    &q=Nelson+Sports+Complex,Rolling+Meadows+IL">
                {/* look into making this a var the user enters */}
            </iframe>
            <br/>
            <h1>Live Chat with Team</h1>
            <Chat/>
        </div>
    );
};

export default ManagePlayers;
