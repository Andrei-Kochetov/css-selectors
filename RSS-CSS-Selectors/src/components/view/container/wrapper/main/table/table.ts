import './table.scss';
import { BasicElement } from '../../../../../util/basicElement';

type optionObject = {
    tag: string,
    classNames: string[],
};


export class Table extends BasicElement {
    boardMarkup;
    constructor(option: optionObject, boardMarkup: string){
        super(option);
        this.boardMarkup = boardMarkup;
        this.createElement();
    } 
    createElement():void {
        super.createElement();
        this.element.innerHTML = this.boardMarkup;
    }
}
