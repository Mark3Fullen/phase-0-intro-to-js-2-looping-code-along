// Code your solutions in this file
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }

  return gifts;
}

wrapGifts(gifts); 



function writeCards(name, event) {

    let note = [];  

    for(let i = 0; i < name.length; i++) {
        note.push(`Thank you, ${name[i]}, for the wonderful surprise gift!`)
    }

    return note;
}

writeCards(name, event)


function countDown() {

  let i = 10

  while (i >= 0) {
    console.log(i--);
  }

  return i


}