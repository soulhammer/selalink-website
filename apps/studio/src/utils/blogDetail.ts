document.addEventListener('DOMContentLoaded', () => {
  // 1. 라이트박스(Lightbox) 모달 제어
  const trigger = document.getElementById('hero-image-trigger');
  const modal = document.getElementById('lightbox-modal');
  const closeBtn = document.getElementById('lightbox-close');
  const lightboxImg = document.getElementById('lightbox-image');

  if (trigger && modal && closeBtn) {
    trigger.addEventListener('click', () => {
      modal.classList.remove('hidden');
      modal.classList.add('flex');
      requestAnimationFrame(() => {
        modal.classList.remove('opacity-0');
        modal.classList.add('opacity-100');
      });
      document.body.style.overflow = 'hidden';
    });

    const closeModal = () => {
      modal.classList.remove('opacity-100');
      modal.classList.add('opacity-0');
      setTimeout(() => {
        modal.classList.remove('flex');
        modal.classList.add('hidden');
        document.body.style.overflow = '';
      }, 300);
    };

    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
      if (e.target === modal || e.target === lightboxImg) {
        closeModal();
      }
    });
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
      }
    });

    // 1-1. 본문 내 모든 삽입 이미지 클릭 시 라이트박스 연동
    const articleImages = document.querySelectorAll('article img');
    if (articleImages.length > 0 && lightboxImg) {
      articleImages.forEach((img) => {
        (img as HTMLElement).style.cursor = 'zoom-in';
        img.addEventListener('click', () => {
          const src = img.getAttribute('src');
          if (src) {
            lightboxImg.setAttribute('src', src);
            modal.classList.remove('hidden');
            modal.classList.add('flex');
            requestAnimationFrame(() => {
              modal.classList.remove('opacity-0');
              modal.classList.add('opacity-100');
            });
            document.body.style.overflow = 'hidden';
          }
        });
      });
    }
  }

  // 2. 읽기 진행 바 제어
  const progressBar = document.getElementById('reading-progress');
  if (progressBar) {
    window.addEventListener('scroll', () => {
      const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
      progressBar.style.width = scrolled + '%';
    });
  }

  // 3. TOC 활성화 하이라이팅 (Intersection Observer)
  const headings = Array.from(document.querySelectorAll('article h2, article h3'));
  const tocLinks = Array.from(document.querySelectorAll('aside nav a'));
  
  if (headings.length > 0 && tocLinks.length > 0) {
    const observerOptions = {
      root: null,
      rootMargin: '-100px 0px -70% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          tocLinks.forEach((link) => {
            const href = link.getAttribute('href')?.substring(1);
            if (href === id) {
              link.classList.add('text-slate-900', 'dark:text-white', 'font-extrabold');
              link.classList.remove('text-slate-505', 'dark:text-slate-400');
            } else {
              link.classList.remove('text-slate-900', 'dark:text-white', 'font-extrabold');
              link.classList.add('text-slate-505', 'dark:text-slate-400');
            }
          });
        }
      });
    }, observerOptions);

    headings.forEach((heading) => observer.observe(heading));
  }

  // 4. 맨 위로 가기(Back to Top) 버튼 제어
  const backToTopBtn = document.getElementById('back-to-top');
  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      const scrollPos = window.scrollY || document.documentElement.scrollTop;
      if (scrollPos > 400) {
        backToTopBtn.classList.remove('opacity-0', 'translate-y-4', 'pointer-events-none');
        backToTopBtn.classList.add('opacity-100', 'translate-y-0');
      } else {
        backToTopBtn.classList.remove('opacity-100', 'translate-y-0');
        backToTopBtn.classList.add('opacity-0', 'translate-y-4', 'pointer-events-none');
      }
    });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
});


