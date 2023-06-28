import './input-wrapper.scss';
import { BasicElement } from '../../../../../util/basicElement';

type optionObject = {
    tag: string,
    classNames: string[],
};


export class InputWrapper extends BasicElement {
    constructor(option: optionObject){
        super(option);
    } 
}