// Carregar biblioteca Stripe
const stripe = require('stripe')('YOUR_SECRET_KEY'); // Substitua 'YOUR_SECRET_KEY' pela sua chave secreta do Stripe

// Função para criar o produto
async function createStripeProduct() {
    // Produtos e preços
    const products = [
        {
            name: "Diagnóstico Remoto",
            description: "Diagnóstico remoto de PC/Laptop em até 15 minutos.",
            price: 5900, // Preço em centavos (R$59,00)
            currency: "gbp",
            recurring: false
        },
        {
            name: "Diagnóstico Remoto (30 min adicionais)",
            description: "Suporte remoto adicional por 30 minutos.",
            price: 3000, // Preço em centavos (R$30,00)
            currency: "gbp",
            recurring: false
        },
        {
            name: "Call-out On-site (Dia)",
            description: "Atendimento técnico presencial durante o dia.",
            price: 8900, // Preço em centavos (R$89,00)
            currency: "gbp",
            recurring: false
        },
        {
            name: "Call-out On-site (Noite)",
            description: "Atendimento técnico presencial à noite.",
            price: 12900, // Preço em centavos (R$129,00)
            currency: "gbp",
            recurring: false
        },
        {
            name: "Upgrade SSD 1TB",
            description: "Instalação de SSD 1TB em PC/Laptop.",
            price: 19900, // Preço em centavos (R$199,00)
            currency: "gbp",
            recurring: false
        },
        {
            name: "Upgrade RAM 16GB",
            description: "Upgrade de memória RAM para 16GB.",
            price: 14900, // Preço em centavos (R$149,00)
            currency: "gbp",
            recurring: false
        },
        {
            name: "Websites Premium - Desenvolvimento",
            description: "Desenvolvimento de site premium com design e manutenção 24/7.",
            price: 149900, // Preço em centavos (R$1,499,00)
            currency: "gbp",
            recurring: false
        },
        {
            name: "Websites Premium - Manutenção Mensal",
            description: "Manutenção contínua do site premium 24/7.",
            price: 9900, // Preço em centavos (R$99,00/mês)
            currency: "gbp",
            recurring: true // Manutenção mensal (recorrente)
        },
        {
            name: "Retainer PME - Bronze",
            description: "Plano mensal de suporte para pequenas empresas com SLA até 8h.",
            price: 19900, // Preço em centavos (R$199,00/mês)
            currency: "gbp",
            recurring: true
        },
        {
            name: "Retainer PME - Silver",
            description: "Plano mensal de suporte para pequenas empresas com SLA até 4h.",
            price: 39900, // Preço em centavos (R$399,00/mês)
            currency: "gbp",
            recurring: true
        },
        {
            name: "Retainer PME - Gold",
            description: "Plano mensal de suporte para pequenas empresas com SLA até 1h.",
            price: 79900, // Preço em centavos (R$799,00/mês)
            currency: "gbp",
            recurring: true
        }
    ];

    try {
        for (const product of products) {
            // Criar o produto
            const stripeProduct = await stripe.products.create({
                name: product.name,
                description: product.description
            });

            // Criar o preço
            const stripePrice = await stripe.prices.create({
                product: stripeProduct.id,
                unit_amount: product.price,
                currency: product.currency,
                recurring: product.recurring ? { interval: 'month' } : null
            });

            console.log(`Produto criado: ${stripeProduct.name}`);
            console.log(`Preço criado: £${product.price / 100} - ${stripePrice.id}`);
        }
    } catch (error) {
        console.error('Erro ao criar produtos e preços no Stripe:', error);
    }
}

// Chamar a função para criar os produtos e preços
createStripeProduct();
