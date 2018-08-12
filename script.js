const fills = document.querySelectorAll('.fill');
const empties = document.querySelectorAll('.empty');


var dragged;


 for ( const fill of fills ) {
     fill.addEventListener('dragstart', dragstart);
     fill.addEventListener('dragend', dragend);
 }


// si attiva allo start del drag del div
// (es. il colore diventa verde)
function dragstart(e){

    dragged = this;
    this.className += ' hold';
    setTimeout(() =>  (this.className = 'invisible'), 1);
}




// si attiva alla fine del drag del div
// il div riprende il suo stato iniziale
// (es. il colore diventa blu)
function dragend(){

    this.className = 'fill';
    //console.log('dragend');
}



/* DIV VUOTO */

for ( const empty of empties ) {
    empty.addEventListener('dragover', dragover);
    empty.addEventListener('dragenter', dragenter);
    empty.addEventListener('dragleave', dragleave);
    empty.addEventListener('drop', dragDrop);
}


function dragover(e){ 
     e.preventDefault();
    // console.log('dragover');
 }

// se il div trascinato passa sopra il div vuoto
// (es. il colore del div vuoto diventa giallo)
function dragenter(){ 
  //  console.log('dragenter');
    this.className += ' hovered';
}

// durante il drag
// se il div trascinato non copre il div vuoto
// (es. il colore del div vuoto ritorna rosso)
function dragleave(){
    this.className = 'empty';
 //   console.log('dragleave');
 }


// durante il drag
// se il div trascinato viene rilasciato nel div vuoto
// (es. il colore del div vuoto ritorna rosso) 
// il div viene trascinabile viene appeso a questo div
function dragDrop(e){
    this.className = 'empty';
this.append(dragged);
    console.dir(e);
}