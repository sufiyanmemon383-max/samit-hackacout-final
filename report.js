// ==========================
// Image Preview
// ==========================

const imageInput = document.getElementById("image");
const preview = document.getElementById("previewImage");

imageInput.addEventListener("change", function () {

    const file = this.files[0];

    if(file){

        const reader = new FileReader();

        reader.onload = function(e){

            preview.src = e.target.result;
            preview.style.display = "block";

        }

        reader.readAsDataURL(file);

    }

});


// ==========================
// AI Smart Suggestion
// ==========================

const title = document.getElementById("title");
const suggestion = document.getElementById("suggestion");

title.addEventListener("keyup", function(){

    const text = title.value.toLowerCase();

    if(text.includes("cool")){

        suggestion.innerHTML=
        "❄ Possible Cause : Dirty Filter <br><br> Recommended Technician : HVAC Team";

    }

    else if(text.includes("water")){

        suggestion.innerHTML=
        "💧 Possible Cause : Pipe Leakage <br><br> Recommended Technician : Plumbing Team";

    }

    else if(text.includes("light")){

        suggestion.innerHTML=
        "💡 Possible Cause : Electrical Fault <br><br> Recommended Technician : Electrical Team";

    }

    else if(text.includes("door")){

        suggestion.innerHTML=
        "🚪 Possible Cause : Door Lock Damage <br><br> Recommended Technician : Carpenter";

    }

    else if(text.includes("fan")){

        suggestion.innerHTML=
        "🌀 Possible Cause : Motor Problem <br><br> Recommended Technician : Mechanical Team";

    }

    else{

        suggestion.innerHTML=
        "🤖 Smart Recommendation will appear here.";

    }

});


// ==========================
// Save Report
// ==========================

const form = document.getElementById("reportForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    let reports =
    JSON.parse(localStorage.getItem("reports")) || [];

    reports.push({

        name:
        document.getElementById("name").value,

        title:
        document.getElementById("title").value,

        description:
        document.getElementById("description").value,

        priority:
        document.getElementById("priority").value,

        date:
        new Date().toLocaleString(),

        status:
        "Pending"

    });

    localStorage.setItem(

        "reports",

        JSON.stringify(reports)

    );

    alert("✅ Issue Report Submitted Successfully!");

    form.reset();

    preview.style.display="none";

    suggestion.innerHTML=
    "🤖 Smart Recommendation will appear here.";

});
const issue = {
  asset: "Generator",
  category: "Electrical",
  priority: "High",
  description: "Generator is overheating",
  status: "Reported",
  date: new Date().toLocaleDateString()
};

let issues = JSON.parse(localStorage.getItem("issues")) || [];
issues.push(issue);

localStorage.setItem("issues", JSON.stringify(issues));


// ==========================
// Console
// ==========================

console.log("MaintainIQ Report Page Loaded");