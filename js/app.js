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

// ฟังก์ชันเปิด Modal
function openProjectModal(event) {
  event.preventDefault(); // หยุดการทำงานของลิงก์ เพื่อไม่ให้หน้าเว็บขยับ
  document.getElementById("Project-Modal").classList.add("show"); // แสดง Modal
  document.body.classList.add("modal-open"); // ป้องกันการเลื่อนหน้า
}


// ฟังก์ชันปิด Modal
function closeProjectModal() {
  document.getElementById("Project-Modal").classList.remove("show"); // ลบ class .show
  document.body.classList.remove("modal-open"); // เปิดการเลื่อนหน้าอีกครั้ง
}

// ปิด Modal เมื่อคลิกข้างนอก
window.onclick = function(event) {
  let modal = document.getElementById("Project-Modal");
  if (event.target === modal) {
      modal.classList.remove("show"); // ลบ class .show เมื่อคลิกข้างนอก
      document.body.classList.remove("modal-open"); // เปิดการเลื่อนหน้าอีกครั้ง
  }
};




// ฟังก์ชั่นตรวจสอบการเลื่อนหน้า
window.onscroll = function() {
  // เช็คว่าผู้ใช้เลื่อนลงไปล่างสุดหรือไม่
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      document.getElementById("scrollToTopBtn").style.display = "block";  // แสดงปุ่ม
  } else {
      document.getElementById("scrollToTopBtn").style.display = "none";   // ซ่อนปุ่ม
  }
};

