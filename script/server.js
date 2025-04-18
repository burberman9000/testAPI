const API_KEY = 'google_file.json';
const SPREADSHEET_ID = '1CytYYGFQfKMoE4v280LgeUmJpqMfTKvaO1VACpraXpc';
const RANGE = 'Sheet1!A1:E10';

async function fetchData() {
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${RANGE}?key=${API_KEY}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        document.getElementById('output').textContent = JSON.stringify(data, null, 2);
    } catch (error) {
        console.error('Ошибка:', error);
    }
}

fetchData();
