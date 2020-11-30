let valorCat = 1;
let valorMarca = 1;

let descricao = document.getElementById('descricao');
let categoria = document.getElementById('selectCategoria');
let marca = document.getElementById('selectMarca');
let estoqueMin = document.getElementById('estoqueMin');
let estoqueMax = document.getElementById('estoqueMax');
let observacao = document.getElementById('observacao');
let tituloProduto = document.getElementById('tituloProduto');

function adicionarOpc(selectOpc, num) {
	let texto = prompt('Insira uma opção');

	
	if (texto.trim() != '') {
		let opcao = document.createElement("option");

		opcao.text = texto;
		if (num === 0) {
			opcao.value = valorCat;
			valorCat++;
		} else {
			opcao.value = valorMarca;
			valorMarca++;
		}

		selectOpc.add(opcao);
	}
}

class Storage {
	constructor() {
		let id = localStorage.getItem('id');

		if (id === null) {
			localStorage.setItem('id', 0)
		}
	}

	getProximoId() {
		let proximoId = localStorage.getItem('id');
		return parseInt(proximoId) + 1;
	}

	gravar(produto) {
		let id = this.getProximoId();

		localStorage.setItem(id, JSON.stringify(produto));
		localStorage.setItem('id', id);
		tituloProduto.innerHTML = localStorage.getItem('id');
	}
}

class Produto {
	constructor() {
		this.descricao;
		this.categoria;
		this.marca;
		this.estoqueMin;
		this.estoqueMax;
		this.observacao;
	}

	adicionar() {
		this.descricao = descricao.value;
		this.categoria = categoria.value;
		this.marca = marca.value;
		this.estoqueMin = estoqueMin.value;
		this.estoqueMax = estoqueMax.value;
		this.observacao = observacao.value;
	}

	validarDados() {
		for (let i in this) {
			if (this[i] == undefined || this[i] == '' || this[i] == null) {
				return false;
			}
		}
		return true;
	}
}

let storage = new Storage();

function addProduto() {
	let p = new Produto();

	p.adicionar();

	if (p.validarDados()) {
		storage.gravar(p);
		alert(p.descricao + ' cadastrado com sucesso!');
		limparCampos();
	} else {
		alert('Preencha todos o campos!');
	}
}

function limparCampos() {
	descricao.value = '';
	categoria.value = '';
	marca.value = '';
	estoqueMin.value = '';
	estoqueMax.value = '';
	observacao.value = '';
}

tituloProduto.innerHTML = localStorage.getItem('id');