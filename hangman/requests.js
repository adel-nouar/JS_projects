const getPuzzle = async (wordCount) => {
    const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${ wordCount }`);
    if (response.status === 200) {
        const data = await response.json();
        return data.puzzle;
    } else {
        throw new Error('Unable to fetch puzzle');
    }
}

const getCountry = (countryCode) => {
    return fetch('http://restcountries.eu/rest/v2/all').then((response) => {
        if (response.status === 200) {
            return response.json();
        } else {
            throw new Error('Unable to fetch data.');
        }
    }).then((data) => {
        return data.find((country) => country.alpha2Code === countryCode);
    })
}

const getLocation = () => {
    // XXXXXXX should be the token given by ipinfo related to our account
    url = 'https://ipinfo.io/json?token=c0ab5cf2207300';
    return fetch(url).then((response) => {
        if (response.status === 200) {
            return response.json();
        } else {
            throw new Error('Unable to fetch location');
        }
    })
}