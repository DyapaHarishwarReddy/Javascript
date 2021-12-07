let input = document.getElementsByName('todo_input')[0];
let button = document.getElementsByTagName('button')[0];
let div = document.getElementsByClassName('todos')[0];
var count = 0
button.addEventListener('click', function () {
    var paragraph = document.createElement('p');
    paragraph.setAttribute("key", count);
    paragraph.innerHTML =input.value;
    div.appendChild(paragraph);
    input.value = "";
    paragraph.addEventListener('click', function () {
        div.removeChild(paragraph);
    })
    count +=1
})
