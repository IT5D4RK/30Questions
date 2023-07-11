// Question 17
const guest_list2 = ["Smoky Nagata", "Mitsuru Haruguchi", "Keiichi Tsuchiya"];

while (guest_list2.length > 2) {
    let removedGuest = guest_list2.pop();
    console.log(`Sorry ${removedGuest}, I can't invite you to dinner.`);
  }
  
  guest_list2.forEach((guest) => {
    console.log(`${guest}, you're still invited to dinner.`);
  });
  