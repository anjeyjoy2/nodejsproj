var db = require('./db/db.js');
db.connect();

var User = require('./user/user.js');

function run() {
    var vasya = new User("Вася");
    var petya = new User("Петя");

    vasya.hello(petya);

    console.log(db.getPhrase("Run successful"));
}

if (module.parent) {
    exports.run = run;
} else {
    run();
}
