type res1 = `a=b` extends `${infer A}=${infer B}` ? [A, B] : never;


type TrimLeft<T extends string> = T extends `${' ' | '\n'}${infer Rest}` ? TrimLeft<Rest> : T;

type str = TrimLeft<' fdsa'>

type Replace<Str extends string,
    From extends string,
    To extends string> = Str extends `${infer Left}${From}${infer Right}`
    ? `${Left}${To}${Right}`
    : Str;
type res2 = Replace<"最帅的人是你", "你", "我">;

type obj = {
    a: 1,
    b: '2'
}

type keys = keyof obj;

type prop = obj[keys]


type NumInfer<Str> =
    Str extends `${infer Num extends number}`
    ? Num
    : never;

type res = NumInfer<'123'>

interface Person {
    name: string;
}

interface Person2 extends Person {
    age: number;
}

const person2: Person2 = {
    name: '123',
    age: 123,
};

let person: Person = {
    name: "23"
}

person = person2;


let printName: (obj: Person) => void;
printName = (obj: Person) => {
    console.log(obj.name);
}

let printAge: (obj: Person2) => void;
printAge = (obj: Person2) => {
    console.log(obj.age);
}

printAge = printName;
printName = printAge;

type a = keyof any;

type Pick1<T, K extends keyof T> = {
    [P in K]: T[P];
};
//age, name 
const obj: Pick1<Person2, "name"> = {
    name: "123"
}

type res3 = number extends object ? true : false;

class Dog {
    name: string;
    constructor() {
        this.name = 'sadf';
    }

    hello(this: Dog) {
        console.log('hello' + this.name);
    }
}

const dog = new Dog();
dog.hello();

dog.hello.call({ age: 1 });

type thisType = ThisParameterType<typeof dog.hello>;

type ReverseStr<
    Str extends string,
    Result extends string = ''
    > = Str extends `${infer First}${infer Rest}`
    ? ReverseStr<Rest, `${First}${Result}`>
    : Result;

type str2 = ReverseStr<'123'>

