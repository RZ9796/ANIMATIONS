const frontend1 = [ 
    {name:"html" ,percent:100},
    {name:"css",percent:80},
    {name:"js",percent:70},
    {name:"React",percent:40}]
const backend1 = [ 
    {name:"Node Js" ,percent:75},
    {name:"Mongo Db",percent:45},
    {name:"Sql",percent:70},
    {name:"Express Js",percent:40}]


const fe=document.getElementById("frontend")
const be=document.getElementById("backend")


display(frontend1, fe)
display(backend1, be)


function display(arr, ele) {
    for (const item of arr) {
    ele.innerHTML += `<div class="progress" >
        <div class="bar" style="width:${item.percent}%" >${item.name}</div>
      </div><`;
}

}
