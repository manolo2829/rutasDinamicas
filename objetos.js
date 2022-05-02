const Container = document.querySelector('.contenedorProducto')
console.log(Container)
const Objetos = [
    {
        title: 'carta1',
        subtitle: 'buenas',
        description: 'holas como estas todo bien vos amen goe no god no'
    },{
        title: 'carta2',
        subtitle: 'buenas',
        description: 'holas como estas todo bien vos amen goe no god no'
    },{
        title: 'carta3',
        subtitle: 'bu3enas',
        description: 'holas como estas todo bien vos amen goe no god no'
    },{
        title: 'carta4',
        subtitle: 'buenas',
        description: 'holas como estas todo bien vos amen goe no god no'
    },{
        title: 'carta5',
        subtitle: 'buenas',
        description: 'holas como estas todo bien vos amen goe no god no'
    },{
        title: 'carta6',
        subtitle: 'buenas',
        description: 'holas como estas todo bien vos amen goe no god no'
    },{
        title: 'carta7',
        subtitle: 'buenas',
        description: 'holas como estas todo bien vos amen goe no god no'
    },{
        title: 'carta8',
        subtitle: 'buenas',
        description: 'holas como estas todo bien vos amen goe no god no'
    },
]

const valores = window.location.search;

const obtenerValores = () => {
    const urlParams = new URLSearchParams(valores)
    if(urlParams.has('title')){
        const producto = urlParams.get('title')
        const productoObtenido = Objetos.filter(item => item.title.trim() === producto.trim())
        const Item = productoObtenido[0]
        console.log(Item)
        crearBody(Item)
    }
}

const crearBody = (item) =>{
    const Content = `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${item.title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${item.subtitle}</h6>
                <p class="card-text">${item.description}</p>
            </div>
        </div>
    `;
    
    Container.innerHTML = Content;
    console.log(Container)
}

obtenerValores()

