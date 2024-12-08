function storeProductDetails(id) {
    const products = [
        { id: "1", title: "Bicicleta Infantil", image: "imagens/BicicletaInfantil.png", description: "A bicicleta infantil Super Aventura é ideal para crianças de 3 a 7 anos, oferecendo uma combinação perfeita de diversão e segurança. Com um design vibrante e detalhes exclusivos, ela transforma cada passeio em uma aventura inesquecível.", price: "R$ 249.98" },
        { id: "2", title: "Carrinho de Boneca", image: "imagens/CarrinhoParaBonecas.png", description: "O Carrinho de Boneca Encanto é o acessório perfeito para crianças que adoram cuidar de suas bonecas com carinho. Com um design elegante e colorido, ele proporciona horas de diversão e estimula a imaginação ao criar histórias e brincadeiras incríveis.", price: "R$ 24.98" },
        { id: "3", title: "Poscher Vermelha", image: "imagens/CarrinhoPoscherVermelha.png", description: "A Porsche Kids Turbo é o carro elétrico infantil que combina estilo, diversão e segurança em uma experiência única! Inspirado nos modelos clássicos da Porsche, esse carrinho elétrico é perfeito para os pequenos pilotos que adoram velocidade e elegância.", price: "R$ 99.98" },
        { id: "4", title: "Elevado de Brinquedos Girafa", image: "imagens/ElevadoBrinquedosGirafa.png", description: "O Elevador Girafa Divertido é um brinquedo encantador que une diversão e aprendizado em um só produto! Com um design lúdico em forma de girafa, ele é perfeito para estimular a criatividade e a coordenação motora das crianças enquanto elas exploram o funcionamento do elevador.", price: "R$ 49.98" },
        { id: "5", title: "Escavadeira Maxx", image: "imagens/EscavadeiraMaxx.png", description: "A Escavadeira Maxx é o brinquedo perfeito para pequenos exploradores que adoram aventuras no mundo da construção! Com design robusto e funcionalidades realistas, ela proporciona horas de diversão enquanto estimula a criatividade e a coordenação motora das crianças.", price: "R$ 19.98" },
        { id: "6", title: "Espoleta Arminha Brinquedo", image: "imagens/EspoletaArminhaBrinquedo.png", description: "A Arminha de Brinquedo Espoleta é diversão garantida para crianças que adoram ação e brincadeiras emocionantes! Com um design estiloso e funcionalidades seguras, ela proporciona momentos inesquecíveis de entretenimento, sempre priorizando a segurança e a imaginação.", price: "R$ 11.98" },
        { id: "7", title: "Fusca Corrida N58", image: "imagens/FuscaCorridaN58.png", description: "O Fusca de Corrida N58 em miniatura é uma réplica incrível para colecionadores e apaixonados por automobilismo. Inspirado nos clássicos modelos de corrida, ele traz detalhes precisos e um design que remete à adrenalina das pistas!", price: "R$ 34.98" },
        { id: "8", title: "Gelelé Slime", image: "imagens/GeleleSlimeUniconio.png", description: "A Gelelé Slime Unicórnio é a escolha perfeita para quem adora diversão mágica e brilhante! Inspirada no universo encantado dos unicórnios, essa slime traz cores vibrantes, texturas incríveis e muito brilho, tornando cada momento de brincadeira uma experiência única.", price: "R$ 9.98" },
        { id: "9", title: "Kit Ferramentas Educativas", image: "imagens/KitFerramentasInfantio.png", description: "O Kit Ferramentas Educativas é o brinquedo ideal para crianças curiosas que adoram montar, desmontar e criar! Com ferramentas coloridas e seguras, ele transforma cada brincadeira em uma oportunidade de aprendizado, estimulando a criatividade, a coordenação motora e o pensamento lógico.", price: "R$ 74.99" },
        { id: "10", title: "Kit Utensílios Cozinha Barbie", image: "imagens/KitUtensiliosCozinhaBarbie.png", description: "O Kit de Utensílios de Cozinha Barbie é perfeito para crianças que adoram brincar de cozinhar e explorar o mundo da culinária de maneira divertida e estilosa! Com utensílios encantadores e de alta qualidade, este kit permite que as pequenas chefs preparem suas receitas com muito charme, inspiradas no universo da Barbie.", price: "R$ 499.98" },
        { id: "11", title: "Pop Anti-Stress Infantil", image: "imagens/PopEletronicAntiStressInfantil.png", description: "O Pop Anti-Stress Infantil é o brinquedo perfeito para ajudar as crianças a relaxarem, se divertirem e melhorarem a concentração de forma simples e divertida! Com botões coloridos e de fácil manuseio, ele proporciona uma experiência sensorial única que acalma, distrai e é super atraente para os pequenos.", price: "R$ 9.98" },
        { id: "12", title: "Trato New Holland", image: "imagens/TratorNewHolland.png", description: "O Trator New Holland de Brinquedo é a escolha perfeita para pequenos agricultores e entusiastas da maquinaria agrícola! Com design realista e robusto, este trator é ideal para brincar ao ar livre, ajudando as crianças a desenvolverem habilidades motoras enquanto exploram o mundo da agricultura de forma divertida e educativa.", price: "R$ 36.98" }
    ];

    const product = products.find(p => p.id === id);

    if (product) {
        localStorage.setItem("productDetails", JSON.stringify(product));
        window.location.href = "detalhes.html";
    }
}

window.onload = function() {
    const productDetails = JSON.parse(localStorage.getItem("productDetails"));

    if (productDetails) {
        document.getElementById("product-title").textContent = productDetails.title;
        document.getElementById("product-image").src = productDetails.image;
        document.getElementById("product-description").textContent = productDetails.description;
        document.getElementById("product-price").textContent = `Preço: ${productDetails.price}`;
    } else {
        document.getElementById("detalhes").innerHTML = "<p>Produto não encontrado.</p>";
    }
};

function adicionarAoCarrinhoAtual() {
    const productElement = event.target.closest('.product');
    const productId = productElement.getAttribute('data-id');
    const productName = productElement.querySelector('p').textContent;
    const productPrice = productElement.querySelector('span').textContent;
    const productImage = productElement.querySelector('img').src;

    const product = {
        id: productId,
        name: productName,
        price: productPrice,
        image: productImage
    };

    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    carrinho.push(product);

    localStorage.setItem('carrinho', JSON.stringify(carrinho));

    alert(`${productName} foi adicionado ao carrinho!`);
}

window.onload = function() {
    carregarCarrinho();
};

function carregarCarrinho() {
    const carrinhoLista = document.getElementById('carrinhoLista');
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    if (carrinho.length === 0) {
        carrinhoLista.innerHTML = "<p>O carrinho está vazio!</p>";
    } else {
        carrinhoLista.innerHTML = '';
        carrinho.forEach((produto, index) => {
            const produtoDiv = document.createElement('div');
            produtoDiv.classList.add('product');
            produtoDiv.innerHTML = `
                <img src="${produto.image}" alt="${produto.name}"> 
                <p>${produto.name}</p>
                <span>${produto.price}</span>
                <button onclick="removerDoCarrinho(${index})">Remover</button>
            `;
            carrinhoLista.appendChild(produtoDiv);
        });
    }
}

function removerDoCarrinho(index) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    carrinho.splice(index, 1);
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    carregarCarrinho();
}

function finalizarCompra() {
    alert("Compra finalizada com sucesso!");
    localStorage.removeItem('carrinho');
    carregarCarrinho();
}
