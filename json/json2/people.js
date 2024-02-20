

function displayInfo(data){
    const container = document.getElementById('info');

    const namePara = document.createElement('p');
    namePara.textContent= `Name: ${data.name}`;

    container.appendChild(namePara);
}


fetch('people.json')
.then(response => response.json())
  .then(data => displayInfo(data))
  .catch(error => console.error('Error:', error));