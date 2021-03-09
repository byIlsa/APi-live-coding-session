
// Fetch returns a promise which is kind of a placeholder for the response we are going to get

// fetch('https://rickandmortyapi.com/api')
//     .then(response => response.json())
//     .then(json => console.log(json))

    document.getElementById('getData').addEventListener('click', getData);

    // function getData(){
    //     fetch('https://rickandmortyapi.com/api/character/?name=rick&status=alive')
    //             .then(response => response.json())
    //             .then(json => console.log(json))
    // }

        function getData(){
        fetch('https://rickandmortyapi.com/api/character')
                .then((response) => response.json(data))
                .then((data) => {
                    data.forEach(character => console.log(character)); 
                    // {
                    //     data += '<div> <h3> ${character}</h3></div>';
                    // // });
                    // document.getElementById('result').innerHTML=result
                })
    }