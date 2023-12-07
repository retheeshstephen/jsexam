// home page 

// signin 

// function register(){

//   window.location="./signin.html"
// }

// // loginnew

// function loginNew(){

//   window.location="./login.html"
// }


// store details signup

function signUp(){

  userDetails={
      usn:un.value,
      usac:ua.value,
      usp:up.value
  }

  if (userDetails.usn=="" || userDetails.usac=="" || userDetails.up==""){
      alert ("Please fill all the fields");
  }else {
      if(userDetails.usac in localStorage){
          alert ("Already exist")
      }else{
          alert ("Registeration Completed")
          localStorage.setItem(userDetails.usac,JSON.stringify(userDetails));
          window.location="/login/index.html"
      }
  }
  
}

// login

function logIn(){

    
  accn=ac.value,
  pas=pa.value


if (accn in localStorage){
  userDetails=JSON.parse(localStorage.getItem(accn))
  if(pas==userDetails.usp){
      alert("Login Successful")
      window.location="/index.html"

  }else{
      alert ("Incorrect password")
  }
}else{
  alert ("Invalid Account number")
}
  



}






















document.addEventListener('DOMContentLoaded', function () {
    var taskInput = document.getElementById('taskInput');
    var taskList = document.getElementById('taskList');
    var addButton = document.getElementById('addButton');
  
    addButton.addEventListener('click', function () {
      var taskText = taskInput.value.trim();
  
      if (taskText !== '') {
        var listItem = document.createElement('li');
        listItem.className = 'list-group-item';
  
        var taskSpan = document.createElement('span');
        taskSpan.className = 'task-text';
        taskSpan.textContent = taskText;
  
        var editButton = createButton('Edit', 'btn-warning', function () {
          editTask(taskSpan);
        });
  
        var deleteButton = createButton('Delete', 'btn-danger', function () {
          taskList.removeChild(listItem);
        });
  
        var taskButtons = document.createElement('div');
        taskButtons.className = 'task-buttons';
  
        taskButtons.appendChild(editButton);
  
        // Add a 5px gap between buttons
        var gap = document.createElement('span');
        gap.style.width = '5px';
        taskButtons.appendChild(gap);
  
        taskButtons.appendChild(deleteButton);
  
        listItem.appendChild(taskSpan);
        listItem.appendChild(taskButtons);
  
        taskList.appendChild(listItem);
  
        taskInput.value = '';
      }
    });
  
    function editTask(taskSpan) {
      var newText = prompt('Edit task:', taskSpan.textContent);
      if (newText !== null) {
        taskSpan.textContent = newText.trim();
      }
    }
  
    function createButton(text, btnClass, clickHandler) {
      var button = document.createElement('button');
      button.className = 'btn btn-sm ' + btnClass;
      button.textContent = text;
      button.addEventListener('click', clickHandler);
      return button;
    }
  });
  
  
  
  
  
  
  
  
  