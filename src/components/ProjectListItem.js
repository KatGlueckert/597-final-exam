import React from 'react';
import {Link} from 'react-router-dom';

const ProjectListItem = ({dispatch, id, projectName, githubLink}) => (
        <Link className = "list-item" to= {`/editproject/${id}`}>
            <div>
                <h3 className="list-item__title">{projectName}</h3>
            </div>
            <h3 className="list-item__data">{githubLink}</h3>
           
        </Link>
);

export default ProjectListItem;