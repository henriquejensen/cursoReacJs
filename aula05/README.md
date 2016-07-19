Aula 05 -> Estados da classe
==============================

Compilação dos arquivos
-----------------------

	O comando

    sudo webpack --watch --progresse

    deve ficar rodando sempre, para que as alterações sejam monitoradas


### acesso

	*this.state.nomedapropriedade*

### getInitialState

	Função de inicialização valores, nomes e os tipos do estado. Ela é declarada como um atributo

### this.setState

	Função responsável por alterar os valores dos estados da classe. Ela recebe um objeto javaScript para executa-la.

### componentDidMount

	Função que recebe as funcionalidades a serem realizadas antes de a classe ser renderizada. Executa no lado cliente

###	componentWillMount

	Funciona da mesma forma que componentDidMount porém executa depois de a classe ser renderizada e no lado cliente e servidor.