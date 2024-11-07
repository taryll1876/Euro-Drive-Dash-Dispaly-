// Assume obd.js is loaded for handling OBD-II communication
const obd = new OBDReader();
obd.connect('Bluetooth', function () {
    document.getElementById('connection-status').innerText = 'Connected';
});

obd.on('rpm', function (rpm) {
    document.getElementById('rpm-value').innerText = (rpm / 1000).toFixed(1);
});

obd.on('speed', function (speed) {
    document.getElementById('speed-value').innerText = speed;
});

obd.on('temp', function (temp) {
    document.getElementById('temp-value').innerText = `${temp}°C`;
});

obd.on('fuel', function (fuel) {
    document.getElementById('fuel-value').innerText = `${fuel}%`;
});

obd.on('range', function (range) {
    document.getElementById('range-value').innerText = `${range} KM`;
});

obd.on('voltage', function (voltage) {
    document.getElementById('voltage').innerText = `${voltage}V`;
});

// Error handling and connection status updates
obd.on('error', function (error) {
    console.error('OBD Error:', error);
    document.getElementById('connection-status').innerText = 'Disconnected';
});

obd.startPolling(1000); // Poll every second

// Example function to simulate real-time update
function updateClusterSimulated() {
    // Replace with OBD-II data, simulated values for now
    let simulatedRPM = Math.random() * 8000;
    let simulatedSpeed = Math.random() * 200;

    document.getElementById('rpm-value').innerText = (simulatedRPM / 1000).toFixed(1);
    document.getElementById('speed-value').innerText = Math.round(simulatedSpeed);
    
    // Repeat every 1 second
    setTimeout(updateClusterSimulated, 1000);
}

// Uncomment to simulate in case OBD-II not working yet
// updateClusterSimulated();
