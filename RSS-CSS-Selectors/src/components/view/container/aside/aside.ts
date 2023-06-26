import './aside.scss';
import { BasicElement } from "../../../util/basicElement";

type optionObject = {
    tag: string,
    classNames: string[],
};


export class Aside extends BasicElement {
    constructor(option: optionObject){
        super(option);
    }  
}
