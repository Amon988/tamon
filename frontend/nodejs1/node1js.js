fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json()).then(res => console.log(res))
 
fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json()).then(res => document.getElementById('title').innerHTML = res[0].title)
 