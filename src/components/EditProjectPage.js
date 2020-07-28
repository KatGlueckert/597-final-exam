import React from 'react';
import {connect} from 'react-redux';
import ProjectForm from './ProjectForm';
import {startEditProject, startRemoveProject} from '../actions/projects';

export class EditProjectPage extends React.Component {
    onSubmit = (project) => {
    this.props.startEditProject(this.props.project.id, project);
    this.props.history.push('/');    
    }

    onRemove = () => {
        this.props.startRemoveProject({id: this.props.project.id});
        this.props.history.push('/'); 
    }
    render() {
        return (
            <div>
                <div className = "page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Edit Project</h1>
                    </div>
                </div>
                <div className="content-container">
                    <ProjectForm
                        project={this.props.project}
                        onSubmit = {this.onSubmit}
                    />
                    <button className="button button--secondary" onClick = {this.onRemove}>Remove Project</button>
                </div>

            </div>
        );

    }
}

const mapStateToProps = (state, props) => {
    return {
        project: state.projects.find((project) => project.id === props.match.params.id)
    };
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        startEditProject: (id, project) => dispatch(startEditProject(id, project)),
        startRemoveProject: (data) => dispatch(startRemoveProject(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProjectPage);