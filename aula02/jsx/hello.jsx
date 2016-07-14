import React from "react";
import ReactDOM from "react-dom";

var CommentBox = React.createClass({
	render: function () {
		return (
			<div className="commentBox">
			 Hello, world! Eu sou um CommentBox.
			</div>
		);
	}
});

ReactDOM.render (
	<CommentBox />,
	document.getElementById('content')
);
