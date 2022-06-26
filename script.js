// selecting the table div element
let myTable = document.querySelector('#table');
// on window load we will add some functionalities
window.addEventListener('load', () => {
    //we create a table element and we add an id attrabute to it
    let table = document.createElement('table');
    table.setAttribute('id','myTable')
    //we create a table row
    let headerRow = document.createElement('tr');
    // now we insert the title for the tible in the first row
    headers.forEach(headerText => {
        let header = document.createElement('th');
        let textNode = document.createTextNode(headerText);
        header.appendChild(textNode);
        headerRow.appendChild(header);
    });
    //we insert the row to the table
    table.appendChild(headerRow);
    // here we fill the table with the users data
    users.forEach(user => {
        let row = document.createElement('tr');
        console.log();

        Object.values(user).forEach(text => {
            // in this part we check for the status content and we add 
            //a difrent style if the data content if equal to (rejecté,validé,En validation)
            let style = "";
            switch (text) {

                case "Rejeté":
                    style = "rejected"
                    statusFiller(text, row, style);
                    break;
                case "Validé":
                    style = "valide"
                    statusFiller(text, row, style);
                    break;
                case "En validation":
                    style = "onvalidation"
                    statusFiller(text, row, style);
                    break;
                default:
                    let cell = document.createElement('td');
                    let textNode = document.createTextNode(text);
                    cell.appendChild(textNode);
                    row.appendChild(cell);
                }
            });
            //we add the row to the table
        table.appendChild(row);
    });
    //inserting the table to the page
    myTable.appendChild(table);
    //this function will add create a td and insert insert 
    //it with the trash icone at the end of each table row
    appendTrach()
});
// this fucntion is responsible for the style for the status button styles
const statusFiller = (value, row, style) => {
    let cell = document.createElement('td');
    let rejected = document.createElement('div');
    rejected.classList.add(style);
    let textNode = document.createTextNode(value);
    rejected.appendChild(textNode);
    cell.appendChild(rejected);
    row.appendChild(cell);
}

// modal logic

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


const appendTrach =()=> {
    let tableRow = document.querySelectorAll("table > tr");
    
    for (let index = 1; index < tableRow.length+1; index++) {
        let trashIcone = document.createElement('img')
        trashIcone.src = "./trach.png";
        trashIcone.style.width = "20px"
        trashIcone.style.width= "20px"
        let lastTd = document.createElement('td');
        lastTd.appendChild(trashIcone)
    
        tableRow[index].appendChild(lastTd);
        
    }
    console.log(tableRow);
}
