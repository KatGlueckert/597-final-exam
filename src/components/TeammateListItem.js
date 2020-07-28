import React from 'react';
import {Link} from 'react-router-dom';

const TeammateListItem = ({dispatch, uid, id, teammateName, teammateEmail}) => (
        <Link className = "list-item" to= {`/editteammate/${uid}/${id}`}>
            <div>
                <h3 className="list-item__title">{teammateName}</h3>
            </div>
            <h3 className="list-item__data">{teammateEmail}</h3>
        </Link>
);

export default TeammateListItem;