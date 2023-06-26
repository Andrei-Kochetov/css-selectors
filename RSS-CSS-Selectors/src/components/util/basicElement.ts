import './createElement.scss';

type optionObject = {
    tag: string,
    classNames: string[],
};


export class BasicElement{
    option: optionObject;
    element: HTMLElement;
    constructor(option: optionObject){
        this.option = option;
        this.createElement();
    }

    createElement():void {
        this.element = document.createElement(this.option.tag);
        this.setCssClasses(this.option.classNames);
    }

    setCssClasses(arrClass: string[]):void{
        arrClass.forEach(el=>{
            this.element.classList.add(el);
        });
        
    }
    appended(element: HTMLElement):void{
        element.append(this.element);
    }
}