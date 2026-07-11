const form = document.getElementById("issueForm");
const tableBody = document.getElementById("tableBody");
const search = document.getElementById("search");
const darkBtn = document.getElementById("darkMode");

let issues = JSON.parse(localStorage.getItem("issues")) || [];

// Load Data
function loadIssues() {
    tableBody.innerHTML = "";

    issues.forEach((item, index) => {

        let color = "";

        if(item.priority === "Low") color = "#22c55e";
        if(item.priority === "Medium") color = "#f59e0b";
        if(item.priority === "High") color = "#ef4444";
        if(item.priority === "Critical") color = "#7c3aed";

        tableBody.innerHTML += `
        <tr>

            <td>${item.asset}</td>

            <td>${item.problem}</td>

            <td>
                <span style="
                background:${color};
                color:white;
                padding:6px 12px;
                border-radius:20px;
                ">
                ${item.priority}
                </span>
            </td>

            <td>${item.tech}</td>

            <td>${item.status}</td>

            <td>

                <button onclick="completeIssue(${index})">
                    Complete
                </button>

                <button onclick="deleteIssue(${index})">
                    Delete
                </button>

            </td>

        </tr>
        `;
    });

    localStorage.setItem("issues", JSON.stringify(issues));

    updateCards();
}

// Add Issue

form.addEventListener("submit", function(e){

    e.preventDefault();

    const asset = document.getElementById("asset").value;

    const problem = document.getElementById("problem").value;

    const priority = document.getElementById("priority").value;

    const tech = document.getElementById("technician").value;

    let suggestion = "";

    const p = problem.toLowerCase();

    if(p.includes("cool"))
        suggestion = "Check Air Filter & Gas Pressure";

    else if(p.includes("water"))
        suggestion = "Inspect Pipe Leakage";

    else if(p.includes("light"))
        suggestion = "Check Electrical Wiring";

    else if(p.includes("noise"))
        suggestion = "Inspect Motor Bearings";

    else
        suggestion = "General Inspection Recommended";

    alert("AI Suggestion:\n" + suggestion);

    issues.push({

        asset,

        problem,

        priority,

        tech,

        status:"Pending"

    });

    form.reset();

    loadIssues();

});

// Delete

function deleteIssue(index){

    if(confirm("Delete this issue?")){

        issues.splice(index,1);

        loadIssues();

    }

}

// Complete

function completeIssue(index){

    issues[index].status="Completed";

    loadIssues();

}

// Search

search.addEventListener("keyup",function(){

    let value = search.value.toLowerCase();

    let rows = document.querySelectorAll("tbody tr");

    rows.forEach(row=>{

        row.style.display =
        row.innerText.toLowerCase().includes(value)
        ? ""
        : "none";

    });

});

// Dashboard Cards

function updateCards(){

    document.getElementById("issueCount").innerHTML =
    issues.filter(i=>i.status==="Pending").length;

    document.getElementById("resolvedCount").innerHTML =
    issues.filter(i=>i.status==="Completed").length;

    document.getElementById("assetCount").innerHTML =
    issues.length;

}

// Dark Mode

darkBtn.addEventListener("click",()=>{

    document.body.classList.toggle("dark");

});
let issues = JSON.parse(localStorage.getItem("issues")) || [];

document.getElementById("issues").innerText = issues.length;

// First Load

loadIssues();