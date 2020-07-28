import React from 'react';

export default class ProjectForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            projectName: props.project ? props.project.projectName : '',
            projectEmail: props.project ? props.project.projectEmail : '',
            githubLink : props.project ? props.project.githubLink : '',
            error: ''
        };
    }


    onProjectNameChange = (e) => {
        const projectName = e.target.value;
        this.setState(() => ({projectName}));
    };
    
    onProjectEmailChange = (e) => {
        const projectEmail = e.target.value;
        this.setState(() => ({projectEmail}));
    };

    onGithubLinkChange = (e) => {
        const githubLink = e.target.value;
        this.setState(() => ({githubLink}));
    }

    onSubmit = (e) => {
        e.preventDefault();

        if(!this.state.projectName || !this.state.projectEmail){
            //Set error state
            this.setState(({error: 'Please provide the project name, your email, and a github link'}));
        } else {
            //Clear the error
            this.setState(({error: ''}));

            this.props.onSubmit({
                projectName: this.state.projectName,
                projectEmail: this.state.projectEmail,
                githubLink : this.state.githubLink
            })

        }
    }
    render() {
        return (
                    <form className="form" onSubmit={this.onSubmit}>
                    {this.state.error && <p className="form__error">{this.state.error}</p>}
                    <input
                        type="text"
                        placeholder="Project Name"
                        autoFocus
                        className="text-input"
                        value={this.state.projectName}
                        onChange={this.onProjectNameChange}
                    />
                    <input
                        type="text"
                        placeholder="Creator Email"
                        autoFocus
                        className="text-input"
                        value={this.state.projectEmail}
                        onChange={this.onProjectEmailChange}
                    />
                    <input 
                        type ="text"
                        placeholder = "Github Link"
                        autoFocus
                        className = "text-input"
                        value = {this.state.githubLink}
                        onChange = {this.onGithubLinkChange}
                    />
                    <div>
                        <button className="button">Add Project to Portfolio</button>
                    </div>
                </form>
        )
    }
}