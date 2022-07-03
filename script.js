async function getResponse() {
    const countryname = document.getElementById("usernameGet").value;

    if (!countryname) {
        alert("Please enter countryname.")
        return;
    }

    const response = await fetch('https://api.nationalize.io?name=arman',
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },

        })
        .then((data) => data.json())
        .then((data) => console.log("success:", data))
        .catch((er) => console.error("Error:", er));

    return response;

}

document.addEventListener("DOMContentLoaded", async () => {
    let users = [];

    try {
        users = await getResponse();
    } catch (er) {
        console.log("Error!");
        console.log(er);
    }
    console.log(users);
});

