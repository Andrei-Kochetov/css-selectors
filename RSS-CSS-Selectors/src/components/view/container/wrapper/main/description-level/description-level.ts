import './description-level.scss';
import { BasicElement } from '../../../../../util/basicElement';

type optionObject = {
    tag: string,
    classNames: string[],
};


export class DescriptionLevel extends BasicElement {
    description;
    constructor(option: optionObject, description:string){
        super(option);
        this.description = description;
        this.createElement();
    } 
    createElement():void {
        super.createElement();
        this.element.textContent = `${this.description}`;
    }
}