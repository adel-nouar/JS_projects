const getPuzzle = async (wordCount) => {
    const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${ wordCount }`);
    if (response.status === 200) {
        const data = await response.json();
        return data.puzzle;
    } else {
        throw new Error('Unable to fetch puzzle');
    }
}

const getCurrentCountry = async () => {
    const location = await getLocation();
    return getCountry(location.country);
}

const getCountry = async (countryCode) => {
    const response = await fetch('http://restcountries.eu/rest/v2/all');
    if (response.status === 200) {
        const data = await response.json();
        return data.find((country) => country.alpha2Code === countryCode);
    } else {
        throw new Error('Unable to fetch the Country.');
    }
}

const getLocation = async () => {
    // XXXXXXX should be the token given by ipinfo related to our account
    url = 'https://ipinfo.io/json?token=c0ab5cf2207300';
    const response = await fetch(url);
    if (response.status === 200) {
        return response.json();
    } else {
        throw new Error('Unable to fetch location');
    }
}
export {getPuzzle as default}