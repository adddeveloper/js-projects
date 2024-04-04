// Function to generate the table rows
function generateTable(projects) {
  const tableBody = document.getElementById('projectTableBody');

  projects.forEach((project, i) => {
    const row = document.createElement('tr');

    const nameCell = document.createElement('td');
    nameCell.textContent = (String(i+1)+". "+project.name);
    row.appendChild(nameCell);

    const githubCell = document.createElement('td');
    const githubLink = document.createElement('a');
    githubLink.href = project.GitHub;
    githubLink.textContent = 'GitHub Link';
    githubCell.appendChild(githubLink);
    row.appendChild(githubCell);

    const liveCell = document.createElement('td');
    const liveLink = document.createElement('a');
    liveLink.href = project.Live;
    liveLink.textContent = 'Preview Link';
    liveCell.appendChild(liveLink);
    row.appendChild(liveCell);

    const codepenCell = document.createElement('td');
    const codepenLink = document.createElement('a');
    codepenLink.href = project.CodePen;
    codepenLink.textContent = 'CodePen Link';
    codepenCell.appendChild(codepenLink);
    row.appendChild(codepenCell);

    tableBody.appendChild(row);
  });
}

// Fetch the JSON data from index.json
fetch('index.json')
  .then(response => response.json())
  .then(data => {
    // Call the generateTable function with the retrieved projects data
    generateTable(data);
  })
  .catch(error => {
    console.log('Error fetching data:', error);
  });
