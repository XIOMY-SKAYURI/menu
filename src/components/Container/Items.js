let product = [
    { id: 1, tipo: 'selvatico', nombre: 'juane', price: '20', foto: 'https://peru.info/Portals/0/Images/Productos/6/137-imagen-12599172020.jpg' },
    { id: 1, tipo: 'criollo', nombre: 'lomo saltado', price: '20', foto: 'https://decomidaperuana.com/wp-content/uploads/2020/10/lomo-saltado.jpg' },
    { id: 1, tipo: 'mariscos', nombre: 'ceviche', price: '20', foto: 'https://t2.rg.ltmcdn.com/es/posts/7/4/1/ceviche_peruano_18147_600.jpg' }
]

export const gFetch = new Promise ((resolve,reject) => {
let condition = true;

if(condition) {
    setTimeout(() => {
resolve(product)


    },2000)
}else{
    reject('404')
}


})


