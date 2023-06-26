const hljs = require('highlight.js');
require('highlightjs-line-numbers.js/src/highlightjs-line-numbers.js');
require('highlight.js/scss/monokai-sublime.scss');

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

let curr = 0;
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

const aside = new Aside(ASIDE_OPTIONS);
aside.appended(container.element);

function nextLevel(){
    if(curr >= levels.length - 1){
        curr = 0;
    } else{
        curr += 1; 
    }
    
    level = levels[curr];
    const table = document.querySelector('.table');
    table!.innerHTML = level.boardMarkup!;
    const codeArea = document.querySelector('.code-area');
    codeArea!.textContent = level.boardMarkup!;
}
document.querySelector('.help-button')?.addEventListener('click',()=>{
    nextLevel();
    hljs.initHighlightingOnLoad();
});
