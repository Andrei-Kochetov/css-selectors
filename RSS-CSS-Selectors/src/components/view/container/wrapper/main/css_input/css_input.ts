import './css_input.scss';
import { BasicElement } from '../../../../../util/basicElement';
//import { levels } from '../../../../../../levels';

type optionObject = {
    tag: string,
    classNames: string[],
};


export class CssInput extends BasicElement {
    selector:string;
    element: HTMLInputElement;
    constructor(option: optionObject, selector:string){
        super(option);
        this.selector = selector;
        this.trueAnswer();
    } 
    createElement():void {
        super.createElement();
        this.element.placeholder = 'Введите CSS селектор';
    }
    trueAnswer(){
        this.element.addEventListener('keyup',()=>{
            if(this.element.value === this.selector){
                alert('eeee');
            }
        });
    }
}