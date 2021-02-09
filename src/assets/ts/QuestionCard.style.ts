import styled from "styled-components";

export const Wrapper = styled.div`
	max-width: 1100px;
	background-color: aliceblue;
	border: 3px solid #0085a3;
	border-radius: 20px;
	padding: 20px;
	margin: 20px 0;
	box-shadow: 0 5px 10px rgba(0, 0, 0, 0.25);
	text-align: center;

	p {
		color: #289278;
		font-size: 1rem;
		margin-bottom: 10px;
	}
`;

type ButtonWrapperProps = {
	correct: boolean;
	userClicked: boolean;
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
	transform: all 0.3s ease;

	:hover {
		opacity: 0.8;
	}

	button {
		cursor: pointer;
		user-select: none;
		font-size: 0.8rem;
		width: 100%;
		height: 40px;
		margin: 5px 0;
		background: ${({ correct, userClicked }) =>
			correct
				? "linear-gradient(90deg, #56ffa4, #59bc86)"
				: !correct && userClicked
				? "linear-gradient(90deg, #ff5656, #c16868)"
				: "linear-gradient(90deg, #56ccff, #6eafb4)"};
		border: 3px solid aliceblue;
		border-radius: 10px;
		box-shadow: 1px 2px 0 rgba(0, 0, 0, 0.1);
		color: aliceblue;
		text-shadow: 0 1px 0 rgba(0, 0, 0, 0.25);
	}
`;
