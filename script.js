/* ========== Preloader ========== */
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    setTimeout(() => {
      preloader.style.display = 'none';
    }, 1500); // 1.5s rồi ẩn preloader
  });
  
  /* ========== Hiệu ứng rơi hoa (hoặc trái tim) ========== */
  const flowerContainer = document.getElementById('flower-container');
  const flowerImages = [
    'https://cdn-icons-png.flaticon.com/512/4160/4160263.png', // bông hoa
    'https://cdn-icons-png.flaticon.com/512/4160/4160267.png', // bông hoa
    'https://cdn-icons-png.flaticon.com/512/2107/2107952.png', // trái tim
  ];
  
  function createFlower() {
    const flower = document.createElement('img');
    flower.classList.add('flower');
    flower.src = flowerImages[Math.floor(Math.random() * flowerImages.length)];
  
    flower.style.left = Math.random() * 100 + 'vw';
    flower.style.top = '-10vh';
    // Tốc độ rơi & thời gian rơi
    const fallDuration = Math.random() * 10 + 5; // 5 - 15 giây
    flower.style.animation = `fall ${fallDuration}s linear`;
  
    flowerContainer.appendChild(flower);
  
    flower.addEventListener('animationend', () => {
      flower.remove();
    });
  }
  setInterval(createFlower, 700);
  
  /* ========== Countdown Timer ========== */
  const weddingDate = new Date("May 25, 2025 00:00:00").getTime();
  function updateCountdown() {
    const now = new Date().getTime();
    const distance = weddingDate - now;
  
    if (distance < 0) {
      document.getElementById("countdown-timer").innerHTML = "Đã đến ngày cưới!";
      return;
    }
  
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000*60*60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000*60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    document.getElementById("days").innerText = days < 10 ? '0' + days : days;
    document.getElementById("hours").innerText = hours < 10 ? '0' + hours : hours;
    document.getElementById("minutes").innerText = minutes < 10 ? '0' + minutes : minutes;
    document.getElementById("seconds").innerText = seconds < 10 ? '0' + seconds : seconds;
  }
  setInterval(updateCountdown, 1000);
  
  /* ========== Slideshow / Gallery ========== */
  let slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  function showSlides(n) {
    const slides = document.getElementsByClassName("slide");
    const dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active-dot", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active-dot";
  }
  
  /* ========== Nút sao chép link ========== */
  const copyBtn = document.getElementById('copy-btn');
  copyBtn.addEventListener('click', () => {
    const linkToCopy = window.location.href;
    navigator.clipboard.writeText(linkToCopy).then(() => {
      alert('Đã sao chép liên kết thiệp cưới!');
    }).catch(err => {
      console.error('Lỗi sao chép link: ', err);
    });
  });
  
  /* ========== Guestbook ========== */
  const guestbookForm = document.getElementById('guestbook-form');
  const guestbookMessages = document.getElementById('guestbook-messages');
  
  guestbookForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('guest-name').value.trim();
    const message = document.getElementById('guest-message').value.trim();
  
    if (name && message) {
      const msgDiv = document.createElement('div');
      msgDiv.classList.add('message');
      msgDiv.innerHTML = `
        <p><strong>${name}</strong></p>
        <p>${message}</p>
      `;
      guestbookMessages.prepend(msgDiv);
  
      // Xoá dữ liệu form
      guestbookForm.reset();
    }
  });
  
  /* ========== Scroll Animation với IntersectionObserver ========== */
  const sections = document.querySelectorAll('[data-animate]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, {
    threshold: 0.1
  });
  sections.forEach(section => {
    observer.observe(section);
  });
  
  /* ========== Back to Top Button ========== */
  const backToTopBtn = document.getElementById('back-to-top');
  window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > 300) {
      backToTopBtn.style.display = "block";
    } else {
      backToTopBtn.style.display = "none";
    }
  });
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  
  /* ========== FAB - Floating Action Buttons ========== */
  const fabMain = document.getElementById('fab-main');
  const fabMenu = document.getElementById('fab-menu');
  let fabOpen = false;
  
  fabMain.addEventListener('click', () => {
    fabOpen = !fabOpen;
    fabMenu.style.display = fabOpen ? 'flex' : 'none';
  });
  
  // Các hàm xử lý khi bấm nút FAB
  function confirmAttendance() {
    alert("Cảm ơn bạn đã xác nhận tham gia!");
    // Hoặc mở popup, hoặc link đến form
  }
  function sendGift() {
    alert("Chức năng gửi tiền mừng đang được phát triển...");
    // Hoặc mở popup, link đến ví điện tử, v.v.
  }
    function viewLocation() {
        window.open("https://goo.gl/maps/xyz", "_blank"); // Thay bằng link Google Maps của địa điểm
    }  