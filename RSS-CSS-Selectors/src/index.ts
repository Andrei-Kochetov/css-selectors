const hljs = require('highlight.js');
require('highlight.js/scss/monokai-sublime.scss');
require('highlightjs-line-numbers.js/src/highlightjs-line-numbers.js');

import { levels } from './levels';
import './main.scss';
import {Container} from './components/view/container/container';
import {Wrapper} from './components/view/container/wrapper/wrapper';
import {Header} from './components/view/container/wrapper/header/header';
import {Main} from './components/view/container/wrapper/main/main';
import {Footer} from './components/view/container/wrapper/footer/footer';
import {Aside} from './components/view/container/aside/aside';


document.addEventListener('DOMContentLoaded', () => {
    hljs.initHighlightingOnLoad();
    hljs.initLineNumbersOnLoad();
});


const CONTAINER_OPTIONS = {
    tag: 'div',
    classNames: ['container']
};
const WRAPPER_OPTIONS = {
    tag: 'div',
    classNames: ['wrapper']
};
const HEADER_OPTIONS = {
    tag: 'header',
    classNames: ['header']
};
const MAIN_OPTIONS = {
    tag: 'main',
    classNames: ['main']
};
const FOOTER_OPTIONS = {
    tag: 'footer',
    classNames: ['footer']
};
const ASIDE_OPTIONS = {
    tag: 'aside',
    classNames: ['aside']
};

let countPassedLevel = 0;
let curr = +JSON.parse(localStorage.getItem('currentLevel')!) || 0;
let level = levels[curr]; 

const container = new Container(CONTAINER_OPTIONS);
container.appended(document.body);

const wrapper = new Wrapper(WRAPPER_OPTIONS);
wrapper.appended(container.element);

const header = new Header(HEADER_OPTIONS);
header.appended(wrapper.element);

const main = new Main(MAIN_OPTIONS, level);
main.appended(wrapper.element);

const footer = new Footer(FOOTER_OPTIONS);
footer.appended(wrapper.element);

const aside = new Aside(ASIDE_OPTIONS, levels.length);
if(localStorage.getItem('asideInnerHtml')){
    aside.element.innerHTML = JSON.parse(localStorage.getItem('asideInnerHtml')!);
}
aside.appended(container.element);

const input: HTMLInputElement = document.querySelector('.css-input') as HTMLInputElement;
const helpButton = document.querySelector('.help-button');
const inputWrapper = document.querySelector('.input-wrapper');
const codeArea = document.querySelector('.code-area');
const levelNavs = document.querySelectorAll('.level-elem');
const enterButton = document.querySelector('.btn-enter');
const resetButton = document.querySelector('.btn-reset');
const table = document.querySelector('.table');
const descriptionLevel = document.querySelector('.description-level');

function currentLevel(){
    levelNavs.forEach(el=>{
        el.classList.remove('current-level');
    });
    levelNavs[curr].classList.add('current-level');
}
currentLevel();

function delay(ms:number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

function viewDateLevel(){
    level = levels[curr];
    descriptionLevel!.textContent = level.doThis!;
    table!.innerHTML = level.viewMarkup!;
    codeArea!.textContent = level.boardMarkup!;
    input.value = '';
    currentLevel();
    hljs.initHighlightingOnLoad(); 
}

async function showWin(){
    codeArea!.textContent = '';
    const winText = 'Поздравляю, повелитель селекторов,\nты прошел все уровни!';
    for(let i = 0;i< winText!.length; i++) {
        codeArea!.textContent += winText![i];
        await delay(100) ;
    }
}

function nextLevel(){
    if(countPassedLevel === levels.length || curr === levels.length - 1){
        showWin();
    } else{
        if(curr > levels.length - 1){
            curr = 0;
        } else{
            curr += 1; 
        }
        viewDateLevel();
    }
    
}

function clickLevelNav(){
    curr = +this.textContent - 1;
    viewDateLevel();
}

levelNavs.forEach(el =>{
    el.addEventListener('click', clickLevelNav);
});

function hideElementsTable():void{
    const elementsActive = document.querySelectorAll('.active');
    elementsActive.forEach(el=>{
        el.classList.add('hide');
    });
}

async function showRightAnswer(){
    const levelSelector = levels[curr].selector;
    input.value = '';
    for(let i = 0;i<levelSelector!.length; i++) {
        input.value += levelSelector![i];
        await delay(300) ;
    }
}

helpButton!.addEventListener('click',()=>{
    showRightAnswer();
    if(!levelNavs[curr].classList.contains('complite-elem') && !levelNavs[curr].classList.contains('help-elem')){
        levelNavs[curr].classList.add('help-elem');
        ++countPassedLevel;
    }
});

input.addEventListener('keyup',(e)=>{
    level = levels[curr];
    if(input!.value === level.selector && e.key === 'Enter'){
        hideElementsTable();
        setTimeout(nextLevel, 1500);
        if(!levelNavs[curr].classList.contains('help-elem') && !levelNavs[curr].classList.contains('complite-elem')){
            levelNavs[curr].classList.add('complite-elem');
            ++countPassedLevel;
        }
    } else if(input!.value !== level.selector && e.key === 'Enter'){
        codeArea!.classList.add('shake');
        inputWrapper!.classList.add('shake');
    }
});

enterButton!.addEventListener('click',()=>{
    level = levels[curr];
    if(input!.value === level.selector){
        hideElementsTable();
        setTimeout(nextLevel, 1500);
        if(!levelNavs[curr].classList.contains('help-elem') && !levelNavs[curr].classList.contains('complite-elem')){
            levelNavs[curr].classList.add('complite-elem');
            ++countPassedLevel;
        }
    } else{
        codeArea!.classList.add('shake');
        inputWrapper!.classList.add('shake');
    }
});


function resetProgress(){
    countPassedLevel = 0;
    curr = 0;
    levelNavs.forEach(el=>{
        el.classList.remove('complite-elem');
        el.classList.remove('help-elem');
    });
    viewDateLevel();
}

resetButton!.addEventListener('click', resetProgress);

inputWrapper!.addEventListener('animationend',()=>{
    codeArea!.classList.remove('shake');
    inputWrapper!.classList.remove('shake');
});

window.addEventListener('beforeunload', ()=>{
    localStorage.setItem('currentLevel', JSON.stringify(`${curr}`));
    localStorage.setItem('asideInnerHtml', JSON.stringify(`${aside.element.innerHTML}`));
});