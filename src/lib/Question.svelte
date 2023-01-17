<script>
	// @ts-nocheck
	import { fade, blur, fly, slide, scale } from 'svelte/transition';
	export let question;
	export let updateScore;
	let nextQuestion;

	let isCorrect;
	let isAnswered = false;
	let answers = question.incorrect_answers.map((answer) => {
		return {
			answer,
			correct: false
		};
	});

	let allAnswers = [
		...answers,
		{
			answer: question.correct_answer,
			correct: true
		}
	];
	shuffle(allAnswers);

	function checkQuestion(correct) {
		if (!isAnswered) {
			isAnswered = true;
			isCorrect = correct;
			if (correct) {
				updateScore();
			}
		}
	}

	function shuffle(array) {
		array.sort(() => Math.random() - 0.5);
	}
</script>

<h3>{@html question.question}</h3>

{#if isAnswered}
	<h4 class:correct={isCorrect} class:wrong={!isCorrect}>
		{#if isCorrect}
			You got it right!
		{:else}
			You done goofed man!
		{/if}
	</h4>
{/if}

{#each allAnswers as answer}
	<button disabled={isAnswered} on:click={() => checkQuestion(answer.correct)}>
		{@html answer.answer}
	</button>
{/each}

<style>
	h3 {
		margin: 0;
		margin-bottom: 30px;
	}
	h4.wrong {
		color: red;
	}
	h4.correct {
		color: green;
	}
</style>
