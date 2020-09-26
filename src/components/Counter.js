import React, {Component} from 'react'

class Counter extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
          count :0,
          time :new Date()
        }
      }

      increment(){
          this.setState({
              count: this.state.count + 1
          })
        //   this.state.count= this.state.count + 1;
        

      }

      componentDidMount() {
        this.timerID = setInterval(
          () => this.updateTime(),
          1000
        );
      }

      componentWillUnmount() {
        clearInterval(this.timerID);
      }

      updateTime(){
        this.setState({
          time : new Date()
        })
      }
    render(){
        return(
            <div><div>Counter - {this.state.count}</div>
            <div>Timer: {this.state.time.toLocaleTimeString()}</div>
            <button onClick={()=> this.increment()}>Increment</button>
            </div>
        
        )
    }
}
export default Counter