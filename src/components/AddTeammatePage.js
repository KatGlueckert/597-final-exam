import React from 'react';
import TeammateForm from './TeammateForm';
import {connect} from 'react-redux';
import { startAddTeammate } from '../actions/teammates';

export class AddTeammatePage extends React.Component {
    onSubmit = (teammate) => {
        this.props.startAddTeammate(teammate);
        this.props.history.push('/');
    };
    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Contact Form</h1>
                    </div>
                </div>
                <div className="content-container">
                    <TeammateForm 
                    onSubmit = {this.onSubmit}
                    />
                </div>
            </div>
        )

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        startAddTeammate: (teammate) => dispatch(startAddTeammate(teammate))
    };
};

export default connect(undefined, mapDispatchToProps)(AddTeammatePage);