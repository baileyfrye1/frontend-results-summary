import '../css/style.css';
import json from '../data.json';
import reactionSVG from '../assets/images/icon-reaction.svg';
import memorySVG from '../assets/images/icon-memory.svg';
import verbalSVG from '../assets/images/icon-verbal.svg';
import visualSVG from '../assets/images/icon-visual.svg';
const svgArray = [reactionSVG, memorySVG, verbalSVG, visualSVG];

let scoreTotal = 0;
const totalScore = document.querySelector('.card__result__score');
const category = document.querySelectorAll('.card__summary__category');
console.log(category);
const categoryIcon = document.querySelectorAll('.category__icon');
const categoryTitle = document.querySelectorAll('.category__title');
const categoryScore = document.querySelectorAll('.category__score');

categoryIcon.forEach((icon, i) => {
    icon.setAttribute('src', svgArray[i]);
});

categoryTitle.forEach((title, i) => {
    title.innerHTML = json[i].category;
});

categoryScore.forEach((score, i) => {
    score.innerHTML = `${json[i].score}<span class="category__score__max"> / 100</span>`
    scoreTotal += json[i].score;
    totalScore.innerHTML = `${Math.floor(scoreTotal / json.length)}<span class="card__result__max">of 100</span>`;
});