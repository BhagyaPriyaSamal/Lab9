# LAB 9 – Employee Information Using XML

## Aim
Design a web page to read data from an XML file and display the employee information in tabular format.

## Technologies Used
- HTML – creates the web page structure.
- CSS – styles the page and employee table.
- JavaScript – fetches and reads the XML data, parses it, and displays the records.
- XML – stores the employee information.

## Project Files
- `index.html` – main web page.
- `style.css` – page styling.
- `script.js` – XML loading, parsing, display, and search.
- `employees.xml` – sample employee records.

## How to Run
1. Download or clone this repository.
2. Open the project folder in Visual Studio Code.
3. Install the **Live Server** extension if it is not already installed.
4. Right-click `index.html` and select **Open with Live Server**.
5. The browser will display the employee records read from `employees.xml`.

> Note: Run the project through a local web server (such as VS Code Live Server). Browsers generally block JavaScript Fetch API requests to local XML files opened directly with the `file://` protocol.

## Output
The web page displays employee ID, name, department, designation, email, and salary in a table. The search field filters the displayed employee records.

## Result
The web page successfully reads employee information from an XML file and displays the data in tabular format.
