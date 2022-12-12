fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
        title: 'Title1',
        body: 'body1',
        usrId: 999,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
    .then((res) => res.json())
    .then((json) => console.log("First Post: ", JSON.stringify(json)));

fetch('https://jsonplaceholder.typicode.com/posts?userId=999')
    .then(response => response.json())
    .then(json => console.log("Fetch First post: ", json))

fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PUT',
    body: JSON.stringify({
        id: 1,
        title: 'NEW UPDATED TITLE',
        body: 'NEW UPDATED BODY',
        userId: 1000,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
    .then((res) => res.json())
    .then((json) => console.log("Update First Post: ", json));

fetch('https://jsonplaceholder.typicode.com/posts/2')
    .then(response => response.json())
    .then(json => console.log("posts/2: ", json))

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
        title: 'Title2',
        body: 'body2',
        usrId: 2,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
    .then((res) => res.json())
    .then((json) => console.log(" Post: ", json));

// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then((response) => response.json())
//     .then((json) => console.log("All Posts: ", json));


fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'DELETE',    
})
.then(console.log("Deleted First Post"));

// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then((response) => response.json())
//     .then((json) => console.log("First Post Deleted from List: ", json));