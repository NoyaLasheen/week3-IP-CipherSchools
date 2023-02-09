const pencilbox = {
    name: "A pencil box",
    size: 30,
    color: 'red',
    ziplength: {
        left: 12,
        right: 12,
        top: 24,
    },
    zipOpen: false,
    toggleZip: function (zipStatus) {
        this.zipOpen = zipStatus
    },
}

console.log(pencilbox);

console.log(pencilbox.color);
console.log(pencilbox.ziplength.left);

var sizeValue = "size"
console.log(pencilbox['size']);
console.log(pencilbox[sizeValue])