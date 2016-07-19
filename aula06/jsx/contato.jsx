import React from "react";
import ReactDOM from "react-dom";
import TitleBox from "./title.jsx";
import FormularioBox from "./formulario.jsx";

var ContatoBox = React.createClass ({

	render: function() {
		return (
			<div className="contato">
				<TitleBox corLetra="green">
					Contato
					<TitleBox corLetra="red" fonte="13">
						* Campos obrigatórios
					</TitleBox>

				</TitleBox>

				<FormularioBox />
			</div>
		);
	}

});

ReactDOM.render (
	<ContatoBox />,
	document.getElementById("content")
)
