type userDetail = {
    readonly DBnumber: number;
    userName: string;
    email: string;
    password: number;
    isAdmin?: boolean;
};

const newUser: userDetail = {
    DBnumber: 666,
    userName: "d4rk",
    email: "d4rk.719@gmail.com",
    password: 4363,
    isAdmin: true
};

console.log(newUser);