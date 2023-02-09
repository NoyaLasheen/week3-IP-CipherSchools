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

const content = `
    <main>
        <ul>
            <li>Name: ${newPencilBox.name} </li>
            <li>Size: ${newPencilBox.size} </li>
            <li>Color: ${newPencilBox.color} </li>
            <li>Zip Length Left: ${newPencilBox.zipLength.left} </li>
            <li>Zip Length Right: ${newPencilBox.zipLength.right} </li>
            <li>Zip Length Top: ${newPencilBox.zipLength.top}</li>
            <li>Zip Status ${newPencilBox.zipOpen}</li>
        </ul>
    </main>
`;

document.body.innerHTML = content;
console.log('The Pencil Box Object:', newPencilBox);
console.log('Size:',newPencilBox.size);
console.log("Date Purchased:", newPencilBox.datePurchased)
console.log("Date Purchased:", newPencilBox.pencilBoxAge());
