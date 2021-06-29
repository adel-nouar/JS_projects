const getPuzzle = (wordCount) => {
    return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((response) =>{
        if (response.status === 200){
            return response.json();
        } else{
            throw new Error('Unable to fetch puzzle');
        }
    }).then((data) => {
        data.puzzle;
    })
}

const getCountry = (countryCode) => {
    return fetch('http://restcountries.eu/rest/v2/all').then((response) => {
        if (response.status === 200){
            return response.json();
        }else {
            throw new Error('Unable to fetch data.');
        }
    }).then((data) => data.find((country) => country.alpha2Code === countryCode));
}



// const getCountryOld = (countryCode) => new Promise((resolve, reject) => {
//     const restCountries = 'http://restcountries.eu/rest/v2/all';

//     const countryRequest = new XMLHttpRequest();

//     countryRequest.addEventListener('readystatechange', (e) => {
//         if(e.target.readyState === 4 && e.target.status === 200) {
//             const data = JSON.parse(e.target.responseText);
//             const country = data.find((country) => country.alpha2Code === countryCode);
//             resolve(country);
//         } else if (e.target.readyState === 4) {
//             reject('Unable to fetch data.');
//         }
//     })

//     countryRequest.open('GET', restCountries);
//     countryRequest.send()
// })