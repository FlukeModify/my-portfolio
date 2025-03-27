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

//โหมดมืด
document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;
    const darkModeToggle = document.getElementById("dark-mode-toggle"); // ปุ่มสลับโหมดมืด

    // ตรวจสอบค่าใน LocalStorage
    if (localStorage.getItem("theme") === "dark" || localStorage.getItem("theme") === null) {
        body.classList.add("dark-mode"); // เปิดโหมดมืดเป็นค่าเริ่มต้น
        localStorage.setItem("theme", "dark"); // บันทึกค่าเริ่มต้น
    }

    // เมื่อคลิกปุ่มให้สลับโหมด
    darkModeToggle.addEventListener("click", function () {
        if (body.classList.contains("dark-mode")) {
            body.classList.remove("dark-mode");
            localStorage.setItem("theme", "light"); // บันทึกโหมดสว่าง
        } else {
            body.classList.add("dark-mode");
            localStorage.setItem("theme", "dark"); // บันทึกโหมดมืด
        }
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