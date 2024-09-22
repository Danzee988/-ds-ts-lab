import {Friend, Colleague } from './myTypes'
import {friends, colleagues } from './01-basics'


function older(f: Friend) : string {
    f.age += 1
    return `${f.name} is now ${f.age}` 
}

// console.log(older(friends[0]))

function allOlder(friends: Friend[]): string[] {
    return friends.map(friend => {
      friend.age += 1;
      return `${friend.name} is now ${friend.age} years old`;
    });
  }

const newAges = allOlder(friends);
console.log(newAges); 

// Find the colleague with the highest extension number.
function highestExtension(cs: Colleague[]): Colleague {
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


console.log(highestExtension(colleagues.current));

addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));