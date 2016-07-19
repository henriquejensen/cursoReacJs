import React from "react";
import ReactDOM from "react-dom";
import Title from "./title.jsx";

var TitleBox = Title.TitleBox;

var HelloBox = React.createClass ({

	render: function() {
		return (
			<TitleBox corLetra="red" >
				Titulo passado pelo children
			</TitleBox>
		);
	}

});

ReactDOM.render (
	<HelloBox />,
	document.getElementById("content")
)
