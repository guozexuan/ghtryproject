import React, {Component} from "react";
import Demo from './demo.js'

class Result extends Component{
    constructor(props){
        super(props);
        this.state ={
          text:'hello',
          show: true
        }
    }
    componentDidMount() {
      this.setState({
        text: 'ssss',
        show: false
      })
      // this.forceUpdate();
    }
    render() {
      return (
          <div>
            {this.state.text}
            {
              this.state.show && <Demo />
            }
            
          </div>
      );
    }
  }

export default Result;