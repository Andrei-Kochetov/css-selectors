import './name_task.scss';
import { BasicElement } from '../../../../../util/basicElement';

type optionObject = {
    tag: string,
    classNames: string[],
};


export class NameTask extends BasicElement {
    constructor(option: optionObject){
        super(option);
    } 
    createElement():void {
        super.createElement();
        this.element.innerHTML = 'RSS CSS Selectors';
    }


}
