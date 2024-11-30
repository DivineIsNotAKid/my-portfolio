// Simple form validation example
const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (!email || !message) {
        alert("Please fill out all fields!");
    } else {
        alert("Message sent successfully!");
        form.reset();
    }
});
<script>
    document.getElementById("year").textContent = new Date().getFullYear();
</script>