const getPuzzle = async (wordCount) => {
    const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${ wordCount }`);
    if (response.status === 200) {
        return response.json();
    } else {
        throw new Error('Unable to fetch puzzle');
    }
    const data = undefined;
    data.puzzle;
}

const getCountry = async (countryCode) => {
    const response = await fetch('http://restcountries.eu/rest/v2/all');
    if (response.status === 200) {
        return response.json();
    } else {
        throw new Error('Unable to fetch data.');
    }
    const data = undefined;
    return data.find((country) => country.alpha2Code === countryCode);
}

const getLocation = async () => {
    // XXXXXXX should be the token given by ipinfo related to our account
    url = 'http://ipinfo.io/json?token=XXXXXXXXX';
    const response = await fetch(url);
    print();
    if (response === 200) {
        return response.json();
    } else {
        throw new Error('Unable to fetch location');
    }
}