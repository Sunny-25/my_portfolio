import React, { useEffect, useState } from 'react'
import { projects, skillsList } from '../assets/constants'

const FilterTabs = () => {
	const [toggle, setToggle] = useState(false)

	return (
		<div className="main">
			<section className="filters container">
				{/*---======= FILTERS TABS =======---  */}
				<ul className="filters__content">
					<button className="filters__button" onClick={() => setToggle(false)}>
						Projects
					</button>
					<button className="filters__button" onClick={() => setToggle(true)}>
						Skills
					</button>
				</ul>

				<div className="filters__sections">
					{/*---======= PROJECTS =======---  */}

					<div id="projects" className={`projects__content grid ${toggle && 'none'}`}>
						{projects.map(({ title, subTitle, img, link }) => (
							<article className="projects__card" key={`pro-${Math.random() * 1000}`}>
								<img src={img} alt="projects" className="projects__img" />

								<div className="projects__modal">
									<div>
										<span className="projects__subtitle">{subTitle}</span>
										<h3 className="projects__title">{title}</h3>
										<a href={link} className="projects__button button button__small">
											<i className="ri-link"></i>
										</a>
									</div>
								</div>
							</article>
						))}
					</div>

					{/*---======= SKILLS =======---  */}

					<div id="skills" className={`skills__content grid ${!toggle && 'none'}`}>
						{skillsList.map(({ type, skills }) => (
							<div className="skills__area" key={`skill-${Math.random()}`}>
								<h3 className="skills__title">{type} Developer</h3>

								{skills.map(({ name, level }) => (
									<div className="skills__box" key={Math.random()}>
										<div className="skills__group">
											<div className="skills__data">
												<i className="ri-checkbox-circle-line"></i>
												<div>
													<h3 className="skills__name">{name}</h3>
													<span className="skills__level">{level}</span>
												</div>
											</div>
										</div>
									</div>
								))}
							</div>
						))}
					</div>
				</div>
			</section>
		</div>
	)
}

export default FilterTabs
