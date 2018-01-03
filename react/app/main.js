// var React = require('react');
// var ReactDOM  = require('react-dom');

//case1

// export class Text extends React.Component {
//   constructor(props) {

//   }

//   render() {
//     alert("render");

//     return(
//       <div>
//         哈哈哈哈
//       </div>
//     )

//   }
// }

//case2

// var element = React.createElement(
//   'h1',
//   {className: 'container'},
//   '欢迎来到react的世界！'
//  );

// ReactDOM.render (
//   element,
//   document.getElementById('container')
// );

//case3
import React, { Component } from 'react'
import { render } from 'react-dom';

class Result extends Component{

  render() {

    return (
      <div>
        djaijdia
      </div>
    );
  }
}

render(
  <Result />,
  document.getElementById('container')
);