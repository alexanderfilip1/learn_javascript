function escapeHtml(text) {
  var map = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, function(m) { return map[m]; });
}

function changeText () {
  var userInput = document.getElementById('input-js').value;
  var sanitizedInput = escapeHtml(userInput); // Call a function to sanitize input
  document.getElementById('header-js').innerHTML = sanitizedInput;
} // prevent xss vulnerabilities 




blog = {
  title: 'Blog Title',
  content: 'Blog Content',
};

let sectionHeader = document.getElementById('section__header-js');
let sectionContent = document.getElementById('section__text-js');

sectionHeader.innerHTML = blog.title;
sectionContent.innerHTML = blog.content;

elevi = ['Alex', 'John', 'Maria', 'Elena'];

note = [5, 7, 9, 10];

for (let i = 1; i <= 50; i++) { 
  console.log(i)
}
fetch("https://jsonplaceholder.typicode.com/users")
            .then(function(response) {
                return response.json();
            })
            .then(function(users) {
                // Iterate over each user
                users.forEach(function(user) {
                    // Create a new div element to display user data
                    var userDiv = document.createElement('div');
                    
                    // Construct HTML content with user data
                    userDiv.innerHTML = `
                        <h2>User Information</h2>
                        <p><strong>ID:</strong> ${user.id}</p>
                        <p><strong>Name:</strong> ${user.name}</p>
                        <p><strong>Username:</strong> ${user.username}</p>
                        <p><strong>Email:</strong> ${user.email}</p>
                        <p><strong>Address:</strong> ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</p>
                        <p><strong>Phone:</strong> ${user.phone}</p>
                        <p><strong>Website:</strong> ${user.website}</p>
                        <p><strong>Company:</strong> ${user.company.name}</p>
                        <p><strong>Catch Phrase:</strong> ${user.company.catchPhrase}</p>
                        <p><strong>BS:</strong> ${user.company.bs}</p>
                    `;
                    
                    // Append the user div to the container div
                    document.getElementById('user-info').appendChild(userDiv);
                });
            })
            .catch(function(error) {
                console.log('Error fetching user data:', error);
                var userDiv = document.createElement('div');
                userDiv.innerHTML = `
                <h2>Error fetching user data!</h2>
            `;
            
            // Append the user div to the container div
            document.getElementById('user-info').appendChild(userDiv);
            });


            function addPost() {
              // Obține valorile titlului și conținutului
              var title = document.getElementById('title-js').value;
              var content = document.getElementById('content-js').value;
            
              // Creează un nou element div pentru task
              var userDiv = document.createElement('div');
              userDiv.className = 'task-box';
              userDiv.innerHTML = `
                <h2>${title}</h2>
                <p>${content}</p>
              `;
            
              // Creează un buton de ștergere pentru task
              var deleteButton = document.createElement('button');
              deleteButton.textContent = 'Delete';
              deleteButton.className = 'task-delete';
              // Adaugă evenimentul de ștergere la butonul de ștergere
              deleteButton.onclick = function() {
                taskDelete(userDiv);
              };
            
              // Adaugă butonul de ștergere la div-ul task-ului
              userDiv.appendChild(deleteButton);
            
              // Adaugă task-ul cu butonul de ștergere la containerul de task-uri
              document.getElementById('wrapper-js').appendChild(userDiv);
            
              // Șterge valorile din câmpurile de intrare
              document.getElementById('title-js').value = '';
              document.getElementById('content-js').value = '';
            }
            

function taskDelete(task) {
  task.parentNode.removeChild(task);
}

let functie = (mesaj) => {
  console.log("Mesaj: " + mesaj);
}
//Folosind argumentul din paranteze, se produce urmatorul rezultat 'console.log("Mesaj: " + mesaj);'

functie("Salut");

let persoane = ["Paul", "John", "Alex"];

persoane.splice(1, 2, "Test", "ABC");


// persoane.push("Ion");
// persoane.unshift("Eugeniu");
for(let nume of persoane) {
  console.log(nume);
}

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
console.log(matrix[2][2]);
// for (let i = 0; i < matrix.length;i++) 

// {
//   console.log(matrix[i]);
//   for (let j = 0;j < matrix[i].length; j++) {
//     console.log(matrix[i][j]);
//   }
// }

let persoaneString = "Paul, Cristian, Ion";

let persoaneArray = persoaneString.split(", "); // Pune in array tot ce este in variabila persoaneString
console.log(persoaneArray);


console.log(persoane.join(" - ")) // Separa stringurile din array prin " - " si converteaza din array in string


let arr = []; 

arr.push(10);
arr.push(20);
arr.push(30);
console.log(arr);

//arr.shift(); // scoate primul element din array
arr.pop(); // scoate ultimul element din array

console.log(arr); 

let objects = {
  id: 1,
  title: "Post 1",
  content: "Content 1",
  date: "2020-01-01",
  author: "Ion",
  comments: [
    { 
      id: 1,
      comment: "Hello",
      author: "Grigorio"
    },
    { 
      id: 2,
      comment: "Hi",
      author: "Ion"
    } 
  ]
};

console.log("ID: " + objects.comments[0].id + "\nComment: " +  objects.comments[0].comment + "\nAuthor: " + objects.comments[0].author );
console.log("ID: " + objects.comments[1].id + "\nComment: " +  objects.comments[1].comment + "\nAuthor: " + objects.comments[1].author );

let obiect1 = {
  prop1: "val1",
}

let obiect2 = Object.assign({}, obiect1); // cloneaza obiect1

obiect2.prop1 = "O noua voaloare";
//Obiectele nu sunt stocate prin valoare ci prin referinta
console.log(obiect1);
console.log(obiect2);

// // Utilizăm fetch API pentru a încărca conținutul din about.html
// fetch('https://youtube.com')
//     .then(response => {
//         return response.text(); // Obținem răspunsul ca text
//     })
//     .then(data => {
//         // Adăugăm conținutul din about.html în div-ul cu id-ul 'about-content'
//         document.getElementById('about-content').innerHTML = data;
//     })
//     .catch(error => {
//         console.error('A apărut o eroare:', error);
//     });


let person = {
  name: "Alex",
  age: 20,
  city: "Bucharest",
  details() {
    console.log("Name: " + this.name + "\nAge: " + this.age + "\nCity: " + this.city);
  }
}

person.details();

// OOP

function Carti (autor, denumire) {
  //this = {}
  this.autor = autor;
  this.denumire = denumire;

  this.detalii = function() {
    console.log("Autor: " + this.autor + "\nDenumire: " + this.denumire);
  }
}

let carte = new Carti("Robert Kiyosaki", "Tata bogat, tata sarac");
carte.detalii();


//În JavaScript, o clasă reprezintă un tip de șablon pentru obiecte, 
//care definește proprietățile și comportamentul acestora. 
//Clasele permit programatorilor să creeze obiecte care au aceleași proprietăți (variabile) 
//și comportamente (metode). Sintaxa pentru definirea unei clase în JavaScript este introdusă 
//în standardul ECMAScript 6 (ES6) și oferă o modalitate mai clară și mai ușor de folosit pentru 
//definirea tipurilor de obiecte.
class Persoana
{
  constructor(nume, prenume) {
    this.nume = nume;
    this.prenume = prenume;
  }

  salut() {
    console.log("Salut " + this.nume + " " + this.prenume);
  }
}
let pers = new Persoana("Alex", "Filip");
let pers2 = new Persoana("Eugen", "Doga");

pers.salut();
pers2.salut();

console.log(typeof Persoana);

// Polimorfismul în JavaScript se referă la 
//capacitatea unei metode sau funcții de a avea 
//comportamente diferite în funcție de contextul
//în care este apelată. Cu alte cuvinte, în timp 
//ce aceeași metodă sau funcție poate fi chemată, 
//efectul său poate să difere în funcție de tipul 
//obiectului care o apelează.

class Animal {
  sunet() {
    return 'Sunetul animalului!';
  }
}

class Caine extends Animal {
  sunet() {
    return 'Ham! Ham!';
  }
}

class Pisica extends Animal {
  sunet() {
    return 'Miau! Miau!';
  }
}

// Creăm instanțe ale claselor Caine și Pisica
let rex = new Caine();
let tom = new Pisica();

// Apelăm metoda sunet() pentru fiecare instanță
console.log(rex.sunet()); // Va afișa: Ham! Ham!
console.log(tom.sunet()); // Va afișa: Miau! Miau!

function trimite(mesaj, callback) 
{
  setTimeout(function () {
    console.log("Trimit mesajul " + mesaj);

    callback();
  }, 500);
}

function verificare() 
{
  console.log("Mesaj tirmis cu succes");

}

trimite("Text", verificare);
//   ------  Promises  ------
let server = true;

let promise = new Promise(function(resolve, reject) {
  setTimeout(() => {
    if (server == true) {
      resolve("Imagine descarcata cu succes");
    }
    else {
      reject("Imaginea nu a putut fi descarcata");
    }
  }, 1000);
});

promise.then(
  () => console.log("Imaginea s-a descarcat"),

).catch(
  () => console.log("Imaginea nu s-a descarcat")  
).finally(
 () => console.log("OK")
);

let promisiune = new Promise((resolve, reject) => {
  resolve(5);
});

promise.then(
  (numar) => {
    console.log(numar);
    return numar * 2;
  }
).then (
  (numar) => {
    console.log(numar);
    return numar * 3;
  }
)