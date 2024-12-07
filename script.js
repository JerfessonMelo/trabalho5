function storeProductDetails(id) {
    const products = [
        { id: "1", title: "Bicicleta Infantil", image: "imagens/BicicletaInfantil.png", description: "Uma bicicleta para crianças pequenas.", price: "R$ 249.98" },
        { id: "2", title: "Carrinho de Boneca", image: "imagens/CarrinhoParaBonecas.png", description: "Carrinho perfeito para bonecas.", price: "R$ 24.98" },
        { id: "3", title: "Poscher Vermelha", image: "imagens/CarrinhoPoscherVermelha.png", description: "Um carrinho esportivo em miniatura.", price: "R$ 99.98" },
        { id: "4", title: "Elevado de Brinquedos Girafa", image: "imagens/ElevadoBrinquedosGirafa.png", description: "Elevado para brincar com vários brinquedos.", price: "R$ 49.98" },
        { id: "5", title: "Escavadeira Maxx", image: "imagens/EscavadeiraMaxx.png", description: "Escavadeira de brinquedo para crianças.", price: "R$ 19.98" },
        { id: "6", title: "Espoleta Arminha Brinquedo", image: "imagens/EspoletaArminhaBrinquedo.png", description: "Arminha de brinquedo de espoleta.", price: "R$ 11.98" },
        { id: "7", title: "Fusca Corrida N58", image: "imagens/FuscaCorridaN58.png", description: "Fusca de brinquedo para corridas.", price: "R$ 34.98" },
        { id: "8", title: "Gelelé Slime", image: "imagens/GeleleSlimeUniconio.png", description: "Slime de unicórnio para crianças.", price: "R$ 9.98" },
        { id: "9", title: "Kit Ferramentas Educativas", image: "imagens/KitFerramentasInfantio.png", description: "Kit de ferramentas educativas para crianças.", price: "R$ 74.99" },
        { id: "10", title: "Kit Utensílios Cozinha Barbie", image: "imagens/KitUtensiliosCozinhaBarbie.png", description: "Kit de cozinha da Barbie.", price: "R$ 499.98" },
        { id: "11", title: "Pop Anti-Stress Infantil", image: "imagens/PopEletronicAntiStressInfantil.png", description: "Brinquedo anti-stress para crianças.", price: "R$ 9.98" },
        { id: "12", title: "Trato New Holland", image: "imagens/TratoNewHolland.png", description: "Trator New Holland de brinquedo.", price: "R$ 36.98" }
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
