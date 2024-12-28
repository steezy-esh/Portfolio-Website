const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});


const rightTransition = document.querySelectorAll('.right-transition');
rightTransition.forEach((el) => observer.observe(el));

const leftTransition = document.querySelectorAll('.left-transition');
leftTransition.forEach((el) => observer.observe(el));