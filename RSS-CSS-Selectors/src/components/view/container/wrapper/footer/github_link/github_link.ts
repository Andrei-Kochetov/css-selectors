import './github_link.scss';
import { BasicElement } from '../../../../../util/basicElement';

type optionObject = {
    tag: string,
    classNames: string[],
};


export class GitHubLink extends BasicElement {
    img:HTMLImageElement;
    element:HTMLLinkElement;
    constructor(option: optionObject){
        super(option);
    } 
    createElement():void {
        super.createElement();
        this.element.href = 'https://github.com/Andrei-Kochetov/';
        this.img = document.createElement('img');
        this.img.classList.add('github-logo');
        this.img.src = 'https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../releases/preview/2012/png/iconmonstr-github-1.png&r=0&g=0&b=0';
        this.element.append(this.img);
    }
    
}