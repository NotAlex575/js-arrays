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


// 7. Trova l'indice dell'insegnante 'Lewis' nell'array teachers
// e salvalo nella variabile lewisIndex
const lewisIndex = null;

// 8. Verifica se l'array teachers è vuoto
// e salva il risultato nella variabile isTeachersEmpty
const isTeachersEmpty = null;



console.log(teachers)