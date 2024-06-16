let jsonData = []; // Variable to store fetched JSON data
let currentPage = 1;
const itemsPerPage = 5; // Number of items per page

// Function to fetch JSON data
async function fetchJsonData() {
    try {
        const response = await fetch('pagination.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        jsonData = await response.json(); // Assigning fetched data to the variable
        renderData();
        renderPaginationControls();
    } catch (error) {
        console.error('Fetch error:', error);
    }
}

// Function to render current page data
function renderData() {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const paginatedData = jsonData.slice(start, end);

    const dataContainer = document.getElementById('data-container');
    dataContainer.innerHTML = ''; // Clear previous data
    paginatedData.forEach(item => {
        const p = document.createElement('p');
        const i = document.createElement('p');
        const c = document.createElement('p');
        i.textContent = `Id : ${item.id}`
        p.textContent = `Name : ${item.name}`
        c.textContent =  `Email : ${item.email}`
      //   p.textContent = item.email // Assuming 'name' is a property in your JSON objects
        dataContainer.appendChild(i);
        dataContainer.appendChild(p);
        dataContainer.appendChild(c);
    });
}

// Function to render pagination controls
function renderPaginationControls() {
    const totalPages = Math.ceil(jsonData.length / itemsPerPage);
    const paginationControls = document.getElementById('pagination-controls');
    paginationControls.innerHTML = ''; // Clear previous controls

    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement('button');
        button.textContent = i;
        button.classList.add('pagination-button');
        if (i === currentPage) {
            button.classList.add('active');
        }
        button.addEventListener('click', function() {
            currentPage = i;
            renderData();
            renderPaginationControls();
        });
        paginationControls.appendChild(button);
    }
}

// Initialize pagination
fetchJsonData();