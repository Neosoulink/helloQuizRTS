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
	font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
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
