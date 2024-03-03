/* 
    It stores key-value pairs and the most common use is fast lookup access.
    JavaScript's object is a special implementation of a hash table. However, it ads its own keys upfront. Maps are more suitable for this purpose.
    Writing your own hash table implementation is a very popular JavaScript question.
*/

class HashTable{
    constructor(size){
        this.table = new Array(size);
        this.size = 0;
    }

    hash(key){
        let total = 0;
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i);
        }

        return total % this.table.length;
    }

    set(key, value){
        const index = this.hash(key);
        
        // Handle collisions
        if (this.table[index]) { // Ya existe un arreglo en dicho índice
            for (let i = 0; i < this.table[index].length; i++) {
                if (this.table[index][i][0] === key) {  // Si ya existe un elemento con esa misma key, actualízalo
                    this.table[index][i][1] = value;
                    return;
                } 
                this.table[index].push([key, value]); // Si no, sólo agrégalo
            }
        } else { // Si no, crea el arreglo y agrega ese nuevo par de key-value
            this.table[index] = [];
            this.table[index].push([key, value]);
        }

        this.size++;
    }

    get(key){
        const index = this.hash(key);

        if (this.table[index]) { // Verifica que sí existan valores en dicha posición
            for (let i = 0; i < this.table[index].length; i++) {
                if (this.table[index][i][0] === key) { // Comprobar si la llave existe con algún valor
                    return this.table[index][i][1];
                } 
            }
        }

        return undefined;
    }

    remove(key){
        const index = this.hash(key);

        if (this.table[index] && this.table[index].length) {
            for (let i = 0; i < this.table[index].length; i++) {
                if (this.table[index][i][0] === key) {
                    this.table[index].splice(i, 1);
                    this.size--;
                    return true;
                }
            }
        } else {
            return false;
        }
    }

    display(){
        console.log("\nHashMap contents:");
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                console.log(i, "->", this.table[i]);
            }
        }
    }
}

const ht = new HashTable(10); // Puede aumentarse el tamaño para evitar colisiones

ht.set("France", 111);
ht.set("Spain", 150);
ht.set("Italy", 192);
ht.set("México", 200);

ht.display();
console.log(ht.get("México")); // Obtener el valor de México: 200
console.log(ht.get("Canada")); // Undefined
console.log(ht.remove("Canada")); // False

console.log("\nHashMap size: ", ht.size);

ht.remove("Spain"); // True
ht.display();
