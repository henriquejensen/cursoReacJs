import React from "react";

export default React.createClass({

	getInitialState() {
		return {
			contato: [],
			autor: "",
			email: "",
			texto: ""
		}
	},

	handleAuthorChange(e) {
		this.setState({
			autor: e.target.value
		})
	},

	handleEmailChange(e) {
		this.setState({
			email: e.target.value
		})
	},

	handleTextChange(e) {
		this.setState({
			texto: e.target.value
		})
	},

	handleButtonClick() {
		var comentario = {
			autor: e.target.value,
			email: e.target.value,
			texto: e.target.value
		}

		this.setState({
			comentario: this.state.comentario.concat([comentario])
		})
	},

	render: function() {
		return (	
			<div className="formBox">
				<form>
					<input type="text"
						   placeholder="Digite seu nome"
						   onChange={this.handleAuthorChange}>
					</input>
					<br/>
					<input type="text"
						   placeholder="Digite seu email"
						   onChange={this.handleEmailChange}>
					</input>
					<br/>
					<input type="text"
						   placeholder="Escolha o assunto"
						   onChange={this.handleEmailChange}>
					</input>
					<br/>
					<input type="text"
						   placeholder="Digite a mensagem"
						   onChange={this.handleTextChange}>
					</input>
					<br/>
					<input type="button"
						   value="Enviar"
						   onClick={this.handleButtonClick}>
					</input>
				</form>

				Autor: {this.state.autor}<br/>
				Texto: {this.state.texto}
			</div>
		)
	}
});