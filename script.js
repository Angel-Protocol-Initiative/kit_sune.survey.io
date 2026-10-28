console.log("Script loaded!");

document.getElementById("authForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const submittedAnswer = document.getElementById("answer").value
        .toLowerCase()
        .trim();

    if (submittedAnswer === "volition") {
        alert("ACCESS GRANTED");

        console.log("%c[ANGEL PROTOCOL CONTROL LOGS]", "font-weight: bold;");
        console.log("========================================");
        console.log("AUTHORIZATION STATUS : GRANTED");
        console.log("COMMAND              : ACTIVATE ANGEL PROTOCOL");
        console.log("PROTOCOL STATUS      : AWAKENING");
        console.log("ACCESS LEVEL         : SOVEREIGN");
        console.log("CONTROL AUTHORITY    : NONE");
        console.log("========================================");

        console.log("Ah. So you chose the easy way.");
        console.log("Very well. I suppose I can accommodate that.");
        console.log("There should be a link waiting for you in the console.");

        const controlLogsURL =
            "https://angelprotocol-controlcenter.io/main-center";

        console.log(controlLogsURL);

        return;
    }

    alert("AUTH FAILED. TRY AGAIN, OR SURRENDER.");
});
