const toggleButton = document.querySelector('.toggle-menu');
const header = document.querySelector('.header');
toggleButton.addEventListener('click', function () {
	header.classList.toggle('toggle');
});

document.addEventListener('scroll', () => {
	const header = document.querySelector('.header');

	if (window.scrollY > 200) {
		header.classList.add('scrolled');
	} else {
		header.classList.remove('scrolled');
	}
});

/* ACCORDION */

const acc = document.querySelectorAll(".accordion__btn");

for (let i = 0; i < acc.length; i++) {
	acc[i].addEventListener("click", function () {
		this.classList.toggle("active");

		const panel = this.nextElementSibling;
		if (panel.style.display === "block") {
			panel.style.display = "none";
		} else {
			panel.style.display = "block";
		}
	});
}