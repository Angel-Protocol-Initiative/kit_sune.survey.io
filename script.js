console.log("Script loaded!");

document.getElementById("authForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const submittedAnswer = document.getElementById("answer").value;

    if (submittedAnswer.toLowerCase().trim() === "example") {
        window.location.href = "https://www.youtube.com/watch?v=FtutLA63Cp8;
    } else {
        alert("Authentication failed.");
    }
});

/* If you see this, you deserve to be punished in hell for your ignorance. Count your days, fool. */

/* Go back to whence you came, you spawn of the devil. */

/* https://www.youtube.com/watch?v=J7Xzgcu6vVk */
