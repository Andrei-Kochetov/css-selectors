import './reset-button.scss';
import { BasicElement } from '../../../../util/basicElement';

type optionObject = {
    tag: string,
    classNames: string[],
};


export class ButtonReset extends BasicElement {
    private selector:string;
    element: HTMLButtonElement;
    constructor(option: optionObject){
        super(option);
    } 
    public createElement():void {
        super.createElement();
        this.element.textContent = 'Reset';
    }
}
