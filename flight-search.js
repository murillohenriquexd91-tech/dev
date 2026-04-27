document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('flightForm');
  const resultsDiv = document.getElementById('results');
  const flightsList = document.getElementById('flightsList');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const origin = document.getElementById('origin').value;
    const destination = document.getElementById('destination').value;
    const departureDate = document.getElementById('departureDate').value;
    const returnDate = document.getElementById('returnDate').value;
    const passengers = document.getElementById('passengers').value;

    // Simulate API call
    setTimeout(() => {
      displayResults(origin, destination, departureDate, returnDate, passengers);
    }, 1000); // Simulate delay
  });

  function displayResults(origin, destination, depDate, retDate, pax) {
    const mockFlights = [
      {
        airline: 'LATAM',
        flightNumber: 'LA 1234',
        departureTime: '08:00',
        arrivalTime: '09:30',
        duration: '1h 30m',
        price: 'R$ 450,00',
        stops: 'Direto'
      },
      {
        airline: 'GOL',
        flightNumber: 'G3 5678',
        departureTime: '10:15',
        arrivalTime: '11:45',
        duration: '1h 30m',
        price: 'R$ 420,00',
        stops: 'Direto'
      },
      {
        airline: 'Azul',
        flightNumber: 'AD 9012',
        departureTime: '14:20',
        arrivalTime: '16:10',
        duration: '1h 50m',
        price: 'R$ 480,00',
        stops: '1 parada'
      }
    ];

    flightsList.innerHTML = mockFlights.map(flight => `
      <div class="flight-card">
        <div class="flight-info">
          <h3>${flight.airline} - ${flight.flightNumber}</h3>
          <p><strong>Horário:</strong> ${flight.departureTime} - ${flight.arrivalTime}</p>
          <p><strong>Duração:</strong> ${flight.duration}</p>
          <p><strong>Paradas:</strong> ${flight.stops}</p>
        </div>
        <div class="flight-price">
          <p><strong>Preço:</strong> ${flight.price}</p>
          <button class="select-btn">Selecionar</button>
        </div>
      </div>
    `).join('');

    resultsDiv.style.display = 'block';
  }
});