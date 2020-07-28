import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import ProjectListItem from './ProjectListItem';
import selectProjects from '../selectors/projects';
import TeammateList from './TeammateList';

export const ProjectList = (props) => (
    <div className="content-container">
        <div className="list-header">
            <div className="show-for-mobile">Projects</div>
            <div className="show-for-desktop">Katherine Glueckert</div>
            <div className="show-for-desktop">kaglueckert@crimson.ua.edu</div>
        </div>
        <div className = "list-body">
            {
                props.projects.length === 0 ? (
                    <div className="list-item list-item--message">
                        <span>No Projects</span>
                    </div>
                ) : (
                        props.projects.map((project) => {
                        return <ProjectListItem key={project.id} {...project} />;
                        })
                    )
            }
        </div>
        <div className="page-header__actions">
                    <Link className="button" to="/createproject">Add Project</Link>
        </div>
        <TeammateList /> 
    </div>
);

const mapStateToProps = (state) => {
    return{
        projects: selectProjects(state.projects),
    }
};

export default connect(mapStateToProps)(ProjectList);