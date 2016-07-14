Aula 03 -> Criando várias classes
==============================

Compilação dos arquivos
-----------------------

	O comando

    npm --watch --progresse

    deve ficar rodando sempre, para que as alterações sejam monitoradas

jsx
---
	### exportando as classes
		A classe a ser exportada deverá ter a seguinte declaração no lugar da renderização:

		```
		export default {
			NomeClasse: NomeClasse
		}
		```

	### importando classes
		Na classe que irá importar a declaração será a seguinte

		```
		import Nome from "./arquivo.jsx";

		var Nome = Nome.NomeClasse;
		```
		Nome é o nome a ser chamado no arquivo