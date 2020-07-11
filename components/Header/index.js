import React, { Fragment, useState } from "react";
import { Container } from "../Reusable";
import { links } from "../../lib/data.json";
import Link from "next/link";
import styled from "styled-components";
import _ from "lodash";

const Nav = styled.nav`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	background: #ffffff;
	z-index: 99;
	border-bottom: 0.1em solid #ededed;
	-webkit-box-shadow: 10px 10px 24px -11px #ededed;
	box-shadow: 10px 10px 24px -11px #ededed;
	@media (max-width: 992px) {
		padding: 3em 3em;
	}

	@media (max-width: 767px) {
		position: static;
	}
`;

const NavWrap = styled.div`
	display: flex;
	justify-content: space-between;
	position: relative;
	@media (max-width: 992px) {
		display: none;
	}
`;

const LinksWrap = styled.ul`
	position: relative;
	padding: 0 10em;
	${({ isMobile }) =>
		isMobile && {
			borderBottom: "1px solid #ededed",
		}}
	&:first-of-type {
		padding: 0 0 0 12em;
		@media (max-width: 1199px) {
			padding: 0 0 0 8em;
		}

		@media (max-width: 992px) {
			padding: 0;
		}
	}

	&:last-of-type {
		padding: 0 8em 0 0;
		text-align: right;
		@media (max-width: 1199px) {
			padding: 0 6em 0 0;
		}

		@media (max-width: 992px) {
			padding: 0;
			text-align: left;
		}
	}
`;

const LogoImage = styled.img`
	width: 5em;
	height: 5em;
	position: absolute;
	left: 7em;
	top: 1.5em;

	@media (max-width: 1199px) {
		left: 4em;
	}

	@media (max-width: 767px) {
		left: 0;
	}

	${({ isMobile }) =>
		isMobile && {
			display: "none",
		}}
`;

const NavItem = styled.li`
	display: inline-block;
`;

const NavAnchor = styled.a`
	display: inline-block;
	color: #565656;
	margin: 0;
	padding: 1.2em 1.2em;
	font-size: 1.4em;
	text-transform: uppercase;
	&:hover {
		background: #bab8b0;
		color: #ffffff;
	}
	@media (max-width: 1199px) {
		font-size: 1.3em;
	}
	@media (max-width: 991px) {
		padding: 2em 1.3em;
	}
	${({ isMobile }) =>
		isMobile && {
			display: "block",
			padding: "2em 2.5em!important",
		}}
`;

const Hamburger = styled.div`
	position: absolute;
	right: 2em;
	top: 2.4em;
	width: 2.2em;
	height: 2em;
	cursor: pointer;
	display: block;
	@media (min-width: 992px) {
		display: none;
	}
`;

const HamburgerSpan = styled.span`
	display: block;
	position: absolute;
	height: 0.2em;
	width: 100%;
	background: grey;
	border-radius: 9px;
	opacity: 1;
	left: 0;
	-webkit-transform: rotate(0deg);
	-moz-transform: rotate(0deg);
	-o-transform: rotate(0deg);
	transform: rotate(0deg);
	-webkit-transition: 0.25s ease-in-out;
	-moz-transition: 0.25s ease-in-out;
	-o-transition: 0.25s ease-in-out;
	transition: 0.25s ease-in-out;
`;

const SpanOne = styled(HamburgerSpan)`
	${({ isToggled }) =>
		isToggled ? { top: "0.5em", transform: "rotate(135deg)" } : { top: 0 }}
`;

const SpanTwo = styled(HamburgerSpan)`
	${({ isToggled }) =>
		isToggled ? { opacity: 0, left: "-0.6em" } : { top: "0.6em" }}
`;

const SpanThree = styled(HamburgerSpan)`
	${({ isToggled }) =>
		isToggled
			? { top: "0.5em", transform: "rotate(-135deg)" }
			: { top: "1.2em" }}
`;

const NavMobile = styled.div`
	width: 26em;
	background: white;
	border-right: 1px solid #ededed;
	position: fixed;
	left: 0;
	top: 0;
	bottom: 0;
	transition: all 0.3s ease-in-out;
	z-index: 20;
	${({ isToggled }) =>
		isToggled
			? { transform: "translateX(0)" }
			: { transform: "translateX(-26em)" }}
`;

const Header = () => {
	const navLinks = [
		"Home",
		"Press",
		"Tour",
		"Blog",
		"Diaries",
		"FAQ",
		"Contact",
	];
	const navLinksCta = ["Language", "Sign Up", "Log In"];

	const [isToggled, setIsToggled] = useState(false);

	const toggleNavbar = () => {
		setIsToggled(!isToggled);
	};

	return (
		<Fragment>
			<Nav>
				<NavMobile isToggled={isToggled}>
					<LogoImage src={links.logo} isMobile />
					<LinksWrap isMobile>
						{_.map(navLinks, (link) => (
							<Link href="/" passHref key={link}>
								<NavAnchor isMobile>
									<NavItem>{link}</NavItem>
								</NavAnchor>
							</Link>
						))}
					</LinksWrap>
					<LinksWrap isMobile>
						{_.map(navLinksCta, (link) => (
							<Link href="/" passHref key={link}>
								<NavAnchor isMobile>
									<NavItem>{link}</NavItem>
								</NavAnchor>
							</Link>
						))}
					</LinksWrap>
				</NavMobile>
				<Hamburger onClick={toggleNavbar}>
					<HamburgerSpan as={SpanOne} isToggled={isToggled}></HamburgerSpan>
					<HamburgerSpan as={SpanTwo} isToggled={isToggled}></HamburgerSpan>
					<HamburgerSpan as={SpanThree} isToggled={isToggled}></HamburgerSpan>
				</Hamburger>
				<NavWrap>
					<LogoImage src={links.logo} />
					<LinksWrap>
						{_.map(navLinks, (link) => (
							<Link href="/" passHref key={link}>
								<NavAnchor>
									<NavItem>{link}</NavItem>
								</NavAnchor>
							</Link>
						))}
					</LinksWrap>
					<LinksWrap>
						{_.map(navLinksCta, (link) => (
							<Link href="/" passHref key={link}>
								<NavAnchor>
									<NavItem>{link}</NavItem>
								</NavAnchor>
							</Link>
						))}
					</LinksWrap>
				</NavWrap>
			</Nav>
		</Fragment>
	);
};

export default Header;
