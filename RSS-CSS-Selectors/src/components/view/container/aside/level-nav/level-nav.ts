import './level-nav.scss';
import { BasicElement } from "../../../../util/basicElement";

type optionObject = {
    tag: string,
    classNames: string[],
};


export class LevelNavElem extends BasicElement {
    levelNum;
    constructor(option: optionObject, levelNum:number){
        super(option);
        this.levelNum = levelNum;
        this.createElement();
    }  
    createElement(): void {
        super.createElement();
        this.element.textContent = `${this.levelNum}`;
        
    }
}
