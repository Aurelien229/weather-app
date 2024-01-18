// Clé API OpenWeatherMap
const apiKey = "e712e2a639cd686c277fc5416e3d6590";

// Récupérer l'élément d'entrée du texte dans le DOM
const textInput = document.getElementById('inputCity');

// Récupérer la ville enregistrée depuis le stockage local
const savedCity = localStorage.getItem('userCity');

// Si une ville est enregistrée, définir la valeur de l'élément d'entrée du texte sur cette ville
if (savedCity) {
    textInput.value = savedCity;
}

// Fonction pour effectuer l'appel à l'API OpenWeatherMap
function apiCall(city) {
    // Construire l'URL pour l'appel API avec la ville spécifiée
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}&lang=fr`;

    // Récupérer le conteneur une seule fois en dehors de la boucle
    let conteneurInfo = document.querySelector(".info_container");

    // Vider le contenu existant du conteneur
    conteneurInfo.innerHTML = "";

    // Effectuer la requête fetch vers l'API OpenWeatherMap
    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Créer un élément h2 pour afficher le nom de la ville
            let nomVille = document.createElement("h2");
            nomVille.innerHTML = `${city}`;

            // Vérifier si l'élément ville existe, sinon créer un nouveau conteneur
            let ville = document.getElementById("ville");
            if (!ville) {
                ville = document.createElement("div");
                ville.id = "ville";
                document.body.appendChild(ville);
            }

            // Ajouter le nom de la ville à l'élément ville
            ville.innerHTML = "";
            ville.appendChild(nomVille);

            // Définir le nombre de jours à afficher
            let joursAafficher = 5;

            // Boucle pour afficher les données pour chaque jour
            let sommeTemperature = 0;

            for (let j = 0; j < joursAafficher; j++) {
                // Calculer l'indice correspondant à la journée actuelle
                const i = j * 8;

                // Créer un élément div pour afficher les informations de la journée
                let jour = document.createElement("div");
                jour.className = "infoWeek";

                // Remplir l'élément div avec les informations météorologiques
                jour.innerHTML =
                    `   
                        <div id="date${j}" class="box"></div>
                        <div id="temp${j}" class="box"></div>
                        <div id="humidity${j}" class="box"></div>
                        <div id="wind${j}" class="box"></div>
                    `;

                // Ajouter le jour au conteneur
                conteneurInfo.appendChild(jour);

                // Remplir chaque boîte avec les données météorologiques correspondantes
                let date = new Date(data.list[i].dt * 1000);
                document.querySelector(`#date${j}`).innerHTML = date.toLocaleDateString();
                document.querySelector(`#temp${j}`).innerHTML = "<i class='fa-solid fa-temperature-empty'></i>" + data.list[i].main.temp + "°";
                document.querySelector(`#humidity${j}`).innerHTML = "<i class='fa-solid fa-droplet'></i>" + data.list[i].main.humidity + "%";
                document.querySelector(`#wind${j}`).innerHTML = "<i class='fa-solid fa-wind'></i>" + data.list[i].wind.speed + "km/h";

                // Ajouter la température à la somme
                sommeTemperature += data.list[i].main.temp;
            }

            // Calculer la moyenne des températures
            const moyenneTemperature = sommeTemperature / joursAafficher;

            // Changer le fond en fonction de la moyenne des températures
            if (moyenneTemperature >= 0) {
                document.body.style.backgroundImage = "url('assets/test1.jpg')"; // Remplacez 'background1.jpg' par le chemin de votre image
            } else {
                document.body.style.backgroundImage = "url('assets/test2.1.jpg')"; // Remplacez 'background2.jpg' par le chemin de votre image
            }

        })
        .catch(err => {
            // Gérer les erreurs lors de l'appel API
            console.error("Erreur : " + err);
        });
}

// Attacher un gestionnaire d'événements lorsque le DOM est chargé
document.addEventListener("DOMContentLoaded", function () {
    // Attacher un gestionnaire d'événements pour le formulaire lorsqu'il est soumis
    document.querySelector("form").addEventListener("submit", function (e) {
        // Empêcher le comportement par défaut du formulaire
        e.preventDefault();

        // Récupérer la ville à partir de l'élément d'entrée du texte
        const city = textInput.value;

        // Enregistrer la ville dans le stockage local
        localStorage.setItem('userCity', city);

        // Appeler la fonction API avec la ville spécifiée
        apiCall(city);
    });
});

// Appeler initialement la fonction API avec une ville par défaut (Erquelinnes)
apiCall("Erquelinnes");




