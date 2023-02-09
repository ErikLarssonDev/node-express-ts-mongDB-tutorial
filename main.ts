let firstName: string = "john";

let age: number | string = 22; // OR "22"

let obj: { firstName: string; age: number } = { firstName: "john", age: 22 };

interface User {
  age?: number | string;
  firstName: string;
}

function createUser(firstName: string, age: number | string): User {
  if (age > 20) {
    return { firstName };
  }
  return { age, firstName };
}

let str = createUser("John", 22);

str.age;

interface Login<Pwd> {
  email: string;
  password: Pwd;
}

interface Member {
    userName: string,
    status: MemberStatus // Active / Inactive / New
}

enum MemberStatus {
    Active = "Active",
    Inactive = "Inactive",
    New = "New"
}

type PasswordType = string | number;
type LoginResult = Promise<boolean | Member>;

async function login(loginArgs: Login<PasswordType>): LoginResult {
  if (loginArgs.email === "email" && loginArgs.password === "password") {
    return { userName: "John", status: MemberStatus.Active };
  } else {
    return false;
  }
}

login({email: "email", password: "password" }).then(result => {
    if(typeof result === "boolean") return // Can do !
    if(result.status === MemberStatus.Active) console.log("User is active")
})
