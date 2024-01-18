// geocoding.js

export async function fetchGeocodingSuggestions(city) {
    const apiKeyWeatherMap = "YOUR_OPENWEATHERMAP_KEY"; // Remplacez par votre clé OpenWeatherMap
    const apiUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apiKeyWeatherMap}`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Erreur lors de la récupération des suggestions de géocodage');
        }

        const data = await response.json();
        const suggestions = data.map(item => item.name); // Vous pouvez adapter cela en fonction de la structure des données
        return suggestions;
    } catch (error) {
        console.error('Erreur:', error);
        throw error;
    }
}
