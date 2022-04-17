
(function (window) {

    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
    window.names = names;
})(window);

for (var index = 0; index < names.length; index++ ) {
    var firstLetter = names[index].charAt(0);
    firstLetter = firstLetter.toLocaleLowerCase();

    // console.log(names[index] + '   ' + firstLetter);
    if (firstLetter == "j" ) {
        byeSpeaker.speak(names[index]);
    }else{
        helloSpeaker.speak(names[index]);
    }
}
