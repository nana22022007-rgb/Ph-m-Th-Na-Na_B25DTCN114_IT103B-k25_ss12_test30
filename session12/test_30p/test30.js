let products = [
{ id: "P01", name: "Laptop MacBook Pro M3", price: 2000, category: "Laptop", inStock: true },
{ id: "P02", name: "Chuột không dây Logitech", price: 45, category: "Phụ kiện", inStock: true },
{ id: "P03", name: "Bàn phím cơ Keychron", price: 95, category: "Phụ kiện", inStock: false },
{ id: "P04", name: "Man hinh Dell UltraSharp", price: 450, category: "Man hinh", inStock: true },
{ id: "P05", name: "Tai nghe Sony WH-1000XM5", price: 350, category: "Phụ kiện", inStock: true }
];

function filterStudent() {
    let listStudent = products.filter((products,index)=>{
        return products.inStock === true ;
    })
    console.log(listStudent);
}
filterStudent();

function inf() {
    let infStudent = products.filter((products)=>{
        return products.category === "Phụ kiện";
    });
    let output ="";
    products.forEach((s)=>{
        output+= `${s.name}\n`
    });
    console.log(output);
    
}
inf();