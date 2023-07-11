const person = 2

if ( person < 2) {
    console.log("person is baby")
}
else if ( person >= 2 && person <=4) {
    console.log("person is toddler")
}
else if ( person >= 4 && person <=13) {
    console.log("person is kid")
}

else if ( person >= 13 && person <=20) {
    console.log("person is teenagers")
}

else if ( person >= 20 && person <=65) {
    console.log("person is adult")
}

else if ( person >= 65) {
    console.log("person is elder")
}
else {
    console.log("your given value is wrong")
}
