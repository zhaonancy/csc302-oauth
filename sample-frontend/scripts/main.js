const query = window.location.search;
const params = new URLSearchParams(query);
const token = params.get("token");

const verifyURL = "https://temp.url/verify?token=" + token;

/*
(async () => {
    let response = await fetch(verifyURL)
    response = await response.json()
})();
*/