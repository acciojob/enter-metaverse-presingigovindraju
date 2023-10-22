//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function () {
    const statusElement = document.getElementById("status");
    const enterButton = document.getElementById("enterBtn");

    enterButton.addEventListener("click", function () {
        statusElement.innerHTML = '<hi>Entered Metaverse</hi>';
    });
});
});