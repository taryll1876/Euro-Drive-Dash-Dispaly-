// Simulated data (In a real-world scenario, fetch this from ECM using Java backend)
const sensorData = {
    fuelPumpStatus: "Normal",
    mapSensor: 100, // kPa
    tps: 25, // %
    crankPosition: 45, // °
    intakeAirTemp: 35, // °C
    speed: 60, // mph
    o2Sensor: "Normal",
    engineTemp: 90, // °C
    idleAirSolenoid: "Normal",
    injectors: "Firing",
    ignitionCoil: "Firing"
};

// Function to update the sensor data display
function updateSensorData() {
    document.getElementById("fuel-pump-status").innerText = `Status: ${sensorData.fuelPumpStatus}`;
    document.getElementById("map-sensor").innerText = `Pressure: ${sensorData.mapSensor} kPa`;
    document.getElementById("tps").innerText = `Position: ${sensorData.tps}%`;
    document.getElementById("crank-position").innerText = `Position: ${sensorData.crankPosition}°`;
    document.getElementById("intake-air-temp").innerText = `Temp: ${sensorData.intakeAirTemp}°C`;
    document.getElementById("speed-sensor").innerText = `Speed: ${sensorData.speed} mph`;
    document.getElementById("o2-sensor").innerText = `O2 Level: ${sensorData.o2Sensor}`;
    document.getElementById("engine-temp").innerText = `Temp: ${sensorData.engineTemp}°C`;
    document.getElementById("idle-air-solenoid").innerText = `Status: ${sensorData.idleAirSolenoid}`;
    document.getElementById("injectors").innerText = `Status: ${sensorData.injectors}`;
    document.getElementById("ignition-coil").innerText = `Status: ${sensorData.ignitionCoil}`;
}

// Simulate OBD2 Scan
document.getElementById("scan-obd2").addEventListener("click", () => {
    document.getElementById("diagnostic-result").innerText = "OBD2 Scan Complete. No Faults Detected.";
});

// Simulate resetting sensors
document.getElementById("reset-sensors").addEventListener("click", () => {
    alert("Sensors have been reset.");
});

// Simulate performance optimization
document.getElementById("optimize-performance").addEventListener("click", () => {
    alert("Performance optimization complete.");
});

// Update sensor data every second
setInterval(updateSensorData, 1000);

// Simulated connection status
let isConnected = false; // Starts as disconnected

// Simulate connecting to ELM327 over Bluetooth
function checkBluetoothConnection() {
    const connectionText = document.getElementById("connection-text");
    const connectionStatus = document.getElementById("connection-status");

    // Simulate connection process
    connectionStatus.classList.remove("connected", "connecting");
    connectionStatus.classList.add("connecting");
    connectionText.innerText = "Status: Connecting...";

    // Simulate delay for connection (e.g., trying to connect to the Bluetooth adapter)
    setTimeout(() => {
        isConnected = true; // Simulating successful connection after delay
        connectionStatus.classList.remove("connecting");
        connectionStatus.classList.add("connected");
        connectionText.innerText = "Status: Connected";
    }, 3000); // 3 seconds delay for simulation
}

// Function to simulate disconnection (optional)
function disconnectBluetooth() {
    const connectionText = document.getElementById("connection-text");
    const connectionStatus = document.getElementById("connection-status");

    isConnected = false;
    connectionStatus.classList.remove("connected");
    connectionStatus.classList.add("disconnected");
    connectionText.innerText = "Status: Disconnected";
}

// Call the function to check the connection when the page loads
window.onload = function() {
    checkBluetoothConnection();
};
