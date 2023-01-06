const getQuote = async (tag) => {
    let response = await fetch(`https://api.quotable.io/random?tags=${tag}`);
    response = await response.json();

    return response;
}

export default getQuote;