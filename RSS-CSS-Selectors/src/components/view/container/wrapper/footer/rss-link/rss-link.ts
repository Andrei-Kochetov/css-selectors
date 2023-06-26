import './rss-link.scss';
import { BasicElement } from '../../../../../util/basicElement';

type optionObject = {
    tag: string,
    classNames: string[],
};


export class RssLogo extends BasicElement {
    img:HTMLImageElement;
    element:HTMLLinkElement;
    constructor(option: optionObject){
        super(option);
    } 
    createElement():void {
        super.createElement();
        this.element.href = 'https://rs.school/js/';
        this.img = document.createElement('img');
        this.img.classList.add('rss-logo');
        this.img.src = 'https://rs.school/images/rs_school_js.svg';
        this.element.append(this.img);
    }
    
}