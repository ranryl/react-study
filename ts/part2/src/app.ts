// tsconfig.json 文件
// tsc -w 将监视目录下文件，自动编译
console.log('hello');
let a = 100;
let b = 100;

let box = document.getElementById("box");
// if (box !== null) {
//     box.addEventListener('click', function() {
//         alert('hello');
//     });
// }
box?.addEventListener('click', function() {
    alert('hello');
});
