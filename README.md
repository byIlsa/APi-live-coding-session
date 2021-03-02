# Repo for the Live Call on API fetching, using promises and displaying data #

## Used for the Interactive Front End Channel for the Full Stack Development Course by ##

![CI logo](https://codeinstitute.s3.amazonaws.com/fullstack/ci_logo_small.png)

## Steps ##

1 Set up basic HTML, CSS, create JS file

2 Create a button, create function to console.log:

``` document.getElementById('getData').addEventListener('click', getData); ```

```javascript
function getData(){
    console.log(123);
    }
```

3 Create basic fetch function:

```javascript
fetch('https://jsonplaceholder.typicode.com/posts/2')
    .then(response => response.json())
    .then(json => console.log(json))
```

4 Make a function that fetches the data on click event:

```javascript
    function getData(){
        fetch('https://jsonplaceholder.typicode.com/posts/3')
                .then(response => response.json())
                .then(json => console.log(json))
    }
```

5.

6.
