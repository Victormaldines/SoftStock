console.log(document.getElementById('tr1'));

function especificar() {
	alert('dale');
}

let tabela = document.getElementById("tabela");

if (tabela) {

  for (let i = 0; i < tabela.rows.length; i++) {
    tabela.rows[i].onclick = function() {
      setInfo(infoLinha(this))
    };
  }

}

function infoLinha(linha) {
  let data = linha.childNodes[1].innerHTML;
  let hora = linha.childNodes[3].innerHTML;
  let transacao = linha.childNodes[5].innerHTML;
  let produto = linha.childNodes[7].innerHTML;
  let valorTotal = linha.childNodes[9].innerHTML;
  let quantidade = linha.childNodes[11].innerHTML;
  let estoque = linha.childNodes[13].innerHTML;

  let registro = {'data': data, 'hora': hora, 'transacao': transacao, 'produto': produto, 'valorTotal': valorTotal, 'quantidade': quantidade, 'estoque': estoque};
  console.log(registro);
  return registro;
}

function setInfo(objeto) {

	document.getElementById('t_data').innerHTML = objeto.data;
	document.getElementById('t_hora').innerHTML = objeto.hora;
	document.getElementById('t_transacao').innerHTML = objeto.transacao;
	document.getElementById('t_produto').innerHTML = objeto.produto;

	if (objeto.valorTotal == '')
		objeto.valorTotal = 'Ajuste';

	document.getElementById('t_valorTotal').innerHTML = objeto.valorTotal;

	document.getElementById('t_quantidade').innerHTML = objeto.quantidade;
	document.getElementById('t_estoque').innerHTML = objeto.estoque;


}
