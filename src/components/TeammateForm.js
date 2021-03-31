import React from 'react';
import emailjs from 'emailjs-com';
import {Link} from 'react-router-dom';

export default class TeammateForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            questionName:  '',
            questionEmail:  '',
            questionComment:'',
            error: ''
        };
    }


    onQuestionNameChange = (e) => {
        const questionName = e.target.value;
        this.setState(() => ({questionName}));
    };
    
    onQuestionEmailChange = (e) => {
        const questionEmail = e.target.value;
        this.setState(() => ({questionEmail}));
    };

    onQuestionCommentChange = (e) => {
        const questionComment = e.target.value;
        this.setState(() => ({questionComment}));
    }

    onSubmit = (e) => {
        e.preventDefault();

        // if(!this.state.questionName || !this.state.questionEmail){
        //     //Set error state
        //     this.setState(({error: 'Please provide your name and email so that I can get back to you as quickly as possible'}));
        // } else {
        //     //Clear the error
        //     this.setState(({error: ''}));

        //     this.props.onSubmit({
        //         questionName: this.state.questionName,
        //         questionEmail: this.state.questionEmail,
        //         questionComment : this.state.questionComment
        //     })

        // }

        console.log(this.state);
        const templateId = 'template_DnqAEbRz';
        const serviceId = 'default_service';
        const userId = 'user_L4SuezHWVQQtup4S6NGwf';
        
        
        emailjs.send(serviceId, templateId, this.state, userId)
            .then((responce) => {
                
                console.log('Success!', responce.status, responce.text);
            }, (err) => {
                console.log('Failed', err);
            });
       
    }
    render() {
        return (
                    <form className="form" onSubmit={this.onSubmit}>
                    {this.state.error && <p className="form__error">{this.state.error}</p>}
                    <input
                        type="text"
                        placeholder="Inquiror Name"
                        autoFocus
                        className="text-input"
                        value={this.state.questionName}
                        onChange={this.onQuestionNameChange}
                    />
                    <input
                        type="text"
                        placeholder="Inquiror Email"
                        autoFocus
                        className="text-input"
                        value={this.state.questionEmail}
                        onChange={this.onQuestionEmailChange}
                    />
                    <input 
                        type = "text"
                        placeholder = "Questions or Comments"
                        autoFocus
                        className = "text-input"
                        value = {this.state.questionComment}
                        onChange = {this.onQuestionCommentChange}
                        />
                    <div>
                    <button className="button">Contact Creator</button>
                    <Link className="button" to="/dashboard">Return to Dashboard</Link>
                
                    
                    </div>
                </form>
        )
    }
}