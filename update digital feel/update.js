let speed = 120;
let rpm = 4000;

function updateCluster() {
    // Update Speed value dynamically
    speed = (speed + Math.random() * 10 - 5) % 320;
    document.getElementById('speed-value').innerText = Math.round(speed);

    // Update RPM value dynamically
    rpm = (rpm + Math.random() * 100 - 50) % 8000;
    document.getElementById('rpm-value').innerText = Math.round(rpm / 1000);

    // Call update every second
    setTimeout(updateCluster, 1000);
}

// Start the update loop
updateCluster();
