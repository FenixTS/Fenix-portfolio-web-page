document.getElementById("downloadButton").addEventListener("click", function() {
    // Create a Blob with your file content
    const fileContent = "Hello, this is the content of the file!";
    const blob = new Blob([fileContent], { type: "text/plain" });

    // Create a temporary URL for the Blob
    const url = URL.createObjectURL(blob);

    // Create a virtual anchor element for downloading
    const downloadLink = document.createElement("a");
    downloadLink.href = url;
    downloadLink.download = "example.txt"; // Set the desired filename
    document.body.appendChild(downloadLink);

    // Simulate a click on the anchor element to trigger the download
    downloadLink.click();

    // Clean up resources
    document.body.removeChild(downloadLink);
    URL.revokeObjectURL(url);
});

// not used in this project this is only for reference