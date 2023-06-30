import './level-nav.scss';
import { BasicElement } from "../../../../util/basicElement";

type optionObject = {
    tag: string,
    classNames: string[],
};


export class LevelNavElem extends BasicElement {
    public levelNum;
    constructor(option: optionObject, levelNum:number){
        super(option);
        this.levelNum = levelNum;
        this.createElement();
    }  
    public createElement(): void {
        super.createElement();
        this.element.textContent = `${this.levelNum}`;

    }
}
