window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};

const images = document.querySelectorAll('[data-src]');

const imgOptions = {
    threshold: 1,
    rootMargin: '0px 0px -150px 0px',

};

function preloadImg(img) {
    const src = img.getAttribute("data-src")
    if (!src) {
        return;
    } else {
        img.src = src;
    }
}

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            preloadImg(entry.target);
            imgObserver.unobserve(entry.target)
        }
    })
}, imgOptions);

images.forEach(image => {
    imgObserver.observe(image);
});