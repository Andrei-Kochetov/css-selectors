import './aside.scss';
import { BasicElement } from "../../../util/basicElement";
import { LevelNavElem } from './level-nav/level-nav';
import { ButtonReset } from './reset-button/reset-button';

type optionObject = {
    tag: string,
    classNames: string[],
};
interface Obj{
    element:HTMLElement;
    option:optionObject;
    setCssClasses(arrClass: string[]):void;
    appended(element: HTMLElement):void;
}

const LEVEL_ELEM_OPTIONS = {
    tag: 'div',
    classNames: ['level-elem']
};
const BUTTON_RESET_OPTIONS = {
    tag: 'button',
    classNames: ['btn-reset']
};

export class Aside extends BasicElement {
    levelsLength;
    levelNavElem: Obj;
    buttonReset: Obj;
    constructor(option: optionObject, levelsLength:number){
        super(option);
        this.levelsLength = levelsLength;
        this.createElement();

    }  
    createElement():void {
        super.createElement();
        for(let i = 0; i < this.levelsLength; i++){
            this.levelNavElem = new LevelNavElem(LEVEL_ELEM_OPTIONS,(i + 1));
            this.levelNavElem.appended(this.element);
        }
        this.buttonReset = new ButtonReset(BUTTON_RESET_OPTIONS);
        this.buttonReset.appended(this.element);  
    }
}
