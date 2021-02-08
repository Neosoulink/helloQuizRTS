import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	:root{
		--success: #51ff5a;
		--danger: #ff3d3d;
	}

	*{
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: 'Quicksand', 'Arial Narrow', Arial, sans-serif;
	}

	.App {
		width: 100%;
		height: 100%;
	}

	.App>.bg-img,
	.App>.content {
		position: absolute;
		width: 100%;
		height: 100%;
	}

	.App>.bg-img {
		z-index: -1;
		color: antiquewhite;
		background-image: url(https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvZGV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80);
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
	}

	.App>.content {
		background-color: #28927855;
		display: flex;
		justify-content: center;
		align-items: center;
		color: aliceblue;
	}
`;

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	.score {
		font-size: 2rem;
		margin: 0;
	}

	> h1 {
		font-family: "Press Start 2P", cursive, Impact, Haettenschweiler,
			"Arial Narrow Bold", sans-serif;
		font-size: 50px;
		background-image: linear-gradient(180deg, #289278, #87f1ff);
		background-size: 100%;
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		-moz-background-clip: text;
		-moz-text-fill-color: transparent;
		filter: drop-shadow(4px 4px #0085a3);
	}

	.start,
	.next {
		cursor: pointer;
		text-decoration: none;
		margin: 20px 0;
		padding: 4px 10px;
		background-color: #289278;
		border: none;
		border-radius: 4px;
		box-shadow: 2px 2px #0085a3;
		color: #87f1ff;
		transition: all .1s ease-in-out;
	}

	.start:hover,
	.start:focus,
	.next:hover,
	.next:focus {
		color: aliceblue;
	}
`;
