import React from "react";

export default React.createClass ({

	getDefaultProps() {
		return {
			corLetra: "",
			fonte: 40,
		}
	},

	render: function() {
		return (
			<h1 style={{color: this.props.corLetra, fontSize: this.props.fonte}}>
				{this.props.children}
			</h1>
		)
	}

})