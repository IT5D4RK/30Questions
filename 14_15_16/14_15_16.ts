// Question 14 + 15 + 16
const guest_list3 = ["Smoky Nagata", "Mitsuru Haruguchi", "Keiichi Tsuchiya"];

console.log(`Hello, ${guest_list3[0]}! You are invited to my dinner party because you are a legendary tuner.`);
console.log(`Hello, ${guest_list3[1]}! You are invited to my dinner party because you were a legend drifting through reality with your RX7 FC3S.`);


console.log(`${guest_list3[2]} can't make it to the dinner.`);
guest_list3.pop();
guest_list3.push("Ken Nomura");
console.log(`Hello, ${guest_list3[2]}! You are invited to my dinner party because you are the legendary GT-R34 drifter himself.`);

guest_list3.unshift("Paul Walker");
guest_list3.splice(Math.floor(guest_list3.length / 2), 0, 'Tarzan Yamada')
guest_list3.push("Ken Block");
guest_list3.forEach((guest) => {
  console.log(`Dear ${guest}, you are invited to the dinner. Please join us.`);
});
