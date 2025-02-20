function App() {
	return (
		<div className="container">
			{/* <!-- header --> */}
			<section className="header">
				{/* <!-- Nav--> */}
				<div className="top">
					<div>
						<a href="#">
							<img src="src/assets/images/logo.png" alt="logo" />
						</a>
					</div>
					<nav>
						<a className="menu-link" href="#">
							La carte
						</a>
						<a className="menu-link" href="#">
							Les recettes
						</a>
						<a className="menu-link" href="#">
							Contact
						</a>
					</nav>
				</div>
			</section>
			{/* <!-- Contenu principal--> */}
			<section className="content">
				{/* <!-- produits vedettes --> */}
				<section className="featured">
					{/* <!-- text--> */}
					<div className="content">
						<h1 className="text-white">Le 2025</h1>
						<p className="price">9,90 €</p>
						<p>
							<a href="#" className="btn-lg">
								Commander
							</a>
						</p>
					</div>
					{/* <!-- image--> */}
					<div className="picture">
						<img src="src/assets/images/rapido-burger.png" alt="le 2025" />
					</div>
				</section>
				{/* <!-- Suggestions--> */}
				<section className="suggests">
					<h2>Nos suggestions</h2>
					<div className="content">
						<div>
							<img className="" src="src/assets/images/classic-burger.jpg" alt="Classic burger" />
							<h3>Classic burger</h3>
							<p>
								Le classic Burger est un délicieux sandwich à base d'un pain brioché moelleux et doré à point, qui renferme un
								savoureux steak haché de bœuf grillé à la perfection. Il est parfait pour les petites faims.
							</p>
							<span className="price h-3/3">6.90 €</span>
						</div>
						<div>
							<img src="src/assets/images/kingdom-burger.jpg" alt="kingdom burger" />
							<h3>Kingdom burger</h3>
							<p>
								Le Kingdom Burger est un délicieux sandwich à base d'un pain brioché moelleux et doré à point, qui renferme deux
								savoureux steaks hachés de bœuf grillé à la perfection. Il est parfait pour les gourmands !
							</p>
							<span className="price">7.90 €</span>
						</div>
						<div>
							<img src="src/assets/images/supreme-burger.jpg" alt="supreme burger" />
							<h3>Suprême burger</h3>
							<p className="flex-grow">
								Le Suprême Burger est un délicieux sandwich à base d'un pain brioché moelleux et doré à point, qui renferme un
								savoureux steak haché avec des rondelles de tomates et du cheddar.
							</p>
							<span className="price">9.90 €</span>
						</div>
					</div>
				</section>

				{/* <!-- NewsLetter--> */}
				<section className="newsletter">
					<h2>Inscrivez-vous à la KazaLetter</h2>
					{/* <!-- Contenu--> */}
					<div className="content">
						<form>
							<input type="text" placeholder="Nom" />
							<input type="email" placeholder="Email" />
							<button className="btn-md">S'inscrire</button>
						</form>
					</div>
				</section>

				{/* <!-- Témoignages--> */}
				<section className="testimony">
					<h2>Nos clients témoignent</h2>
					{/* <!-- Contenu--> */}
					<div className="content">
						<div>
							<img src="src/assets/images/avatar1.jpg" />
							<h3>Ella DEUTRANCHE</h3>
							<span>
								<i className="fa-solid fa-star text-secondary"></i>
								<i className="fa-solid fa-star text-secondary"></i>
								<i className="fa-solid fa-star text-secondary"></i>
								<i className="fa-solid fa-sta text-secondaryr"></i>
								<i className="fa-solid fa-star text-secondary"></i>
							</span>
							<div>
								J'ai essayé plusieurs restaurants de hamburgers dans la région, mais celui-ci est de loin le meilleur. Les hamburgers
								sont énormes et savoureux et le service est excellent. Je reviendrai à coup sûr !
							</div>
						</div>
						<div>
							<img src="src/assets/images/avatar2.jpg" />
							<h3>Lambert GOER</h3>
							<span>
								<i className="fa-solid fa-star text-secondary"></i>
								<i className="fa-solid fa-star text-secondary"></i>
								<i className="fa-solid fa-star text-secondary"></i>
								<i className="fa-solid fa-star"></i>
								<i className="fa-solid fa-star"></i>
							</span>
							<div>
								Je suis un végétarien difficile à satisfaire, mais j'ai été très content de voir que ce restaurant avait des options
								végétariennes pour moi. J'ai commandé un hamburger végétarien et il était délicieux !
							</div>
						</div>
						<div>
							<img src="src/assets/images/avatar3.jpg" />
							<h3>Eva DEVORET</h3>
							<span>
								<i className="fa-solid fa-star text-secondary"></i>
								<i className="fa-solid fa-star text-secondary"></i>
								<i className="fa-solid fa-star text-secondary"></i>
								<i className="fa-solid fa-star text-secondary"></i>
								<i className="fa-solid fa-star"></i>
							</span>
							<div>
								Je suis une habituée de ce restaurant depuis des années et je n'ai jamais été déçue. Les hamburgers sont toujours
								frais et délicieux et le personnel est sympathique et accueillant.
							</div>
						</div>

						<div>
							<img src="src/assets/images/avatar4.jpg" />
							<h3>Jean REVEU</h3>
							<span>
								<i className="fa-solid fa-star text-secondary"></i>
								<i className="fa-solid fa-star text-secondary"></i>
								<i className="fa-solid fa-star text-secondary"></i>
								<i className="fa-solid fa-star text-secondary"></i>
								<i className="fa-solid fa-star text-secondary"></i>
							</span>
							<div>
								J'ai été agréablement surpris par la qualité des hamburgers dans ce restaurant. Ils utilisent des ingrédients frais et
								les hamburgers sont cuits à la perfection. Je recommande fortement ce restaurant à tous les amateurs de hamburgers !
							</div>
						</div>
					</div>
				</section>
			</section>
			{/* <!-- footer --> */}
			<section className="footer">
				{/* <!-- liens--> */}
				<div className="content">
					<img src="src/assets/images/logo.png" alt="logo" />
					<div className="links">
						<h3>Informations</h3>
						<a href="#">Mentions légales</a>
						<a href="#">Conditions de vente</a>
						<a href="#">Contact</a>
					</div>
					<div>
						<h3>Suivez nous</h3>
						<p>
							<a href="#">
								<i className="fa-brands fa-instagram"></i>
							</a>
							<a href="#">
								<i className="fa-brands fa-facebook"></i>
							</a>
							<a href="#">
								<i className="fa-brands fa-x"></i>
							</a>
							<a href="#">
								<i className="fa-brands fa-youtube"></i>
							</a>
						</p>
					</div>
				</div>
				{/* <!-- Copyright--> */}
				<div className="copy">&copy; 2025 - Kazaburger - Tous droits réservés</div>
			</section>
		</div>
	);
}

export default App;
