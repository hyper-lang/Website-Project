import React, {Component} from 'react';
import ReactDOM from 'react-dom';

Class Test extends React.Component{
  render(){
    return(<h1>test</h1>);
  }
}
					 
const simple = <h1>This is a simple element</h1>
           
// ReactDOM.render(<Test />, document.getElementById('test'));
ReactDOM.render(simple, document.getElementById('test'));
