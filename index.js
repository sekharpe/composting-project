let totalWaste = 0;

function trackWaste() {
    const wasteType = document.getElementById('wasteType').value;
    const wasteAmount = parseFloat(document.getElementById('wasteAmount').value);
    
    if (!isNaN(wasteAmount) && wasteAmount > 0) {
        totalWaste += wasteAmount;
        
        // Display waste tracking result
        document.getElementById('wasteResult').innerText = You have added ${wasteAmount} kg of ${wasteType} to the compost.;
        
        // Update dashboard
        document.getElementById('totalWaste').innerText = totalWaste;
        
        // Mock Compost Ready calculation (e.g., 80% of waste is compostable)
        let compostReady = totalWaste * 0.8;
        document.getElementById('compostReady').innerText = compostReady.toFixed(2);
    } else {
        alert("Please enter a valid waste amount!");
    }
}