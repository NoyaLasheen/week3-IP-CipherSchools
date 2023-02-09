import pencilBox from "./class19-pencilBox-CipherSchools";

const newPencilBox = new pencilBox(
    "Pencil Box", 
    30, 
    'red', 
    12, 
    12, 
    24, 
    false,
    '2020-03-09'
    );

console.log('The Pencil Box Object:', newPencilBox);
console.log('Size:',newPencilBox.size);
console.log("Date Purchased:", newPencilBox.datePurchased)
console.log("Date Purchased:", newPencilBox.pencilBoxAge());
