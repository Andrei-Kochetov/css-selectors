import './button-enter.scss';
import { BasicElement } from '../../../../../../util/basicElement';

type optionObject = {
    tag: string,
    classNames: string[],
};


export class ButtonEnter extends BasicElement {
    selector:string;
    element: HTMLButtonElement;
    constructor(option: optionObject){
        super(option);
    } 
    createElement():void {
        super.createElement();
        this.element.textContent = 'ENTER';
    }
}