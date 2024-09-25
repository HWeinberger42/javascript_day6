let jsonFile = fetch("data.json")
    .then(response => response.json())
    .then(data => {
        for (book of data) {
            document.getElementById("result").innerHTML += `
                <tr ${book.read ? "style='background-color: green'" : "style='background-color: red'"} >
                    <td>${book["title"]}</td>
                    <td>${book["author"]}</td>
                    <td>${book["read"]}</td>
                    <td><img src="${book["cover"]}" style="height: 80px;" alt=""></td>
                </tr>
            `;      
        };
        console.log(data);
    });

console.log(jsonFile);

