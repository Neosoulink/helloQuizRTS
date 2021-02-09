import React from "react";

// Types
import { AnswerObject } from "../App";

// style
import { Wrapper, ButtonWrapper } from "../assets/ts/QuestionCard.style";

type Props = {
	question: string;
	answers: string[];
	callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
	userAnswer: AnswerObject | undefined;
	questionNbr: number;
	totalQuestion: number;
};

const QuestionCard: React.FC<Props> = ({
	question,
	answers,
	callback,
	userAnswer,
	questionNbr,
	totalQuestion,
}) => {
	return (
		<Wrapper className="question-card">
			<p>
				Questions : {questionNbr} / {totalQuestion}
			</p>
			<p dangerouslySetInnerHTML={{ __html: question }} />
			<div>
				{answers.map((answer, index) => (
					<ButtonWrapper
						key={index}
						correct={userAnswer?.correctAnswer == answer}
						userClicked={userAnswer?.answer === answer}
					>
						<button disabled={!!userAnswer} value={answer} onClick={callback}>
							<span dangerouslySetInnerHTML={{ __html: answer }} />
						</button>
					</ButtonWrapper>
				))}
			</div>
		</Wrapper>
	);
};

export default QuestionCard;
