import './container.scss';
import { BasicElement } from "../../util/basicElement";

type optionObject = {
    tag: string,
    classNames: string[],
};


export class Container extends BasicElement {
    constructor(option: optionObject){
        super(option);
    }  
}
