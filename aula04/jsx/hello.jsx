import React from "react";
import ReactDOM from "react-dom";
import Title from "./titleBox.jsx";

var TitleBox = Title.TitleBox;

var HelloBox = React.createClass({
	render: function() {
		return (
			<div className="helloBox">
				<TitleBox text="Teste do texto por parâmetro" corLetra="green"/>
			</div>
		);
	}
});


ReactDOM.render (
	<HelloBox />,
	document.getElementById('content')
);