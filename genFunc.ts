//type that have charAt method in it
type typeHavingCharAtMethod = {
    charAt(index: number): string|undefined,
} 

//another type that have other fields along with charAt method
type typeWithAnotherFields = {
    name:string,
    charAt(index: number):string|undefined,
}

//using union 
type unionType = string | typeWithAnotherFields;

//generic function that works only with the types that have charAt method in it
function genFunc<T extends unionType> (input:T, position: number):void{
    //using type guard
    if(typeof input === "string"){

        if(input.length < position){
            console.log("No character found!!");
        }else{
            console.log(input.charAt(position));
        }  
          
    }else{
        console.log(input.charAt(position));
    }
}   

//defining a object
const myObj:typeWithAnotherFields = {
    name:"Ankan chand",
    charAt(index: number):string|undefined{
        if(this.name.length < index){
            console.log("No character found!!");
            return undefined;
        }
        return this.name[index];
    }
}

genFunc("Ankan",0);
genFunc(myObj,0);

