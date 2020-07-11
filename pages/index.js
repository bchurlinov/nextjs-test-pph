import Head from "next/head";
import styled from "styled-components";
import Layout from "../components/Layout";
import { data } from "../lib/BlogData.json";
import { links, categoryItems, socialLinks, tags } from "../lib/data.json";
import {
	Container,
	Image,
	AnchorLink,
	Paragraph,
	UnorderedList,
	ListItem,
	Icon,
} from "../components/Reusable";
import moment from "moment";
import _ from "lodash";

const Banner = styled.section`
	height: 75em;
	background: url(${({ img }) => img});
	background-size: cover;
	background-repeat: no-repeat;
	background-position: 50% 50%;
	-webkit-box-shadow: 10px 10px 24px -11px #ededed;
	box-shadow: 10px 10px 24px -11px #ededed;
	border-bottom: 0.1em solid #ededed;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 2em;
	@media (max-width: 767px) {
		height: 50em;
	}
`;

const BannerElement = styled.div`
	background: rgba(255, 255, 255, 0.8);
	text-align: center;
	padding: 5em;
	width: 65em;
	max-width: 65em;
	clip-path: polygon(
		51% 0,
		100% 0,
		100% 36%,
		100% 85%,
		95% 100%,
		5% 100%,
		0 85%,
		0% 35%,
		0 0
	);
`;

const BannerTitle = styled.h1`
	margin-bottom: 0;
	font-weight: 100;
	text-transform: uppercase;
	position: relative;
	font-size: 2.7em;
	line-height: 1.5em;
	&:after {
		content: "";
		width: 3em;
		height: 0.08em;
		background: #565656;
		position: absolute;
		bottom: -0.5em;
		left: 50%;
		transform: translateX(-50%);
	}
	@media (max-width: 767px) {
		font-size: 2em;
	}
`;

const BannerDate = styled.h5`
	margin: 2em 0 0;
	text-transform: uppercase;
	font-size: 1.6em;
	font-weight: 400;
	line-height: 1.3em;
`;

const SubBanner = styled.section`
	padding: 4em 0 0;
	text-align: center;
`;

const SubBannerTitle = styled.h2`
	font-size: 1.8em;
	line-height: 1.2em;
	font-style: italic;
	font-weight: 400;
`;

const SubBannerAuthor = styled.div`
	display: flex;
	padding: 3.5em 0;
	@media (max-width: 767px) {
		flex-flow: column wrap;
		text-align: center;
	}
`;

const SubBannerAuthorAvatar = styled.img`
	width: 12em;
	height: 12em;
	border-radius: 50%;
	object-fit: fill;
	-webkit-box-shadow: 10px 10px 24px -11px #ededed;
	box-shadow: 10px 10px 24px -11px #ededed;
	border: 0.1em solid #ededed;
	@media (max-width: 767px) {
		margin: 0 auto 1.5em;
	}
`;

const SubBannerAuthorInfo = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0 2.5em;
`;

const BlogContent = styled.div`
	span {
		line-height: 1.2em;
		display: inline-block;
		margin-bottom: 0.3em;
		@media (max-width: 767px) {
			font-size: 1.3em !important;
			text-align: justify;
		}
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: fill;
		margin-top: 3em;
	}

	b {
		display: block;
		font-size: 3em !important;
		margin-bottom: 0.5em !important;
		@media (max-width: 767px) {
			font-size: 2em !important;
		}
	}

	i {
		display: block;
		margin-top: 0.5em;
		font-size: 1.4em !important;
		@media (max-width: 767px) {
			font-size: 12px !important;
		}
	}
`;

const Social = styled.section`
	padding: 3em 0;
	width: 30em;
	max-width: 30em;
`;

const SocialWrap = styled.ul`
	display: flex;
	flex-flow: row wrap;
`;

const SocialIcon = styled.li`
	display: inline-block;
	padding-right: 0.5em;
	a {
		width: 3em;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		border: 0.01em solid #ededed;
		&:hover {
			color: ${({ theme }) => theme.primary};
			border: 0.01em solid ${({ theme }) => theme.primary};
		}
	}
`;

const TravelDiariesSection = styled.section`
	padding: 3em 0;
	text-align: center;
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	@media (max-width: 767px) {
		padding: 0;
		img {
			height: 25em;
		}
	}
`;

const TravelDiariesHeading = styled.h2`
	font-size: 2.5em;
	font-weight: 400;
	text-transform: uppercase;
	color: ${({ theme }) => theme.primary};
	width: 100%;
	border-bottom: 0.01em solid #565656;
	margin-bottom: 2em;
	span {
		background: #fff;
		position: relative;
		top: 0.6em;
		padding: 0 2em;
		@media (max-width: 767px) {
			padding: 0 0.7em;
		}
	}
`;

const CategoryTagsWrap = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 3em 0;
	h3 {
		color: ${({ theme }) => theme.primary};
		text-transform: uppercase;
		font-size: 2em;
		margin-bottom: 1.2em;
	}

	@media (max-width: 600px) {
		flex-flow: column wrap;
		justify-content: center;
	}
`;

const Category = styled.div`
	padding: 3em;
	ul {
		width: 25em;
		max-width: 25em;
		li {
			padding: 0.7em 0;
			border-top: 0.01em solid #565656;
			a {
				&:hover {
					color: ${({ theme }) => theme.primary};
				}
			}

			@media (max-width: 600px) {
				border: none;
			}
		}

		@media (max-width: 991px) {
			width: 15em;
			max-width: 15em;
		}

		@media (max-width: 600px) {
			width: 100%;
			max-width: 100%;
		}
	}
`;

const Tags = styled.div`
	padding: 3em;
	width: 50em;
	max-width: 50em;
	ul {
		li {
			display: inline-block;
			border: 0.01em solid #565656;
			padding: 0.3em;
			margin-right: 0.5em;
			margin-bottom: 0.5em;
			a {
				display: block;
				margin-bottom: 0;
				&:hover {
					color: ${({ theme }) => theme.primary};
				}
			}
		}
	}
	@media (max-width: 600px) {
		width: 100%;
		max-width: 100%;
	}
`;

const SocialFollow = styled.div`
	padding: 3em;
	h3 {
		color: ${({ theme }) => theme.primary};
		text-transform: uppercase;
		font-size: 2em;
		margin-bottom: 1.2em;
	}

	@media (max-width: 991px) {
		padding: 0em 3em 3em;
	}
`;

const Index = ({ data, links, categoryItems, tags }) => {
	return (
		<>
			<Head>
				<meta name="description" content={data.metaDescription} />
				<meta name="keywords" content={data.metaKeyword} />
				<link
					href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css"
					rel="stylesheet"
				></link>
				<title>{data.metaTitle}</title>
			</Head>
			<Layout>
				<Banner img={links.bannerBackground}>
					<BannerElement>
						<BannerTitle>{data.title}</BannerTitle>
						<BannerDate>{moment(data.date).format("MMMM DD, YYYY")}</BannerDate>
					</BannerElement>
				</Banner>
				<Container>
					<SubBanner>
						<SubBannerTitle>
							Cylcing along colourful canal houses, exploring remarkable parks
							and endless shopping: we take you to stylish Copenhagen.
						</SubBannerTitle>
						<SubBannerAuthor>
							<SubBannerAuthorAvatar src={links.authorAvatar} loading="lazy" />
							<SubBannerAuthorInfo>
								<Paragraph>Author: Paula van de Kamp</Paragraph>
							</SubBannerAuthorInfo>
							<SubBannerAuthorInfo>
								<Paragraph>Photographer: Paula van de Kemp</Paragraph>
							</SubBannerAuthorInfo>
						</SubBannerAuthor>
					</SubBanner>
					<BlogContent
						dangerouslySetInnerHTML={{ __html: data.text }}
					></BlogContent>
					<Social>
						<SocialWrap>
							{_.map(socialLinks, (link) => (
								<SocialIcon key={link}>
									<AnchorLink href="/">
										<Icon className={link}></Icon>
									</AnchorLink>
								</SocialIcon>
							))}
						</SocialWrap>
					</Social>
				</Container>
				<TravelDiariesSection>
					<Container>
						<TravelDiariesHeading>
							<span>About Travel Diaries</span>
						</TravelDiariesHeading>
					</Container>
					<Image src={links.diariesBackground} />
				</TravelDiariesSection>
				<Container>
					<CategoryTagsWrap>
						<Category>
							<h3>Category</h3>
							<UnorderedList>
								{_.map(categoryItems, (item) => (
									<ListItem key={item} displayBlock>
										<AnchorLink href="/">{item}</AnchorLink>
									</ListItem>
								))}
							</UnorderedList>
						</Category>
						<Tags>
							<h3>Tags</h3>
							<UnorderedList>
								{_.map(tags, (item) => (
									<ListItem key={item}>
										<AnchorLink href="/">{item}</AnchorLink>
									</ListItem>
								))}
							</UnorderedList>
						</Tags>
					</CategoryTagsWrap>
					<SocialFollow>
						<h3>Follow Us</h3>
						<SocialWrap>
							{_.map(socialLinks, (link) => (
								<SocialIcon key={link}>
									<AnchorLink href="/">
										<Icon className={link}></Icon>
									</AnchorLink>
								</SocialIcon>
							))}
						</SocialWrap>
					</SocialFollow>
				</Container>
			</Layout>
		</>
	);
};

export async function getStaticProps() {
	return {
		props: {
			data,
			links,
			categoryItems,
			socialLinks,
			tags,
		},
	};
}

export default Index;
