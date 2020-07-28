import database from '../firebase/firebase';

export const addProject = (project) => ({
    type: 'ADD_PROJECT',
    project
});

export const startAddProject = (projectData = {}) => {
    return (dispatch, getState) => {
        const uid=getState().auth.uid;
        const {       
            projectName = '', 
            projectEmail = '',
            githubLink = '' 
        } = projectData;
        const project = {projectName, projectEmail, githubLink};
        
        return database.ref(`projects`).push(project).then((ref)=>{
            dispatch(addProject({
                id: ref.key,
                ...project
            }));
        });
    };
};

export const removeProject = ({id} = {}) => ({
    type: 'REMOVE_PROJECT',
    id
});

export const startRemoveProject = ({id} = {}) => {
    return (dispatch, getState) => {
        const uid=getState().auth.uid;
        return database.ref(`projects/${id}`).remove().then(() => {
            dispatch(removeProject({id}));
        });
    }
};

export const editProject = (id, updates) => ({
    type: 'EDIT_PROJECT',
    id,
    updates
});

export const startEditProject = (id, updates) => {
    return (dispatch, getState) => {
        const uid=getState().auth.uid;
        return database.ref(`projects/${id}`).update(updates).then(() => {
            dispatch(editProject(id, updates));
        });
    }
};

export const setProjects = (projects) => ({
    type: 'SET_PROJECTS',
    projects
});

export const startSetProjects = () => {
    console.log('made it to startSetProjects');
    return (dispatch, getState) => {
        const uid=getState().auth.uid;
        return database.ref(`projects`).once('value').then((snapshot) => {
            const projects = [];

            snapshot.forEach((childSnapshot) => {
                projects.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });

            dispatch(setProjects(projects));
        });
    }
};