function fetchAirQuality() {
    
    const randomPPM = (Math.random() * 300).toFixed(2); 
    document.getElementById('ppm-value').textContent = randomPPM;
  }
  
  document.addEventListener('DOMContentLoaded', fetchAirQuality);
