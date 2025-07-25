function logData(data: unknown) {
  console.log('Data:', data);
}

logData({ key: 'value' });

let count = 0;
count += 1;
console.log(count);

const unusedVarTS = 'I am not useddd for long brother';
console.log(unusedVarTS);

async function fetchData(): Promise<string> {
  return Promise.resolve('Hello TypeScript');
}

fetchData().then((message) => console.log(message));

const greeting: string = 'Hello, TypeScript Lint!';
console.log(greeting);

class Example {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }
}

const example = new Example('Test');
console.log(example.getName());
