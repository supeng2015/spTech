import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import jQuery from 'jquery';

//var host = 'http://127.0.0.1:3000';
//jQuery.support.cors = true;

var HelloMessage = React.createClass({
  
  render() {
    this.qq = 1
    return <div>Hello {this.qq}</div>;
  }
})
ReactDOM.render(<HelloMessage/>, document.getElementById('mydom'));
ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// ReactDOM.render(<HelloMessage name="John" />, mountNode);
// tutorial1.js
// var CommentBox = React.createClass({
//   qq : function(){
     
//   },
//   render: function(){
//     jQuery.ajax({
//       url:'http://127.0.0.1:3000/qq',
//       type: "get",
//       success: function (data) {
//         console.log(data);
//         this.ww = data
//       }.bind(this)
//     })
//     //this.ww = 'aas';
//     console.log(this.ww);
//     return (
//       <div className="commentBox">
//         {this.ww}
//       </div>
//     );
//   }
// });
// ReactDOM.render(
//   <CommentBox />,
//   document.getElementById('mydom')
// );