function getFlag(value) {
    const flagHost= `https://flagcdn.com/16x12/`
    let lang = value
    switch (lang) {
        case 'en': 
            lang = 'gb';
        break;
        case 'cs':
            lang = 'cz';
        break;
        case 'hi':
            lang = 'in';
        break;
        case 'ja':
            lang = 'jp'
        break;
        case 'da':
            lang = 'dk'
        break;
        case 'ko':
            lang = 'kr'
        break;
        case 'he':
            lang = 'il';
        break;
        case 'fa':
            lang = 'ir';
        break;
        case 'zh':
            lang = 'cn';
        break;              
    }
    const src = `${flagHost}${lang}.png`
    return src
}

export default getFlag