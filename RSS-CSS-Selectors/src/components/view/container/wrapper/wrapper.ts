import './wrapper.scss';
import { BasicElement } from "../../../util/basicElement";

type optionObject = {
    tag: string,
    classNames: string[],
};


export class Wrapper extends BasicElement {
    constructor(option: optionObject){
        super(option);
    }  
}