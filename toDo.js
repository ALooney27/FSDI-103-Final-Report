let toDo = ["Wash Car", "Wash Laundry", "Fold Laundry"];
function register() {
  let newTask = document.getElementById("taskToDo").value; //getting the new student name
  toDo.push(newTask); //pushing the new student
  document.write(newTask);
}
