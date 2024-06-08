function openMayoClinicPage() {
  window.open("care-at-mayo-clinic.html", "_blank");
}

function openPage(pageName) {
  window.open(pageName, "_blank");
}

function openADiseaseListPage() {
  window.openPage("./a-alphabet-disease-list.html");
}

function openBDiseaseListPage() {
  openPage("b-alphabet-disease-list.html");
}

function openCDiseaseListPage() {
  openPage("c-alphabet-disease-list.html");
}

function openDDiseaseListPage() {
  openPage("d-alphabet-disease-list.html");
}

function openEDiseaseListPage() {
  openPage("e-alphabet-disease-list.html");
}

function openFDiseaseListPage() {
  openPage("f-alphabet-disease-list.html");
}

function openGDiseaseListPage() {
  openPage("g-alphabet-disease-list.html");
}

function openHDiseaseListPage() {
  openPage("h-alphabet-disease-list.html");
}

function openIDiseaseListPage() {
  openPage("i-alphabet-disease-list.html");
}

function openJDiseaseListPage() {
  openPage("j-alphabet-disease-list.html");
}

function openKDiseaseListPage() {
  openPage("k-alphabet-disease-list.html");
}

function openLDiseaseListPage() {
  openPage("l-alphabet-disease-list.html");
}

function openMDiseaseListPage() {
  openPage("m-alphabet-disease-list.html");
}

function openNDiseaseListPage() {
  openPage("n-alphabet-disease-list.html");
}

function openODiseaseListPage() {
  openPage("o-alphabet-disease-list.html");
}

function openPDiseaseListPage() {
  openPage("p-alphabet-disease-list.html");
}

function openQDiseaseListPage() {
  openPage("q-alphabet-disease-list.html");
}

function openRDiseaseListPage() {
  openPage("r-alphabet-disease-list.html");
}

function openSDiseaseListPage() {
  openPage("s-alphabet-disease-list.html");
}

function openTDiseaseListPage() {
  openPage("t-alphabet-disease-list.html");
}

function openUDiseaseListPage() {
  openPage("u-alphabet-disease-list.html");
}

function openVDiseaseListPage() {
  openPage("v-alphabet-disease-list.html");
}

function openWDiseaseListPage() {
  openPage("w-alphabet-disease-list.html");
}

function openXDiseaseListPage() {
  openPage("x-alphabet-disease-list.html");
}

function openYDiseaseListPage() {
  openPage("y-alphabet-disease-list.html");
}

function openZDiseaseListPage() {
  openPage("z-alphabet-disease-list.html");
}

function openNumberDiseaseListPage() {
  openPage("#-alphabet-disease-list.html");
}

function openRequestAppointmentPage() {
  openPage("request-appointment.html");
}

function openWhyChooseMayoClinicPage() {
  openPage("why-choose-mayo-clinic.html");
}

function openInternationalServicePage() {
  openPage("international-service.html");
}

function openDonatePage() {
  openPage("donate.html");
}

function getRandomAppointmentTime() {
  alert("Your appointment has been booked");
}

document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("disease-name");

  searchInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      searchCSV();
    }
  });
});

async function searchCSV() {
  const searchTerm = document.getElementById("disease-name").value.trim();

  try {
    // Fetch the CSV file
    const response = await fetch("diseases.csv");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const csvData = await response.text();

    const lines = csvData.split("\n");

    for (let line of lines) {
      const columns = line.split(",");

      // Assuming the first column contains the disease name
      if (columns[0].toLowerCase() === searchTerm.toLowerCase()) {
        alert(
          `Disease Name: ${columns[0]}\n` +
            `Definition: ${columns[1]}\n` +
            `Symptoms: ${columns[2]}`
        );
        return;
      }
    }

    alert("Disease not found");
  } catch (error) {
    console.error("Error fetching or processing CSV file:", error);
    alert("An error occurred while searching for the disease.");
  }
}
