export class Transformation {


    constructor(){

    }

    doTransformation(transCollection: Map<string>, key:string, transformation? : ((value:string)=>string)):string
    {
        let newValue: string = "";
        if (transformation != null)
        {
            if (transCollection.has(key))
            {
                newValue = transformation(transCollection.get(key));
            }
        }
        return newValue;
    }

}

export class Map<T>{
    public items: { [key:string]: T };
    
    constructor(){
        this.items = {};
    }

    add(key: string, value: T): void {
        this.items[key] = value;
    }

    has(key: string): boolean {
        return key in this.items;
    }

    get(key: string): T {
        return this.items[key];
    }
}

export class List<T> {
    private items: Array<T>;

    constructor() {
        this.items = [];
    }

    size(): number {
        return this.items.length;
    }

    add(value: T): void {
        this.items.push(value);
    }

    get(index: number): T {
        return this.items[index];
    }
}
