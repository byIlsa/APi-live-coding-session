
// Fetch returns a promise which is kind of a placeholder for the response we are going to get

// fetch('https://jsonplaceholder.typicode.com/posts/2')
//     .then(response => response.json())
//     .then(json => console.log(json))

    document.getElementById('getData').addEventListener('click', getData);

    function getData(){
        fetch('https://jsonplaceholder.typicode.com/posts/9')
                .then(response => response.json())
                .then(json => console.log(json))
    }