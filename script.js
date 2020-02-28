var students = [
    {firstname: "Sybille",
    lastname: "Kasslatter",
    },
    {firstname: "Miranda",
    lastname: "Kamp"
    },
    {firstname: "Emelie",
    lastname: "Sundgren"
    },
    {firstname: "Aristides",
    lastname: "Abeywickrama"
    },
    {firstname: "Damianos",
    lastname: "Makris"
    },
    {firstname: "Neil",
    lastname: "Gursahani"
    },
    {firstname: "Justin",
    lastname: "Peeters"
    },
    {firstname: "Yvana",
    lastname: "Wagter"
    },
    {firstname: "Charles",
    lastname: "van den Bergh"
    },
    {firstname: "Alena",
    lastname: "Perrone"
    },
    {firstname: "Fábio",
    lastname: "Costa"
    },
    {firstname: "Shabeer",
    lastname: "Hussain"
    },
    {firstname: "Felix",
    lastname: "van Riessen"
    },
    {firstname: "Alexandra",
    lastname: "Muskovszky"
    },
    {firstname: "Azadeh",
    lastname: "Farshidi"
    },
    {firstname: "Francis",
    lastname: "Bukenya"
    }
]

let $body = document.querySelector("body");


function sayHelloClass(){
    let $h1 = document.createElement("h1");
    $h1.innerHTML= "Hello Class";
    $body.appendChild($h1);
}

sayHelloClass();

function text() {
    let $p = document.createElement("p");
    $p.innerHTML = "Today we're going to solidify our DOM skills!";
    $body.appendChild($p);
}

text();

function printStudents(){
    for(let i = 0; i < students.length ; i++){
        let $h3 = document.createElement("h3");
        let firstName = students[i].firstname;
        let lastName = students[i].lastname;
        $h3.innerHTML = `${firstName} ${lastName}`;
        $body.appendChild($h3);
        let $img = document.createElement("img");
        let studentName = firstName.toLowerCase();
        let source = `https://wd-ft-feb.s3.eu-central-1.amazonaws.com/${studentName}.png`
        $img.setAttribute("src",source);
        $img.setAttribute("style","width:200px;border:5px solid black");
        $body.appendChild($img);
    }
}

printStudents();

function randomIndex(){
    return Math.floor(Math.random()*students.length);
}

function randomStudent(){
    let rndStudentInd = randomIndex();
    let $h3 = document.createElement("h3");
    let firstName = students[rndStudentInd].firstname;
    let lastName = students[rndStudentInd].lastname;
    $h3.innerHTML = `${firstName} ${lastName}`;
    $body.appendChild($h3);
    let $img = document.createElement("img");
    let studentName = firstName.toLowerCase();
    let source = `https://wd-ft-feb.s3.eu-central-1.amazonaws.com/${studentName}.png`
    $img.setAttribute("src",source);
    $img.setAttribute("style","width:200px;border:5px solid black");
    $body.appendChild($img);
}


document.querySelector("button").addEventListener("click",function(){
    $body.innerHTML= "";
    sayHelloClass();
    randomStudent();
})

