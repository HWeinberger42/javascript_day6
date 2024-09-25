let jsonFile = fetch("data.json")
    .then(response => response.json())
    .then(data => {
        for (employee of data) {
            document.getElementById("result").innerHTML += `
                <tr>
                    <td>${employee["Unique ID"]}</td>
                    <td>${employee["First Name"]}</td>
                    <td>${employee["Last Name"]}</td>
                    <td>${employee["Email address"]}</td>
                    <td>${employee["Job Title"]}</td>
                    <td>${employee["Salary"]}</td>
                </tr>
            `;      
        };
        console.log(data);
    });

console.log(jsonFile);

