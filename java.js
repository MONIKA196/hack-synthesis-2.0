function fetchAirQuality() {
    // Simulate API fetch (replace with real API call)
    const randomPPM = (Math.random() * 300).toFixed(2); // Simulated value
    document.getElementById('ppm-value').textContent = randomPPM;
  }
  
  document.addEventListener('DOMContentLoaded', fetchAirQuality);