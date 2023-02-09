let firstName: string = "john";

let age: number | string = 22 // OR "22"

let obj: { firstName: string; age: number } = { firstName: "john", age: 22 };

function createUser(
  firstName: string,
  age: number | string
): { age?: number | string; firstName: string } {
  if (age > 20) {
    return { firstName };
  }
  return { age, firstName };
}

let str = createUser("John", 22);

str.age