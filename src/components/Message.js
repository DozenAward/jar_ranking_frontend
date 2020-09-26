import React, { Component} from 'react'
class Message extends Component {
constructor(){
    super()
    this.state = {
        message: 'Welcome visitor'
    }
}
changeMessage(){
    this.setState({
        message:'thank for subcribe'
    })
}
    render(){
        return (<div>
            <h1>
            {this.state.message }
            </h1>
            <button onClick={()=>this.changeMessage()}>Subcribe</button>
        </div>)
    }
}
export default Message