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
//printName = printAge;

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


const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const;

// expected { tesla: 'tesla', 'model 3': 'model 3',
// 'model X': 'model X', 'model Y': 'model Y' }
type result = TupleToObject<typeof tuple>;

type TupleToObject<T extends readonly PropertyKey[]> = {
    [P in T[number]]: P;
  };

  interface IUserBaseInfo {
    createTime: string;
    userName: string;
    userAvatar: string;
  }
  interface IQuestionRecord {
    question: {
      title: string;
      content: string;
      picture: string[];
    };
  }
  interface IAnswerRecord {
    answer: {
      comment: string;
      audio?: {
        url: string;
      };
    };
  }

  type I = IUserBaseInfo & IQuestionRecord;


  function f() {
    return { x: 10, y: 3 };
  }
  // 正确使用
  type P = ReturnType<typeof f>;
  // type p = {x:number,y:number}

  interface User {
    name?: string;
    age?: number;
    hobby?: string;
  }

  type CustomRequired<T, K extends keyof T> = Omit<T, K> &
  {
    [P in K]-?: T[P];   // 映射类型
  };

  type SpecialUser = CustomRequired<User,"name">

  const aaaa: SpecialUser = {
    name: ""
  }


  type Test = Function extends {} ? true : false // 请问 `Test` 类型的值是什么？

  type Test2 = unknown extends {} ? true : false // `Test` 类型的值是 `false`

  type Test3 = any extends number ? 1 : 2;

  type IsNever<T> = [T] extends [never] ? true : false
  type  Test4 = IsNever<never> // Test 的值为 `never`, 而不是我们期待的  `true`


  type Colors = [{}, 3, 1, null];
  // type ColorsUnion = Colors['length'] //4
type ColorsUnion = Colors[number]; // "white" | "red" | "black" | "purple"
