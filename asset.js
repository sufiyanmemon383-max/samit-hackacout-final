// ===============================
// MaintainIQ Asset Page
// ===============================

// Load Asset Data

const asset = JSON.parse(localStorage.getItem("asset")) || {

    name: "Air Conditioner",

    id: "AC-204",

    health: 98,

    repairs: 4,

    location: "2nd Floor - Block A",

    status: "Working"

};

// Show Asset Information

document.getElementById("assetName").innerHTML = asset.name;

document.getElementById("assetId").innerHTML = asset.id;


// ===============================
// Animated Repairs Counter
// ===============================

let repairCounter = 0;

const repairBox = document.getElementById("repairs");

const repairAnimation = setInterval(() => {

    repairCounter++;

    repairBox.innerHTML = repairCounter;

    if (repairCounter >= asset.repairs) {

        clearInterval(repairAnimation);

    }

}, 300);


// ===============================
// AI Recommendation
// ===============================

const aiText = document.getElementById("aiText");

if (asset.repairs >= 5) {

    aiText.innerHTML = `
    ⚠️ This asset has required frequent repairs.

    <br><br>

    Recommendation:
    Replace the asset within the next maintenance cycle.

    `;

}

else if (asset.health <= 70) {

    aiText.innerHTML = `
    ⚠️ Asset health is decreasing.

    <br><br>

    Recommendation:
    Schedule preventive maintenance immediately.

    `;

}

else {

    aiText.innerHTML = `
    ✅ Asset is operating normally.

    <br><br>

    Recommendation:
    Continue routine maintenance every 30 days.

    `;

}


// ===============================
// Maintenance Due Alert
// ===============================

setTimeout(() => {

    alert("📅 Reminder: Next preventive maintenance is due in 15 days.");

}, 1500);


// ===============================
// Status Color
// ===============================

const status = document.querySelector(".status");

if (asset.status === "Working") {

    status.style.background = "#22c55e";

}

else {

    status.style.background = "#ef4444";

    status.innerHTML = "Needs Repair";

}
const assets = [
  {
    id: 1,
    name: "Generator",
    location: "Block A",
    status: "Healthy"
  }
];

localStorage.setItem("assets", JSON.stringify(assets));


// ===============================
// Console
// ===============================

console.log("MaintainIQ Asset Page Loaded Successfully");