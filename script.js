document.addEventListener("mousemove", (e) => {
    const cursor = document.querySelector(".cursor");
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
});
function toggleSearch() {
    const searchBox = document.getElementById("search-box");
    if (searchBox.style.display === "none" || searchBox.style.display === "") {
        searchBox.style.display = "inline-block"; // แสดงกล่องค้นหา
        searchBox.focus();
    } else {
        searchBox.style.display = "none"; // ซ่อนกล่องค้นหา
    }
}
document.addEventListener("DOMContentLoaded", function () {
    const toggleDarkMode = document.querySelector(".dark-mode-toggle");
    toggleDarkMode.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });
});