import React, {Component} from "react";

class Demo extends Component{
    constructor(props){
        super(props);
        this.state ={
          text:'哈哈哈'
        }
    }
    componentDidMount() {
        this.timer = setInterval(()=>{
            console.log(111)
        },1000)
    }
    componentWillUnmount() {
        clearInterval(this.timer)
    }
    render() {
      return (
          <div>
            {this.state.text}
          </div>
      );
    }
  }

export default Demo;