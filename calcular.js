function adi()
{
	var num1 = parseInt(document.dados.n1.value);
	var num2 = parseInt(document.dados.n2.value);

	var soma = num1 + num2;
	document.dados.resp.value = soma;
}

function sub()
{
    var num1 = parseInt(document.dados.n1.value);
	var num2 = parseInt(document.dados.n2.value);

	var subtração = num1 - num2;
	document.dados.resp.value = subtração;
}

function mul()
 {
    var num1 = parseInt(document.dados.n1.value);
	var num2 = parseInt(document.dados.n2.value);

	var multiplicacao = num1 * num2;
	document.dados.resp.value = multiplicacao;
 }

function div()
{
    var num1 = parseInt(document.dados.n1.value);
	var num2 = parseInt(document.dados.n2.value);

	var divisao = num1 / num2;
	document.dados.resp.value = divisao;
}

function pot()
{
    var num1 = parseInt(document.dados.n1.value);
	var num2 = parseInt(document.dados.n2.value);
    
	var potenciacao = num1 ** num2
	document.dados.resp.value = potenciacao;

}
