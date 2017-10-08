var React = require('react');
var ReactDOM = require('react-dom');

var Note = React.createClass({
	del(){
		this.props.remove(this.props.index);
	},
	render(){
		return(
			<div>
				<p>{this.props.children}</p>
				<button onClick={this.del}>Delete</button>		
			</div>
		);
	}
});

var List = React.createClass({
	del(index){
		this.state.array.splice(index);
		this.setState(this.state);
	},
	getInitialState(){
		return {array: ["iphone", "ipad", "ipod"]}
	},
	render(){
		return (
			<div>
				{this.state.array.map((e, i)=>{
					return <Note key={i} index={i} remove={this.del}>{e}</Note>
				})}
			</div>
		);
	}
});


ReactDOM.render(
	<List />,
	document.getElementById('root')
)