let div=document.getElementById('container');
let select=document.getElementById('todo');
let completedtodotitles=[];
let pendingtodotitles=[];
fetch('https://jsonplaceholder.typicode.com/todos')
.then(response => response.json())
.then(data => {
    for( var i=0;i<data.length;i++){
        if(data[i].complete==false){
            pendingtodotitles.push(data[i].title);
        }else{
            completedtodotitles.push(data[i].title);
        }
    }
})
select.addEventListener('change',function(){
    var value1=select.value;
    if(value1==="Completed"){
        div.innerHTML="";
        for(var i=0;i<completedtodotitles.length;i++){
            var tag1=document.createElement('li');
            tag1.innerHTML=completedtodotitles[i];
            div.appendChild(tag1);
        }
    }else if(value1==="Pending"){
        div.innerHTML="";
        for(var i=0;i<pendingtodotitles.length;i++){
            var tag1=document.createElement('li');
            tag1.innerHTML=pendingtodotitles[i];
            div.appendChild(tag1);
        }
    }
})