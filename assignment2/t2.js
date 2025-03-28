async function createUser() {
    const url = "https://reqres.in/api/users";
    const userData = {
        name: "John Doe",
        job: "Software Engineer"
    };

    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
    });

    const data = await response.json();
    console.log("Response Data:", data);
}


createUser();
