const readline = require('readline');


var r1 = readline.createInterface(
    process.stdin, process.stdout
);

r1.setPrompt('enter the password: ');

r1.prompt();


function simplePassword(str){
    return str;
}

r1.on('line',(str)=>{
    console.log(simplePassword(str));
    r1.close();
});


