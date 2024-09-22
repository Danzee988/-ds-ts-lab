import {Friend, Colleague, EmailContact } from './myTypes'
import {friends, colleagues } from './01-basics'


function older(f: Friend) {
    f.age += 1
    return `${f.name} is now ${f.age}` 
}

// console.log(older(friends[0]))

function allOlder(friends: Friend[]) {
    return friends.map(friend => {
      friend.age += 1;
      return `${friend.name} is now ${friend.age} years old`;
    });
  }

// const newAges = allOlder(friends);
// console.log(newAges); 

// Find the colleague with the highest extension number.
  function highestExtension(cs: Colleague[]) {
    const result = cs.sort(
      (c1, c2) => c1.contact.extension - c2.contact.extension
    );
    return result[cs.length - 1];
  }

  // Function to add a new colleague to the array.
function addColleague(
    colleaguesArray: Colleague[], 
    name: string, 
    department: string, 
    email: string
  ): void {
    const newExtension = highestExtension(colleaguesArray);  // Increment highest extension by 1
    colleaguesArray.push({
      name: name,
      department: department,
      contact: {
        email: email,
        extension: newExtension.contact.extension + 1,
      }
    });
  }


// console.log(highestExtension(colleagues.current));

addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
// console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));

function sortColleagues(
  colleagues: Colleague[],
  sorter: (c1: Colleague, c2: Colleague) => number
): EmailContact[] {
  const sorted = colleagues.sort(sorter); // Colleague[] inferred
  const result: EmailContact[] = sorted.map((ce) => ({ name: ce.name, email: ce.contact.email }));
  return result 
}

// console.log(sortColleagues(colleagues.current, (a, b) => a.contact.extension - b.contact.extension));
// console.log(sortColleagues(colleagues.current, (a, b) => a.name.length - b.name.length));

function findFriends(friends: Friend[], criterion: (friend: Friend) => boolean): string[] {
  return friends.filter(criterion).map(friend => friend.name);
}

console.log(findFriends(friends, (friend) => friend.name.startsWith('Da')));
console.log(findFriends(friends, (friend) => friend.age < 35));