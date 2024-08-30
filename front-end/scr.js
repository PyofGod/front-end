// ใช้ JavaScript เพื่อจัดการการเลื่อนอ่อน ๆ ไปยังส่วน "เกี่ยวกับฉัน" เมื่อคลิกปุ่ม "ดูประวัติ"
VANTA.CLOUDS({
    el: "#page-header",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00
})

document.querySelector('.btn').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('.btn1').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#soft').scrollIntoView({ behavior: 'smooth' });
});



window.addEventListener('scroll', function() {
    const topBar = document.getElementById('top-bar');
    if (window.scrollY > 50) {
        topBar.classList.add('transparent');
    } else {
        topBar.classList.remove('transparent');
    }
});