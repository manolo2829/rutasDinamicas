const Container = document.querySelector('.contenedor')
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


Objetos.map(item => {
    const Content = `
    <div class="card-body">
        <h5 class="card-title">${item.title}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${item.subtitle}</h6>
        <p class="card-text">${item.description}</p>
        <a href="./pages/objeto.html?title=${item.title}" class="card-link">Ver mas</a>
    </div>
    `;
    const Card = document.createElement('div')
    Card.classList.add('card')
    Card.style.width = '18rem'
    Card.innerHTML = Content;
    Container.appendChild(Card)
})

