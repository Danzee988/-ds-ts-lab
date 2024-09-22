import {Friend, Colleague, ColleagueHistory } from './myTypes'

const friend1: Friend = {
    name: "David Beres",
    phone: "087-12345",
    age: 26,
    dob: new Date("1998-11-20") ,
  };
  
  const friend2: Friend = {
    name: "Jan Biernacki",
    phone: "086--12345",
    age: 33,
    interests: ['Music', 'Sport']

  };

  const friend3: Friend = {
    name: "Ralph Graham",
    phone: "086--12345",
    age: 33,
    interests: ['Music', 'Sport']

  };
  
  export const friends = [friend1, friend2, friend3];
  //   console.log(friends[1]);
  
  //   -------------------
  const colleague1: Colleague = {
    name: "Ralph Graham",
    department: "Engineering",
    contact: {
      email: "rgraham@company.com",
      extension: 121,
    },
  };
  
  const colleague2: Colleague = {
    name: "Patti Burke",
    department: "Finance",
    contact: {
      email: "pburke@company.com",
      extension: 132,
    },
  };
  
  const colleague3: Colleague = {
    name: "Dean Sullivan",
    department: "HR",
    contact: {
      email: "dos@company.com",
      extension: 125,
    },
  };
  export const colleagues : ColleagueHistory = {
    current: [colleague1, colleague2, colleague3],
    former: [],
  };;
  
//   console.log(colleagues.current[0]);