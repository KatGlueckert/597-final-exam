
//Get Visible Projects
const getVisibleProjects = (projects) => {
    return projects.sort((a, b) => {
            return a.projectName < b.projectName ? 1 : -1;
    });
}

export default getVisibleProjects;