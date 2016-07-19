Aula 04 -> Propriedades nas classes
==============================

Compilação dos arquivos
-----------------------

	O comando

    sudo webpack --watch --progresse

    deve ficar rodando sempre, para que as alterações sejam monitoradas


### getDefaultProps

	Função que recebe as declarações das propriedades que serão recebidas como parâmetros.
	A utilização das propriedades é feita utilizando o comando:
		*this.props.nomedapropriedade*

	Dentro do código da função render o código javascript é escrito entre *{ }*

### children

	this.props.children -> Voce pode passar uma propriedade do tipo texto no meio das tags e recebe-la utilizando esta propriedade no objeto