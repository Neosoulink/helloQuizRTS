import React, { useState, useEffect } from "react";
import { fetchQuizQuestion } from "./API";

// Types
import { Difficulty, QuestionState } from "./API";

// Components
import QuestionCard from "./components/QuestionCard";

import { GlobalStyle } from "./assets/ts/App.style";

const TOTAL_QUESTION = 10;

export type AnswerObject = {
	question: string;
	answer: string;
	correct: boolean;
	correctAnswer: string;
};

function App() {
	const [loading, setLoading] = useState<boolean>(false),
		[questions, setQuestions] = useState<QuestionState[]>([]),
		[number, setNumber] = useState<number>(0),
		[userAnswers, setUserAnswers] = useState<AnswerObject[]>([]),
		[score, setScore] = useState<number>(0),
		[gameOver, setGameOver] = useState<boolean>(true);

	const startTrivia = async () => {
		setLoading(true);
		setGameOver(false);

		const newQuestions = await fetchQuizQuestion(
			TOTAL_QUESTION,
			Difficulty.EASY
		);

		setQuestions(newQuestions);
		setScore(0);
		setUserAnswers([]);
		setNumber(0);
		setLoading(false);
	};

	const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
		if (!gameOver) {
			// user answer
			const answer = e.currentTarget.value;

			const correct = questions[number].correct_answer === answer;

			if (correct) setScore((prev) => prev + 1);

			const answerObject = {
				question: questions[number].question,
				answer,
				correct,
				correctAnswer: questions[number].correct_answer,
			};

			setUserAnswers((prev) => [...prev, answerObject]);
		}
	};

	const nextQuestion = () => {
		const nextQuestion = number + 1;

		if (nextQuestion === TOTAL_QUESTION) {
			setGameOver(true);
		} else {
			setNumber(nextQuestion);
		}
	};

	useEffect(() => {
		console.log("user answers", userAnswers);
		return () => {};
	}, [userAnswers]);

	return (
		<>
			<GlobalStyle />
			<div className="App">
				<div className="bg-img"></div>
				<div className="content">
					<div>
						<h1>Hello Quiz</h1>
						{gameOver || userAnswers.length === TOTAL_QUESTION ? (
							<button className="start" onClick={startTrivia}>
								Start
							</button>
						) : null}
						{!gameOver && <p className="score">Score: {score}</p>}
						{loading && <p>loading Questions ...</p>}

						{!loading && !gameOver && (
							<QuestionCard
								questionNbr={number + 1}
								totalQuestion={TOTAL_QUESTION}
								question={questions[number].question}
								answers={questions[number].answers}
								userAnswer={userAnswers ? userAnswers[number] : undefined}
								callback={checkAnswer}
							/>
						)}
						{!loading &&
							!gameOver &&
							userAnswers.length === number + 1 &&
							number < TOTAL_QUESTION - 1 && (
								<button className="next" onClick={nextQuestion}>
									Next Question
								</button>
							)}
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
