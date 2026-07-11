// ==============================
// MaintainIQ - History Page
// ==============================

const historyTable = document.getElementById("historyTable");
const search = document.getElementById("search");

let reports = JSON.parse(localStorage.getItem("reports")) || [];

// ==============================
// Load Reports
// ==============================

function loadReports() {

    historyTable.innerHTML = "";

    reports.forEach((report, index) => {

        const priorityClass = report.priority.toLowerCase();

        const statusClass =
            report.status === "Completed"
            ? "completed"
            : "pending";

        historyTable.innerHTML += `

        <tr>

            <td>${index + 1}</td>

            <td>${report.name}</td>

            <td>${report.title}</td>

            <td>${report.description}</td>

            <td class="${priorityClass}">
                ${report.priority}
            </td>

            <td>
                <span class="${statusClass}">
                    ${report.status}
                </span>
            </td>

            <td>${report.date}</td>

            <td>

                <button
                class="completeBtn"
                onclick="completeReport(${index})">
                Complete
                </button>

                <button
                class="deleteBtn"
                onclick="deleteReport(${index})">
                Delete
                </button>

            </td>

        </tr>

        `;
    });

    updateSummary();

}

// ==============================
// Summary Cards
// ==============================

function updateSummary(){

    document.getElementById("totalReports").innerHTML =
    reports.length;

    document.getElementById("pendingReports").innerHTML =
    reports.filter(r => r.status === "Pending").length;

    document.getElementById("completedReports").innerHTML =
    reports.filter(r => r.status === "Completed").length;

}

// ==============================
// Complete Report
// ==============================

function completeReport(index){

    reports[index].status = "Completed";

    localStorage.setItem(
        "reports",
        JSON.stringify(reports)
    );

    loadReports();

}

// ==============================
// Delete Report
// ==============================

function deleteReport(index){

    if(confirm("Delete this report?")){

        reports.splice(index,1);

        localStorage.setItem(
            "reports",
            JSON.stringify(reports)
        );

        loadReports();

    }

}

// ==============================
// Search
// ==============================

search.addEventListener("keyup",function(){

    const value = search.value.toLowerCase();

    const rows =
    document.querySelectorAll("#historyTable tr");

    rows.forEach(row=>{

        row.style.display =
        row.innerText.toLowerCase().includes(value)
        ? ""
        : "none";

    });

});
let history = JSON.parse(localStorage.getItem("history")) || [];

history.push({
  asset: "Generator",
  technician: "Ali",
  status: "Completed",
  date: new Date().toLocaleString()
});

localStorage.setItem("history", JSON.stringify(history));
// ==============================
// First Load
// ==============================

loadReports();

console.log("MaintainIQ History Loaded Successfully");