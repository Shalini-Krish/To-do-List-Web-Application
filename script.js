// IEFE
(() => {
  // state variables
  let toDoListArray = [];
  // ui variables
  const form = document.querySelector(".form");
  const input = form.querySelector(".form__input");
  const sele = document.getElementById("prioritySelect");
  const ul = document.querySelector(".toDoList");

  // event listeners
  form.addEventListener('submit', e => {
    // prevent default behaviour - Page reload
    e.preventDefault();
    // give item a unique ID
    let itemId = String(Date.now());
    // get/assign input value
    let toDoItem = input.value;
    let sel = sele.value;
    //pass ID and item into functions
    addItemToDOM(itemId , toDoItem,sel);
    addItemToArray(itemId, toDoItem,sel);
    // clear the input box. (this is default behaviour but we got rid of that)
    input.value = '';
    sele.value= 'none';
  });

  ul.addEventListener('click', e => {
    let id = e.target.getAttribute('data-id')
    if (!id) return // user clicked in something else
    //pass id through to functions
    removeItemFromDOM(id);
    removeItemFromArray(id);
  });

  // functions
  function addItemToDOM(itemId, toDoItem,sel) {
    // create an li
    const li = document.createElement('li')
    li.setAttribute("data-id", itemId);
    // add toDoItem text to li
    li.innerText = toDoItem + "  -  "+sel;
    // add li to the DOM
    if(sel == "high")
      ul.appendChild(li).style.color="red";
    else if(sel == "low")
      ul.appendChild(li).style.color="blue";
    else if(sel == "medium")
      ul.appendChild(li).style.color="orange";
    else 
      ul.appendChild(li).style.color="black";
  }

  function addItemToArray(itemId, toDoItem,sel) {
    // add item to array as an object with an ID so we can find and delete it later
    toDoListArray.push({ itemId, toDoItem,sel});
    console.log(toDoListArray)
}


  function removeItemFromDOM(id) {
    // get the list item by data ID
    var li = document.querySelector('[data-id="' + id + '"]');
    // remove list item

    var alertMessage = "Choose an action:";
    // Adding buttons to the alert
    alertMessage += "\n1. Completed";
    alertMessage += "\n2. Delete";
    alertMessage += "\n3. Cancel";

    // Display the alert box
    var choice = prompt(alertMessage);

    // Check the user's choice
    switch(choice) {
      case "1":
        ul.appendChild(li).style.color="green";
        break;
      case "2":
        ul.removeChild(li);
        break;
      case "3":
        // Do nothing or any additional handling for cancel
        break;
    }
  }






    //ul.removeChild(li);}

  function removeItemFromArray(id) {
    // create a new toDoListArray with all li's that don't match the ID
    toDoListArray = toDoListArray.filter(item => item.itemId !== id);
    console.log(toDoListArray);
  }








})();