import React, { Fragment } from "react";
import {
	Container,
	UnorderedList,
	ListItem,
	Paragraph,
	AnchorLink,
} from "../Reusable";
import styled from "styled-components";

const FooterMain = styled.footer`
	padding: 2em 0;
	background: #e5e5e5;
`;

const FooterWrap = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 0 auto;
	@media (max-width: 767px) {
		flex-flow: column wrap;
		text-align: center;
	}
`;

const FooterContent = styled.div`
	padding: 3em;
	h4 {
		font-size: 1.8em;
		margin-bottom: 1em;
		color: ${({ theme }) => theme.primary};
	}

	p {
		margin-bottom: 0.5em;
	}
	@media (max-width: 767px) {
		padding: 2em;
	}
`;

const FooterCopyright = styled.div`
	padding: 1em 0;
	background: #c3c3c6;
`;

const FooterCopyrightWrap = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 0.5em 3em;
	@media (max-width: 767px) {
		flex-flow: column wrap;
		text-align: center;
	}
`;

const FooterCopyrightContent = styled.div``;

const Footer = () => {
	return (
		<Fragment>
			<FooterMain>
				<Container>
					<FooterWrap>
						<FooterContent>
							<h4>Travel Diaries</h4>
							<UnorderedList>
								<ListItem displayBlock>
									<AnchorLink href="/">Tour</AnchorLink>
								</ListItem>
								<ListItem displayBlock>
									<AnchorLink href="/">Blog</AnchorLink>
								</ListItem>
								<ListItem displayBlock>
									<AnchorLink href="/">Team</AnchorLink>
								</ListItem>
								<ListItem displayBlock>
									<AnchorLink href="/">Press</AnchorLink>
								</ListItem>
								<ListItem displayBlock>
									<AnchorLink href="/">Media</AnchorLink>
								</ListItem>
								<ListItem displayBlock>
									<AnchorLink href="/">Testimonials</AnchorLink>
								</ListItem>
							</UnorderedList>
						</FooterContent>
						<FooterContent>
							<h4>Diaries</h4>
							<UnorderedList>
								<ListItem displayBlock>
									<AnchorLink href="/">Public diaries</AnchorLink>
								</ListItem>
								<ListItem displayBlock>
									<AnchorLink href="/">Log in</AnchorLink>
								</ListItem>
								<ListItem displayBlock>
									<AnchorLink href="/">F.A.Q.</AnchorLink>
								</ListItem>
							</UnorderedList>
						</FooterContent>
						<FooterContent>
							<h4>Connect with us</h4>
							<Paragraph>Contact us</Paragraph>
							<AnchorLink href="mailto:">info@traveldiariesapp.com</AnchorLink>
						</FooterContent>
					</FooterWrap>
				</Container>
			</FooterMain>
			<FooterCopyright>
				<Container>
					<FooterCopyrightWrap>
						<FooterCopyrightContent>
							<Paragraph>© 2020 Travel Diaries</Paragraph>
						</FooterCopyrightContent>
						<FooterCopyrightContent>
							<AnchorLink>Give away a travel diary</AnchorLink>
						</FooterCopyrightContent>
					</FooterCopyrightWrap>
				</Container>
			</FooterCopyright>
		</Fragment>
	);
};

export default Footer;
