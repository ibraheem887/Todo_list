
function addTask()
{
    let textbox = document.getElementById("taskInput");
    let input = textbox.value;

    if (input == '') {
        alert('Please enter a task.');
        return;
    }
    
    let list = document.getElementById("todolist");
    let listelement = document.createElement('li');
    
    listelement.textContent = input ;
    
    
    let deleteicon = document.createElement("img");
    deleteicon.src = "images.png" ;
    deleteicon.alt = "Delete Icon";
    deleteicon.onclick = function()
    {
        list.removeChild(listelement);
    };
    listelement.appendChild(deleteicon);
    list.appendChild(listelement);
    textbox.value = '';
}