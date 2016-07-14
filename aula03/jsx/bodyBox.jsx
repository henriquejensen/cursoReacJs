import React from "react";
import Title from "./titleBox.jsx";
import Comment from "./commentBox.jsx";
import ReactDOM from "react-dom";

var TitleBox = Title.TitleBox;
var CommentBox = Comment.CommentBox;

var BodyBox = React.createClass({
	render: function () {
		return (
			<div className="bodyBox">
			 <TitleBox />
			 <CommentBox />
			</div>
		);
	}
});

ReactDOM.render (
	<BodyBox />,
	document.getElementById('content')
);
