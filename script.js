// LAB 9: Read employee information from an XML file and display it in a table.

const tableBody = document.getElementById("employeeTable");
const statusText = document.getElementById("status");
const recordCount = document.getElementById("recordCount");
const searchInput = document.getElementById("searchInput");

let employees = [];

// Load the XML file when the page opens.
async function loadEmployees() {
  try {
    const response = await fetch("employees.xml");

    if (!response.ok) {
      throw new Error("Could not load employees.xml (HTTP " + response.status + ").");
    }

    const xmlText = await response.text();
    const parser = new DOMParser();
    const xmlDocument = parser.parseFromString(xmlText, "application/xml");

    if (xmlDocument.querySelector("parsererror")) {
      throw new Error("The XML file contains invalid XML syntax.");
    }

    employees = Array.from(xmlDocument.getElementsByTagName("employee")).map((item) => ({
      id: getTagValue(item, "id"),
      name: getTagValue(item, "name"),
      department: getTagValue(item, "department"),
      designation: getTagValue(item, "designation"),
      email: getTagValue(item, "email"),
      salary: getTagValue(item, "salary")
    }));

    statusText.textContent = "Employee data loaded successfully.";
    searchInput.disabled = false;
    displayEmployees(employees);
  } catch (error) {
    statusText.textContent = error.message + " Run this page using VS Code Live Server.";
    statusText.classList.add("error");
    tableBody.innerHTML = '<tr><td colspan="6" class="empty error">Unable to read XML data. Please start a local web server and refresh.</td></tr>';
  }
}

// Read the text inside a given XML tag.
function getTagValue(parent, tagName) {
  const element = parent.getElementsByTagName(tagName)[0];
  return element ? element.textContent.trim() : "";
}

// Create table rows from the employee records.
function displayEmployees(records) {
  tableBody.innerHTML = "";

  if (records.length === 0) {
    tableBody.innerHTML = '<tr><td colspan="6" class="empty">No employee records found.</td></tr>';
  } else {
    records.forEach((employee) => {
      const row = document.createElement("tr");
      [employee.id, employee.name, employee.department, employee.designation, employee.email, employee.salary]
        .forEach((value) => {
          const cell = document.createElement("td");
          cell.textContent = value;
          row.appendChild(cell);
        });
      tableBody.appendChild(row);
    });
  }

  recordCount.textContent = records.length + (records.length === 1 ? " employee" : " employees");
}

// Filter records when the user types in the search box.
searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase().trim();
  const filteredEmployees = employees.filter((employee) =>
    Object.values(employee).some((value) => value.toLowerCase().includes(query))
  );
  displayEmployees(filteredEmployees);
});

loadEmployees();
