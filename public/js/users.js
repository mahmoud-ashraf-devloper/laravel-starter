var modal = document.getElementById('updateUserModal')
var editForm = document.getElementById('editForm')
// var editBtn = document.get

const updateUser = () => {
    if (document.getElementById('hiddenId') == null) {
        var idInput = document.createElement("input");
        idInput.type = "hidden";
        idInput.id = 'hiddenId';
        idInput.value = id;
        idInput.name = '_id';
        editForm.appendChild(idInput);
        
    } else{
        document.getElementById('hiddenId').value = id;
    }
}

let editBtn = document.getElementsByClassName('.editBtn');



console.log(editBtn);
