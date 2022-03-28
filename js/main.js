const testimonials = [
    {avatar: './images/image-tanya.jpg', person: 'Tanya Sinclair', position: 'UX Engineer', testimonial: "I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future."},
    {avatar: './images/image-john.jpg', person: 'John Tarkpor', position: 'Junior Front-end Developer', testimonial: "If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer."}
]

const avatar = document.querySelector('img.avatar');
const prev = document.querySelector('button.btn-prev');
const next = document.querySelector('button.btn-next');

const testimonialText = document.querySelector('p.card-body-testimonial-text');
const personName = document.querySelector('h1.card-body-name');
const position = document.querySelector('p.card-body-position');

let index = 0;

window.addEventListener('load', (e) => {
    changeTestimonial(index);
})

prev.addEventListener('click', (e) => {
    changeTestimonial(--index);
})

next.addEventListener('click', (e) => {
    changeTestimonial(++index);
})

function changeTestimonial(i) {
    if (i < 0)
        index = testimonials.length - 1;
    else if (i >= testimonials.length)
        index = 0;

    const testimonial = testimonials[index];
    avatar.src = testimonial.avatar;
    testimonialText.innerHTML = testimonial.testimonial
    personName.innerHTML = testimonial.person
    position.innerHTML = testimonial.position
}