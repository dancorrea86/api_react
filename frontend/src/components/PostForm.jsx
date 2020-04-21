import React, { Component } from 'react'
import App from '../App'
import axios from 'axios'

class PostForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userId: '',
            title: '',
            body:''
        }
    }

    changeHandler = (e) => {
        App.setState({ [e.target.name] : [e.target.value] })
        App.renderTable();
    }

    submitHandler = (e) => {
        e.preventDefault()
        App.renderTable()
        console.log(this.state)
        axios
            .post('/post', this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }

    renderTable() {
        const { userId, title, body } = this.state
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <input type="text" name="userId" valeu={userId} onChange={this.changeHandler}/>
                    </div>
                    <div>
                        <input type="text" name="title" valeu={title} onChange={this.changeHandler}/>
                    </div>
                    <div>
                        <input type="text" name="body" valeu={body} onChange={this.changeHandler}/>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default PostForm;