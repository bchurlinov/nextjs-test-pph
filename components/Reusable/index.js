import styled from "styled-components";

export const Container = styled.div`
	padding-right: 15px;
	padding-left: 15px;
	margin-right: auto;
	margin-left: auto;

	@media (min-width: 768px) {
		width: 750px;
	}

	@media (min-width: 992px) {
		width: 970px;
	}

	@media (min-width: 1200px) {
		width: 1170px;
	}
`;

export const Paragraph = styled.p`
	font-size: 1.6em;
	line-height: 1.2em;
	${({ align }) => {
		switch (align) {
			case "left":
				return "text-align: left";
		}
	}}
`;

export const UnorderedList = styled.ul`
	list-style: none;
	margin: 0;
	padding: 0;
`;

export const ListItem = styled.li`
	display: ${({ displayBlock }) =>
		displayBlock ? { display: "block" } : { display: "inline-block" }};
	padding-bottom: 0.5em;
	font-size: 1.6em;
	font-weight: 400;
	line-height: 1.4em;
	color: #565656;
`;

export const AnchorLink = styled.a`
	font-size: 16px;
	margin-bottom: 0.6em;
	font-weight: 400;
	color: #565656;
	text-decoration: none;
	&:hover {
		color: ${({ theme }) => theme.primary};
	}
`;

export const Icon = styled.i``;

export const Image = styled.img``;
