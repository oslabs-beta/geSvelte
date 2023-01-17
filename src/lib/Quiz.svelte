<script>
	// @ts-nocheck
	import { fade, blur, fly, slide, scale } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { onMount } from 'svelte';
	import Question from './Question.svelte';
	import Modal from './Modal.svelte';
	let quiz = getQuiz();
	let activeQuestion = 1;
	let score = 0;
	let isModalOpen = false;

	async function getQuiz() {
		const response = await fetch('https://opentdb.com/api.php?amount=10&category=21&type=multiple');
		const quiz = await response.json();
		return quiz;
	}

	function nextQuestion() {
		activeQuestion++;
		if (activeQuestion > 10) {
			resetQuiz();
			activeQuestion = 1;
		}
	}

	function closeModal() {
		isModalOpen = false;
	}

	function resetQuiz() {
		isModalOpen = false;
		score = 0;
		quiz = getQuiz();
		activeQuestion = 1;
	}

	function updateScore() {
		score++;
	}

	//This is a reactive statement, it will run every time score changes
	$: if (score > 0) {
		isModalOpen = true;
	}
</script>

<div>
	<button class="start-quiz" on:click|once={resetQuiz}>Reset</button>

	<h3 class="score">Your Score: {score}</h3>
	<div class="question-container">
		<h4>Question #{activeQuestion}</h4>

		{#await quiz}
			loading...
		{:then data}
			{#each data.results as question, index}
				{#if index === activeQuestion - 1}
					<div
						transition:scale={{
							delay: 500,
							duration: 500,
							opacity: 0,
							start: 0.25,
							easing: quintOut
						}}
					>
						<Question {updateScore} {nextQuestion} {question} />
					</div>
				{/if}
			{/each}
		{/await}
	</div>
</div>

<button class="next-question" on:click={nextQuestion}>Next Question</button>

{#if isModalOpen}
	<Modal>
		<div class="modal-inner" in:fly={{ x: 100 }} out:fly={{ x: -200 }}>
			<button on:click={closeModal} class="close">X</button>
			<h1>Congratulations!!</h1>
			<p>You Win!!!!</p>
			<button class="reset" on:click={resetQuiz}>Start Over</button>
		</div>
	</Modal>
{/if}

<style>
	h4 {
		font-size: 2.4rem;
		font-weight: 900;
		text-transform: uppercase;
		color: #3e4260;
		margin: 0;
		margin-bottom: 30px;
	}
	.score {
		padding: 2rem 2rem;
		background: #f9f9f9;
		border-radius: 10px;
		font-weight: 900;
		text-transform: uppercase;
		color: #3e4260;
		margin: 0;
		margin-bottom: 30px;
		border: 1px solid rgba(0, 0, 0, 0.12);
		box-shadow: 10px 10px 35px 0px rgba(0, 0, 0, 0.15);
		-webkit-box-shadow: 10px 10px 35px 0px rgba(0, 0, 0, 0.15);
		-moz-box-shadow: 10px 10px 35px 0px rgba(0, 0, 0, 0.15);
	}
	.question-container {
		position: relative;
		margin: 0 auto;
		padding: 40px 100px;
		border: 1px solid rgba(0, 0, 0, 0.12);
		border-radius: 10px;
		background: #f9f9f9;
		box-shadow: 10px 10px 35px 0px rgba(0, 0, 0, 0.15);
		-webkit-box-shadow: 10px 10px 35px 0px rgba(0, 0, 0, 0.15);
		-moz-box-shadow: 10px 10px 35px 0px rgba(0, 0, 0, 0.15);
		margin-bottom: 50px;
	}
	.start-quiz {
		height: 140px;
		width: 140px;
		border-radius: 50%;
		background-image: linear-gradient(
			94.3deg,
			rgba(26, 33, 64, 1) 10.9%,
			rgba(81, 84, 115, 1) 87.1%
		);
		box-shadow: 10px 10px 35px 0px rgba(0, 0, 0, 0.15);
		-webkit-box-shadow: 10px 10px 35px 0px rgba(0, 0, 0, 0.15);
		-moz-box-shadow: 10px 10px 35px 0px rgba(0, 0, 0, 0.15);
		color: #fff;
		text-align: center;
		font-size: 1.6rem;
		text-transform: uppercase;
		margin: 0;
		margin-bottom: 30px;
		padding: 0;
		border: 3px solid #f73c00;
	}
	.start-quiz:hover {
		background-image: linear-gradient(
			94.3deg,
			rgba(81, 84, 115, 1) 10.9%,
			rgba(26, 33, 64, 1) 87.1%
		);
	}
	.next-question {
		width: 300px;
		display: block;
		margin: 0 auto;
		margin-top: 30px;
	}
	button.reset {
		margin: 0;
		margin-top: 10rem;
		width: 250px;
		background: rgba(26, 33, 64, 1);
	}
	.modal-inner {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background: rgba(255, 255, 255, 0.9);
		pointer-events: all;
		padding: 2rem;
		width: 600px;
		height: 600px;
		border-radius: 10px;
		box-shadow: 10px 10px 35px 0px rgba(0, 0, 0, 0.15);
		-webkit-box-shadow: 10px 10px 35px 0px rgba(0, 0, 0, 0.15);
		-moz-box-shadow: 10px 10px 35px 0px rgba(0, 0, 0, 0.15);
		border: 5px solid;
	}
	.close {
		position: absolute;
		top: 1rem;
		right: 0;
		padding: 1rem;
		font-size: 1rem;
		background: #3e4260;
		border: none;
		cursor: pointer;
		border-radius: 0;
	}
</style>
