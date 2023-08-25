document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.getElementById("submitButton");

    submitButton.addEventListener("click", function () {
        const nameInput = document.getElementById("nameInput").value;

        const userData = {
            name: nameInput
        };

        // Convert userData to JSON format
        const jsonData = JSON.stringify(userData);

        // You can now save jsonData to a file, send it to a server, or use it as needed.
        console.log(jsonData);
    });
});