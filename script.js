function saveTasks() {
    localStorage.setItem("tasks", document.querySelector("ul").innerHTML);
}
document.querySelector("button").addEventListener("click",function(){
    
    let task=document.querySelector("input").value;
    if (task.trim() === "") return;
    let li=document.createElement("li");
    li.textContent=task;
    
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "delete";

    deleteBtn.addEventListener("click", function() {
        li.remove();
    });
    li.appendChild(deleteBtn);

    document.querySelector("ul").appendChild(li);
    document.querySelector("input").value="";
    saveTasks();
});
document.querySelector("input").addEventListener("keypress", function(event) {
    
    if (event.key === "Enter") {
        document.querySelector("button").click();
    }

});
document.querySelector("ul").innerHTML = localStorage.getItem("tasks") || "";
document.querySelector("ul").addEventListener("click", function(event) {
    
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("completed");
        saveTasks();
    }

});
document.getElementById("darkModeBtn").addEventListener("click", function() {
    document.body.classList.toggle("dark");
});