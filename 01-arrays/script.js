const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE



// 1. Utilizzando un indice sull'array teachers, cambia il valore della
// variabile fourthTeacher qui sotto in modo che sia il quarto insegnante elencato nell'array
const fourthTeacher = teachers[3]; //l'array parte sempre da 0, quindi se si deve trovare il 4 insegnante, prendiamo la locazione 3 dell'array
console.log("valore all'interno dell'array posizione 4: "+fourthTeacher)

// 2. Sostituisci il quinto insegnante nell'array teachers con 'Patrick'
teachers[4] = "Patrick"

// 3. Rimuovi l'ultimo insegnante dall'array e salvalo nella variabile lastTeacher qui sotto
lunghezza_array = teachers.length - 1;  //messo questo calcolo nel caso ipotetico che ci sia una n grandezza non definita dell'array
const lastTeacher = teachers[lunghezza_array];
console.log(teachers)
teachers.pop(); //.pop -> rimuove l'ultimo valore in un'array
console.log("valore rimosso dall'ultima posizione dell'array: "+lastTeacher);

// 4. Rimuovi il primo insegnante dall'array e salvalo nella variabile firstTeacher qui sotto
const firstTeacher = teachers[0];
console.log(teachers)
teachers.shift();  //.shift -> rimuove il primo valore in un'array
console.log("valore rimosso dalla prima posizione dell'array: "+firstTeacher);

// 5. Aggiungi un insegnante di nome 'Vanessa' alla fine dell'array teachers
console.log(teachers)
teachers.push("Vanessa")  //.push -> aggiunge un nuovo valore nell'array all'ultima collocazione
console.log("\nvalore aggiunto nell'ultima posizione dell'array: Vanessa");


// 6. Aggiungi un insegnante di nome 'Sarah' all'inizio dell'array teachers
console.log(teachers)
teachers.unshift("Sarah")  //.unshift -> aggiunge un nuovo valore nell'array alla prima collocazione
console.log("\nvalore aggiunto nella prima posizione dell'array: Sarah");

// 7. Trova l'indice dell'insegnante 'Lewis' nell'array teachers
// e salvalo nella variabile lewisIndex
const lewisIndex = teachers.indexOf('Lewis'); //.indexOf -> trova l'indice del valore che stiamo cercando nell'array
console.log("Trovato Lewis! si trova nella posizione "+lewisIndex);


// 8. Verifica se l'array teachers è vuoto
// e salva il risultato nella variabile isTeachersEmpty
let check_is_empty = false;
if(teachers.length === 0){
  check_is_empty = true;
  console.log ("l'array è vuoto...")
}
const isTeachersEmpty = check_is_empty;
if(!check_is_empty){
  console.log ("l'array non è vuoto...")
}



console.log("risultato finale array:")
console.log(teachers) //ne ho messi 2 di console.log per farli vedere tutti nello stesso modo in output nella console