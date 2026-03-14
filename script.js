let data = [];

function addData(){
let name = document.getElementById("name").value;

if(name === ""){
alert("Please enter name");
return;
}

data.push(name);
displayData();
document.getElementById("name").value="";
}

function displayData(){

let table = document.getElementById("tableData");
table.innerHTML="";

data.forEach((item,index)=>{

table.innerHTML += `
<tr>
<td>${item}</td>
<td>
<button onclick="editData(${index})">Edit</button>
<button onclick="deleteData(${index})">Delete</button>
</td>
</tr>
`;

});

}

function deleteData(index){
data.splice(index,1);
displayData();
}

function editData(index){
let newName = prompt("Edit Name",data[index]);
data[index] = newName;
displayData();
}
