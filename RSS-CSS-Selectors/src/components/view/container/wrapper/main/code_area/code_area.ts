
import './code_area.scss';
import { BasicElement } from '../../../../../util/basicElement';

type optionObject = {
    tag: string,
    classNames: string[],
};


export class CodeArea extends BasicElement {
    element: HTMLInputElement;
    boardMarkup:string;
    constructor(option: optionObject, boardMarkup: string){
        super(option);
        this.boardMarkup = boardMarkup;
        this.createElement();
    } 
    createElement():void {
        super.createElement();
        this.element.textContent = this.boardMarkup;
    }
}