const getPuzzle = (callback) => {


    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4 && e.target.status === 200){
            // console.log(e.target.status)
            const data = JSON.parse(e.target.responseText);
            callback(undefined, data.puzzle);
        } else if (e.target.readyState === 4) {
            callback('An error has taken place', undefined);
        }
    });

    request.open('GET', 'https://puzzle.mead.io/puzzle?wordCount=3');
    request.send();
}