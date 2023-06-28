import './table.scss';
import { BasicElement } from '../../../../../util/basicElement';

type optionObject = {
    tag: string,
    classNames: string[],
};


export class Table extends BasicElement {
    viewMarkup;
    constructor(option: optionObject, viewMarkup: string){
        super(option);
        this.viewMarkup = viewMarkup;
        this.createElement();
    } 
    createElement():void {
        super.createElement();
        this.element.innerHTML = this.viewMarkup;
    }
}
