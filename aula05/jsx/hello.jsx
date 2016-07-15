import React from "react";
import ReactDOM from "react-dom";
import Title from "./title.jsx";

var TitleBox = Title.TitleBox;

var HelloBox = React.createClass ({

	render: function() {
		return (
			<TitleBox corLetra="red" children="Titulo aula 5"/>
		);
	}

});

ReactDOM.render (
	<HelloBox />,
	document.getElementById("content")
)
