var prompt = require('prompt');

prompt.start();


prompt.get(['ID','SN'], function (err, result) {

	const {SN,ID} = result;

	const IDParseado = ID.split("-").join("");

	const codigoDividido = SN.split("-");
	const codigoParseado = codigoDividido.map(element=>element.slice(1)).join("");
	
	console.log("ID:",IDParseado);
	console.log("SN:",codigoParseado);

});


