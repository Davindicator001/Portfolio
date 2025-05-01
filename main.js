const observer = new IntersectionObserver((entries) => {
			entries.forEach(entry => {
				const el = entry.target;
				if (entry.isIntersecting) {
					el.classList.add(`animate-${el.dataset.animate}`);
				} else {
					el.classList.remove(`animate-${el.dataset.animate}`);
				}
			});
		}, { threshold: 0.1 });

		document.querySelectorAll('.fade-in-section').forEach(el => {
			observer.observe(el);
		});