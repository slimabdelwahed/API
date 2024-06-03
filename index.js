document.addEventListener("DOMContentLoaded", function () {
    const apiKey = "70fcc96f92589072b42b0aeac51fa596";
    const rechercheBtn = document.getElementById("rechercher");
    const villeInput = document.getElementById("ville");
    const temperatureDiv = document.getElementById("temperature");
    const descriptionDiv = document.getElementById("description");
    const iconeDiv = document.getElementById("icone");

    rechercheBtn.addEventListener("click", function () {
        const ville = villeInput.value;
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${ville}&appid=${apiKey}&lang=fr&units=metric`;

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Erreur lors de la récupération des données météorologiques");
                }
                return response.json();
            })
            .then(data => {
                const temperature = data.main.temp;
                const description = data.weather[0].description;
                const icone = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;

                temperatureDiv.textContent = `Température: ${temperature}°C`;
                descriptionDiv.textContent = `Description: ${description}`;
                iconeDiv.innerHTML = `<img src="${icone}" alt="Icone météo">`;
            })
            .catch(error => {
                console.error("Erreur:", error);
            });
    });
});
