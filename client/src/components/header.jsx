import React from 'react'
import profile from '../assets/img/profile1.png'
import { socialLinks, dwn, contacts, expe } from '../assets/constants'

const Header = () => {
	return (
		<div className="profile container">
			{/* ------=======theme button======----- */}

			<div className="profile__container grid">
				<div className="profile__data">
					<div className="profile__border">
						<div className="profile__perfil">
							<img src={profile} alt="profile pic" />
						</div>
					</div>
					<h2 className="profile__name">Praveen Kumar</h2>
					<h3 className="profile__profession">Web Developer</h3>
					{/* ----====== social media=====---- */}

					<ul className="profile__social">
						{socialLinks.map(({ link, icon }) => (
							<a href={link} target="_blank" className="profile__social-link" key={`link-${Math.random()}`}>
								<i className={icon}></i>
							</a>
						))}
					</ul>
				</div>
				<div className="profile__info grid">
					{expe.map(({ txt, num }) => (
						<div className="profile__info-group" key={txt}>
							<h3 className="profile__info-number">{num}</h3>
							<p className="profile__info-desc">{txt}</p>
						</div>
					))}
				</div>
			</div>
			<div className="profile__buttons">
				{/* insert cv */}

				<a download="" href="../assets/pdf/Praveen_Kumar_resume.pdf" className="button">
					Download CV <i className={dwn}></i>
				</a>
				{/* contact  info  */}

				<div className="profile__buttons-small">
					{contacts.map(({ ref, acc }) => (
						<a href={ref} className="button button__small button__gray" key={acc}>
							<i className={acc}></i>
						</a>
					))}
				</div>
			</div>
		</div>
	)
}

export default Header
