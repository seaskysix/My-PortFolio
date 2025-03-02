$(document).ready(function(){
$('.slider').slick({
    arrows:false,
    dots:true,
    appendDots:'.slider-dots',
    dotsClass:'dots'
});


let hamberger = document.querySelector('.hamberger');
let times = document.querySelector('.times');
let mobileNav = document.querySelector('.mobile-nav');

hamberger.addEventListener('click', function(){
  mobileNav.classList.add('open');  
});

times.addEventListener('click', function(){
    mobileNav.classList.remove('open');  
});

});

// กดดูรูปภาพใหญ่
function openImageModal(imageSrc) {
  document.getElementById("imageModal").style.display = "flex";
  document.getElementById("modalImg").src = imageSrc;
}

// ปิด Modal รูปภาพ
function closeImageModal() {
  document.getElementById("imageModal").style.display = "none";
}

// กดดูข้อมูลโปรเจค
function openProjectModal() {
  document.getElementById("Project-Modal").style.display = "flex";
}

// ปิด Modal โปรเจค
function closeProjectModal() {
  document.getElementById("Project-Modal").style.display = "none";
}


// ปิด Modal เมื่อคลิกนอกพื้นที่
window.onclick = function(event) {
  // ตรวจสอบเมื่อคลิกนอก Modal รูปภาพหรือโปรเจค
  if (event.target == document.getElementById("imageModal")) {
    closeImageModal();
  }
  if (event.target == document.getElementById("Project-Modal")) {
    closeProjectModal();
  }
}


// ฟังก์ชั่นตรวจสอบการเลื่อนหน้า
window.onscroll = function() {
  // เช็คว่าผู้ใช้เลื่อนลงไปล่างสุดหรือไม่
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      document.getElementById("scrollToTopBtn").style.display = "block";  // แสดงปุ่ม
  } else {
      document.getElementById("scrollToTopBtn").style.display = "none";   // ซ่อนปุ่ม
  }
};

// ฟังก์ชั่นเลื่อนหน้าไปข้างบน
function scrollToTop() {
  window.scrollTo({
      top: 0,
      behavior: "smooth"  // ใช้การเลื่อนที่นุ่มนวล
  });
}
