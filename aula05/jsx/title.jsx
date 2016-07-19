import React from "react";

var TitleBox = React.createClass ({

	getInitialState() {
		return {
			hide: false
		}
	},

	trocaValor() {
		this.setState({
			hide: !this.state.hide
		})
	},

	getDefaultProps() {
		return {
			corLetra: "grey",
			fonte: 48
		}
	},

	componentDidMount() {

	},

	componentWillMount() {

	},

	render: function() {
		return (
			<div className="titleBox">
				{!this.state.hide ?
					(<h1 style={{color: this.props.corLetra, fontSize: this.props.fonte}}>
						{this.props.children}
					</h1>)
					:("")
				}

				Valor de hide: {this.state.hide.toString()}
				<br></br>
				<button onClick={this.trocaValor}
						title="Trocar valor">
					Trocar Valor			
				</button>
			</div>
		);
	}

});

export default {
	TitleBox: TitleBox
}
