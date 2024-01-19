Description du Projet : Météo & Photos de Ville

Le projet combine les données météorologiques actuelles d'une ville avec des photos de cette ville pour créer une expérience visuelle immersive. L'utilisateur peut entrer le nom de la ville dans un formulaire, et l'application utilise l'API OpenWeatherMap pour récupérer les prévisions météorologiques sur cinq jours. En parallèle, une autre API, Unsplash, est utilisée pour obtenir une photo représentative de la ville. Les données météorologiques sont affichées sous forme de graphique, tandis que la photo de la ville est intégrée en arrière-plan du titre principal. L'application offre ainsi une visualisation complète de la météo et de l'esthétique de la ville choisie.

Problemes rencontrés :

    Gestion des Promesses : L'utilisation des requêtes asynchrones avec fetch et la gestion des Promesses peuvent être complexes, en particulier lors de la récupération des données depuis les API.

    Travail avec les API : Intégrer les données provenant de deux API différentes (OpenWeatherMap et Unsplash) peut présenter des défis, surtout si les structures de réponse varient.

    Dynamisme des Données : La manipulation dynamique du DOM pour afficher les données météorologiques et les graphiques peut être complexe, surtout lors de la création d'éléments HTML à partir des données récupérées.

    Gestion des Erreurs : Gérer les erreurs provenant des API et assurer une expérience utilisateur fluide en cas d'échec des appels API est crucial.

    Integration de Graphiques : Intégrer des bibliothèques ou créer des graphiques peut être complexe.

    Gestion des Événements DOM : La gestion des événements DOM, notamment la soumission de formulaires et la mise à jour dynamique de l'interface utilisateur en réponse à ces événements, peut être délicate.

    Stockage Local : L'utilisation du stockage local (localStorage) pour sauvegarder et récupérer la ville précédemment consultée peut nécessiter une compréhension approfondie des mécanismes de stockage Web.

    Résolution des Problèmes : Le débogage et la résolution des problèmes.
