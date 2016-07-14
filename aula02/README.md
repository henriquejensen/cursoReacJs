Aula 02 -> Hello World
==============================

Compilação dos arquivos
-----------------------

	O comando

    npm --watch --progresse

    deve ficar rodando sempre, para que as alterações sejam monitoradas

jsx
---

	É a extensão do arquivo que terá o código javascript para o React.
	A ideia do React é criar classes que viram tags para o html.

### React.createClass

	Cria uma classe react e dentro de seu parâmetro irá um objeto javascript

### render

	função principal que deve ir dentro do React.createClass, nele irá o código html
	que será mostrado.
	O atributo class deve ser denominado como className

### ReactDOM.render

	Recebe dois parametros:
		1. Classe React em forma de tag
		2. o elemento no html onde esta classe será renderizada