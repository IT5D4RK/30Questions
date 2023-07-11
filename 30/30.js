"use strict";
const usersOfSite = ['Adil', 'Sumyan', 'Moosa', 'Uzair', 'Admin'];
for (const user of usersOfSite) {
    if (user == 'Admin') {
        console.log('Welcome Admin, The Logs Are Ready For You To See.');
        break;
    }
    else {
        console.log(`Welcome To The Darkside ${user}.`);
    }
}
