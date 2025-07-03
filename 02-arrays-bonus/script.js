const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
const reversedTeachers = teachers.reverse(); //.reverse -> inverte l'ordine dell'array, qui salviamo in una variabile il contenuto al contrario dell'array "Teachers" 
console.log(reversedTeachers);

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = teachers.filter(name => name.length >= 5); //.filter -> filtra i valori in base alla condizione stabilita (nel nostro caso, name => name.length >= 5  filtrerà solo il contenuto di teachers, i cui valori hanno una lunghezza maggiore o uguale a 5)
console.log(longNames);             

// 3. Rimuovi 'Ed' dall'array teachers
const EdisIndex = teachers.indexOf('Ed');
teachers.splice(EdisIndex, 1); //.splice -> aggiunge o elimina dei valori nell'array, in questo caso eliminiamo Ed dall'array Teachers (trovandolo prima usando il .indexOf e poi eliminandolo con il .splice(indice,quanti valori da eliminare))
console.log(teachers)

// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
const isFabioPresent = teachers.indexOf('Fabio');
if(isFabioPresent >= 0){
  console.log("Fabio è nella posizione: "+isFabioPresent);
}
else
{
  console.log("Fabio non esiste nell'array....");
}



// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString
const teachersString = teachers.join(","); //.join -> ritorna l'array come una stringa unica (qui con questa parentesi (","), diciamo che tutti i valori che abbiamo unito hanno una virgola)
console.log(teachersString);