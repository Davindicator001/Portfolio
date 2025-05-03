tailwind.config = {
			theme: {
				extend: {
					animation: {
						fadeIn: "fadeIn 1s ease-out forwards",
						flyIn: "flyIn 1s ease-out forwards",
					},
					keyframes: {
						fadeIn: {
							from: { opacity: 0 },
							to: { opacity: 1 },
						},
						flyIn: {
							from: { opacity: 0, transform: "translateY(40px)" },
							to: { opacity: 1, transform: "translateY(0)" },
						},
					},
				},
			},
		};
		
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