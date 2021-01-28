function lookUpProfile(name, prop){
// Only change code below this line
for(var i = 0; i<contacts.length; i++){
    if(contacts[i].firstName === name){
        return contacts[i][prop] || "No such propperty";
    }
}
return "No such contact";   
// Only change code above this line
}