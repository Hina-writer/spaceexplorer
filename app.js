const apiKey = 'SHvaq0XQnUtVQg5dd0PSSKRT4JmcR3AbUmZQt4i3'; // Replace with your NASA API key
const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const content = document.getElementById('content');
        content.innerHTML = `
            <h2>${data.title}</h2>
            <img src="${data.url}" alt="${data.title}" />
            <p>${data.explanation}</p>
        `;
    })
    .catch(error => console.error('Error fetching data:', error));
