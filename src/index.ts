function logData(data: unknown) {
  console.log("Data:", data);
}

logData({ key: "value" });



async function fetchData(): Promise<string> {
  return Promise.resolve("Hello TypeScript");
}

fetchData().then((message) => console.log(message));


class Example {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }
}

const example = new Example("Test");
console.log(example.getName());