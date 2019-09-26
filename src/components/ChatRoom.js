import React, { Component } from 'react'

export class ChatRoom extends Component {

    constructor(props, context) {
        super(props, context)
        this.updateMessage = this.updateMessage.bind(this)
        this.submitMessage = this.submitMessage.bind(this)
        this.state = {
            message: '',
            messages: [
                {
                    id: 0,
                    body: 'This is the first message'
                },
                {
                    id: 1,
                    body: 'This is the second message'
                },
                {
                    id: 2,
                    body: 'This is the third message'
                },
                {
                    id: 3,
                    body: 'This is the fourth message'
                }
            ],

        }
    };

    updateMessage(e) {
        console.log('message updated: ' + e.target.value);
        this.setState({
            message: e.target.value,
        })
    };

    submitMessage() {
        console.log('message submitted: ' + this.state.message)
        // console.log(this.state.messages)

        const nextMessage = {
            id: this.state.messages.length,
            body: this.state.message
        }
        console.log('nextMessage: ' + nextMessage)

        var list = Object.assign([], this.state.messages)
        console.log('messages: ' + this.state.messages)
        console.log('list: ' + list)
        list.push(nextMessage)
        console.log(list)
        this.setState({
            messages: list
        })

    };

    render() {

        const currentMessages = this.state.messages.map((message, i) => {
            return (
                <li key={message.id} >{message.body}</li>
            )
        }) 

        return (
            <div>
                <ol className="messages">
                    {currentMessages}
                </ol>
               <input onChange={this.updateMessage} type="text" placeholder="message" /> 
               <br/>
               <button onClick={this.submitMessage} >Return</button>
            </div>
        )
    }
};

export default ChatRoom
