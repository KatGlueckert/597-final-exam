import React from 'react';
import ProjectForm from './ProjectForm';
import {connect} from 'react-redux';
import { startAddProject } from '../actions/projects';

export class AddProjectPage extends React.Component {
    onSubmit = (project) => {
        this.props.startAddProject(project);
        this.props.history.push('/');
    };
    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Add Project</h1>
                    </div>
                </div>
                <div className="content-container">
                    <ProjectForm 
                    onSubmit = {this.onSubmit}
                    />
                </div>
            </div>
        )

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        startAddProject: (project) => dispatch(startAddProject(project))
    };
};

export default connect(undefined, mapDispatchToProps)(AddProjectPage);