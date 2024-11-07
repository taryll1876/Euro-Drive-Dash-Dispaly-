// Initialize the RPM Gauge using Chart.js
const ctx = document.getElementById('rpmGauge').getContext('2d');
const rpmGauge = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['RPM'],
        datasets: [{
            label: 'RPM',
            data: [0, 100], // Initial RPM value
            backgroundColor: ['#3498db', '#ecf0f1'],
            borderWidth: 1
        }]
    },
    options: {
        circumference: 180,
        rotation: 270,
        cutout: '80%',
        plugins: {
            tooltip: { enabled: false },
            legend: { display: false }
        }
    }
});

// Function to update the gauge (This would connect to actual sensor data)
function updateRpmGauge(rpm) {
    rpmGauge.data.datasets[0].data[0] = rpm;
    rpmGauge.data.datasets[0].data[1] = 100 - rpm; // Assuming max RPM is 100
    rpmGauge.update();
}

// Function to update sensor values (placeholders for real data)
function updateSensorValues() {
    document.getElementById('boostPressureValue').textContent = '14'; // Boost Pressure
    document.getElementById('oilPressureValue').textContent = '40'; // Oil Pressure
    document.getElementById('coolantTempValue').textContent = '90'; // Coolant Temp
    document.getElementById('mphValue').textContent = '65'; // Speed (mph)
    updateRpmGauge(75); // RPM, for demo purpose set to 75%
}

// Update the sensor values every 2 seconds (for demo purposes)
setInterval(updateSensorValues, 2000);

// Button Event Listeners (for future functionality)
document.getElementById('prevBtn').addEventListener('click', () => {
    console.log('Previous button clicked');
});

document.getElementById('nextBtn').addEventListener('click', () => {
    console.log('Next button clicked');
});

document.getElementById('powerBtn').addEventListener('click', () => {
    console.log('Power button clicked');
});
