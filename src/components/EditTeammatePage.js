import React from 'react';
import {connect} from 'react-redux';
import TeammateForm from './TeammateForm';
import {startEditTeammate, startRemoveTeammate} from '../actions/teammates';

export class EditTeammatePage extends React.Component {
    onSubmit = (teammate) => {
    this.props.startEditTeammate(this.props.teammate.id, teammate);
    this.props.history.push('/');    
    }

    onRemove = () => {
        this.props.startRemoveTeammate({id: this.props.teammate.id});
        this.props.history.push('/'); 
    }
    render() {
        return (
            <div>
                <div className = "page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Edit Teammate</h1>
                    </div>
                </div>
                <div className="content-container">
                    <TeammateForm
                        teammate={this.props.teammate}
                        onSubmit = {this.onSubmit}
                    />
                    <button className="button button--secondary" onClick = {this.onRemove}>Remove Teammate</button>
                </div>

            </div>
        );

    }
}

const mapStateToProps = (state, props) => {
    return {
        teammate: state.teammates.find((teammate) => teammate.id === props.match.params.id)
    };
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        startEditTeammate: (id, teammate) => dispatch(startEditTeammate(id, teammate)),
        startRemoveTeammate: (data) => dispatch(startRemoveTeammate(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditTeammatePage);