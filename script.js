function toggleForm() {
    var form = document.getElementById("contactme");
    if (form.style.height === "0px" || form.style.height === "") {
        form.style.height = form.scrollHeight + "px";
    } else {
        form.style.height = "0px";
    }
}

