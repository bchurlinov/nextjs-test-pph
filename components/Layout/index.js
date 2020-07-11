import React, { Fragment } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import Header from "../Header";
import Footer from "../Footer";

const GlobalStyle = createGlobalStyle`
	* {
		padding: 0;
		margin: 0;
		min-height: 0;
		min-width: 0;
		box-sizing: border-box;
	}

	html {
		scroll-behavior: smooth;
		margin: 0;
		padding: 0 ;
	}

	body {
		font-family: Helvetica, Arial, sans-serif;
		font-size: 10px;
		line-height: 1;
		margin: 0;
		padding: 0 ;
		color: #565656;
	}

	::-webkit-scrollbar {
		width: 10px;
	}

	::-webkit-scrollbar-track {
		box-shadow: inset 0 0 10px #e0e0e0;
	}

	::-webkit-scrollbar-thumb {
		background: #d7d7d7;
	}

	::-webkit-scrollbar-thumb:hover {
		background: #939393;
	}
`;

const theme = {
	primary: "#98cbd3",
};

const Layout = ({ children }) => {
	return (
		<Fragment>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<Header />
				{children}
				<Footer />
			</ThemeProvider>
		</Fragment>
	);
};

export default Layout;
