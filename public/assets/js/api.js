/*chrome.exe --user-data-dir="C:/Chrome dev session" --disable-web-security*/
$.get("http://localhost:8080/recherche/clients/9", function (reponse) {
    var clients = reponse; /*JSON.parse(reponse);*/
	var numero_client = document.getElementById("numero_client");
	var raison_sociale = document.getElementById("raison_sociale");
	var siret = document.getElementById("siret");
    numero_client.value=clients.numero_client;
	raison_sociale.value=clients.raison_sociale;
	siret.value=clients.siret;
    });