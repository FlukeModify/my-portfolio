document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById("welcome-popup");

    // ตั้งเวลาให้ปิดเองหลัง 5 วินาที
    setTimeout(function () {
        popup.classList.add("hidden");
    }, 3000);

    // ปิด Popup เมื่อคลิกที่ใดก็ได้
    popup.addEventListener("click", function () {
        popup.classList.add("hidden");
    });
});
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
    const dropdownToggle = document.querySelector(".dropdown-toggle");
    const dropdown = dropdownToggle.parentElement;

    dropdownToggle.addEventListener("click", function (event) {
        event.preventDefault();
        dropdown.classList.toggle("active");
    });

    // ปิดเมนูเมื่อคลิกข้างนอก
    document.addEventListener("click", function (event) {
        if (!dropdown.contains(event.target)) {
            dropdown.classList.remove("active");
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const toggleDarkMode = document.querySelector(".dark-mode-toggle");
    toggleDarkMode.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });
});