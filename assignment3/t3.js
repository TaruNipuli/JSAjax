
async function fetchData(url, options) {
    try {
        const response = await fetch(url, options);

        // Check if the response is ok
        if (!response.ok) {
            throw new Error(`Error occured! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Response Data:", data);
    } catch (error) {
        console.error("Fetch Error:", error.message);
    }
}

// Non-existent GET request
fetchData("https://reqres.in/api/unknown/23", { method: "GET" });

// Non-existent POST request
fetchData("https://reqres.in/api/unknown/23", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: "Test", job: "Dev" })
});

// Non-existent PUT request
fetchData("https://reqres.in/api/unknown/23", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: "Updated Name", job: "Updated Job" })
});

// Non-existent DELETE request
fetchData("https://reqres.in/api/unknown/23", { method: "DELETE" });
