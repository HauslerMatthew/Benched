import React from 'react';
import { Link } from '@reach/router';

const GameHeader = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="navbar-nav">
                <Link to="/players/manage/1" className="nav-item nav-link active">Game 1</Link>
                <Link to="/players/manage/2" className="nav-item nav-link active">Game 2</Link>
                <Link to="/players/manage/3" className="nav-item nav-link active">Game 3</Link>
            </div>
        </nav>
    );
};

export default GameHeader;