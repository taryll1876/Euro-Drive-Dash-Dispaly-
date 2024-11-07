// Menu Navigation Logic
function navigate(menu) {
    document.querySelectorAll('.menu').forEach(menu => menu.classList.remove('active'));
    document.getElementById(`${menu}-menu`).classList.add('active');
}

// Simulated Sensor Data Update (You will replace this with real sensor input)
setInterval(() => {
    const afr = (Math.random() * (15 - 14) + 14).toFixed(2); // Simulated AFR value
    const voltage = (Math.random() * (5 - 0) + 0).toFixed(2); // Simulated Voltage value
    const temp = (Math.random() * (100 - 20) + 20).toFixed(1); // Simulated Temp in °C
    const waterTemp = (Math.random() * (110 - 80) + 80).toFixed(1); // Simulated Water Temp in °C
    const oilPressure = (Math.random() * (120 - 0) + 0).toFixed(1); // Simulated Oil Pressure in PSI

    // Update AFR Display
    document.getElementById('afr-value').innerText = `AFR: ${afr}`;
    document.getElementById('current-afr').innerText = afr;

    // Update Sensor Data
    document.getElementById('voltage').innerText = `${voltage}V`;
    document.getElementById('temperature').innerText = `${temp}°C`;

    // Update Water Temperature
    document.getElementById('water-temp').innerText = `${waterTemp}°C`;

    // Update Oil Pressure
    document.getElementById('oil-pressure').innerText = `${oilPressure} PSI`;
}, 1000);
