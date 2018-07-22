
/*
$.get("http://localhost:8080/recherche/clients/", function (reponse) {
    var clients_all = reponse; 
	var tableau = document.getElementById("table_client");
	clients_all.forEach(function (client) {
	var ligne=tableau.insertRow(-1);
	var colonne1 = ligne.insertCell(0);
	var colonne2 = ligne.insertCell(1);
	var colonne3 = ligne.insertCell(2);
	var colonne4 = ligne.insertCell(3);
	var numero_client = document.getElementById("numero_client");
	var raison_sociale = document.getElementById("raison_sociale");
	var cree_le = document.getElementById("cree_le");
	var nom_representant = document.getElementById("nom_representant");
	nom_representant=client.nom_representant;
    numero_client.value=client.numero_client;
	raison_sociale.value=client.raison_sociale;
	cree_le.value=client.cree_le;
	colonne1.innerHTML +=numero_client.value;
	colonne2.innerHTML +=raison_sociale.value;
	colonne3.innerHTML +=cree_le.value;
	colonne4.innerHTML +=nom_representant.value;
    });
});
*/
$.get("http://localhost:8080/recherche/clients/", function (reponse) {
    var clients_all = reponse; 
	var tableau = document.getElementById("table_client");
	clients_all.forEach(function (client) {
	var ligne=tableau.insertRow(-1);
	var colonne1 = ligne.insertCell(0);
	var colonne2 = ligne.insertCell(1);
	var colonne3 = ligne.insertCell(2);
	var colonne4 = ligne.insertCell(3);
	var colonne5 = ligne.insertCell(4);
	var colonne6 = ligne.insertCell(5);
	colonne1.innerHTML +=client.numero_client;
	colonne2.innerHTML +=client.raison_sociale;
	colonne3.innerHTML +=client.cree_le;
	colonne4.innerHTML +=client.nom_representant;
	colonne5.innerHTML +=client.categorie;
	colonne6.innerHTML +=client.etat;
    });
});