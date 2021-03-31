import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import TeammateListItem from './TeammateListItem';
import selectTeammates from '../selectors/teammates';

export const TeammateList = (props) => (
    <div >
    
        
        <div className="page-header__actions">
                    <Link className="button" to="/createteammate">Contact Me </Link>
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