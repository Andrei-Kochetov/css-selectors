import './help_button.scss';
import { BasicElement } from '../../../../../util/basicElement';

type optionObject = {
    tag: string,
    classNames: string[],
};


export class HelpButton extends BasicElement {
    constructor(option: optionObject){
        super(option);
    } 
    createElement():void {
        super.createElement();
        this.element.innerHTML = 'HELP';
    }


}
