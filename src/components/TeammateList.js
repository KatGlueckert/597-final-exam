import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import TeammateListItem from './TeammateListItem';
import selectTeammates from '../selectors/teammates';

export const TeammateList = (props) => (
    <div className="content-container">
    
        
        <div className="page-header__actions">
                    <Link className="button" to="/createteammate/${state.auth.id}">Contact Me </Link>
        </div>
        
    </div>
);

const mapStateToProps = (state) => {
    const uid=state.auth.uid;
    return{
        teammates: selectTeammates(uid, state.teammates),
    }
};

export default connect(mapStateToProps)(TeammateList);