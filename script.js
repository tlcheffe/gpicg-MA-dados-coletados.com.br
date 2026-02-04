const restaurantes = [
 
  // ================= DESATIVADOS =================
  { nome: "Dom Francisco Restaurante", endereco: "R. do Giz, 155 - Centro, São Luís - MA", situacao: "Desativa" },
  { nome: "Restaurante Sabores da GIH", endereco: "Rua Afonso Pena, 20 - Centro, São Luís - MA", situacao: "Desativa" },
  { nome: "Cozinha da Terra", endereco: "R. Portugal, 302B - Centro, São Luís - MA", situacao: "Desativa" },
  { nome: "Cozinha Ancestral", endereco: "Av. Beira-Mar, 384 - Centro, São Luís - MA", situacao: "Desativa" },
  { nome: "Sabor do Maranhão", endereco: "Rua dos Afogados, 47 - Centro, São Luís - MA", situacao: "Desativa" },
  { nome: "Cuxá da Ilha", endereco: "R. João Vital, 42 - Centro Histórico, São Luís - MA", situacao: "Desativa" },
  { nome: "La Pizzeria", endereco: "R. do Giz, 107 - Centro, São Luís - MA", situacao: "Desativa" },
  { nome: "Naturista – Restaurante Vegetariano", endereco: "Rua São Pantaleão, 147 - Centro, São Luís - MA", situacao: "Desativa" },
  { nome: "Restaurante Mundial", endereco: "R. das Crioulas, 127 - Centro, São Luís - MA", situacao: "Desativa" },
  { nome: "Elis Gasparello – Café e Confeitaria", endereco: "Rua de Nazaré, 16 - Centro, São Luís - MA", situacao: "Desativa" },
  { nome: "Restaurante Francesinha Gourmet", endereco: "R. dos Afogados, 282 - Centro, São Luís - MA", situacao: "Desativa" },
  { nome: "Comida Caseira da Norma", endereco: "Rua Barão de Itapary - Centro, São Luís - MA", situacao: "Desativa" },
  { nome: "L.G. da Silva Restaurante", endereco: "Av. Getúlio Vargas, 1677 - Canto da Fabril, São Luís - MA", situacao: "Desativa" },
  { nome: "Restaurante Neves", endereco: "Centro, São Luís - MA", situacao: "Desativa" },
  { nome: "ACASA – Sentidos Coletivos", endereco: "Av. Beira-Mar, 480 - Centro Histórico, São Luís - MA", situacao: "Desativa" },
  { nome: "Restaurante do Paulo", endereco: "Rua Antônio Rayol - Centro, São Luís - MA", situacao: "Desativa" },
  { nome: "Comer Bem Restaurante e Lanchonete", endereco: "R. São Pantaleão, 142 - Centro, São Luís - MA", situacao: "Desativa" },
  { nome: "Restaurante Canto da Tina", endereco: "R. Jacinto Maia, 495 - Centro, São Luís - MA", situacao: "Desativa" },
  { nome: "Lua Bistrô", endereco: "Av. Dom Pedro II - Centro Histórico, São Luís - MA", situacao: "Desativa" },
  { nome: "Restaurante Espeto Expresso", endereco: "R. de Santana, 576 - Centro, São Luís - MA", situacao: "Desativa" },
  { nome: "Bar & Restaurante Sabor Especial", endereco: "Parque 15 de Novembro - Centro, São Luís - MA", situacao: "Desativa" },
  { nome: "Restaurante Sabor Maranhense (490)", endereco: "R. das Crioulas, 490 - Centro, São Luís - MA", situacao: "Desativa" },
  { nome: "Restaurante e Lanchonete Pimenta", endereco: "R. Barão de Itapari, 306 - Centro, São Luís - MA", situacao: "Desativa" },
  { nome: "China House Restaurante e Lanchonete", endereco: "R. de Santana, 384 - Centro, São Luís - MA", situacao: "Desativa" },
  { nome: "Toda Hora Restaurante e Lanchonete", endereco: "R. das Crioulas, 203 - Centro, São Luís - MA", situacao: "Desativa" },
  { nome: "Restaurante Dom Gaby", endereco: "R. da Paz, 655 - Centro, São Luís - MA", situacao: "Desativa" },
  { nome: "Big Hen Restaurante e Lanchonete", endereco: "R. Grande, 415 - Centro, São Luís - MA", situacao: "Desativa" },
  { nome: "Mir – Restaurante e Lanchonete", endereco: "R. Godofredo Viana, 141 - Centro, São Luís - MA", situacao: "Desativa" },
  { nome: "Reri Restaurante", endereco: "R. de Santana, 415 - Centro, São Luís - MA", situacao: "Desativa" },
  { nome: "Restaurante El Shaday", endereco: "R. de Santa Rita, 340 - Centro, São Luís - MA", situacao: "Desativa" },
  { nome: "Restaurante Brilho do Sol", endereco: "R. da Saúde, 224B - Centro, São Luís - MA", situacao: "Desativa" },
  { nome: "Dayana Lanches Restaurante", endereco: "R. Oswaldo Cruz, 1186 - Diamante, São Luís - MA", situacao: "Desativa" },
  { nome: "Restaurante Dona do Tempero", endereco: "R. de Santana, 223 - Centro, São Luís - MA", situacao: "Desativa" },
  { nome: "Restaurante Bom Paladar (Getúlio Vargas)", endereco: "Av. Getúlio Vargas, 1701 - Monte Castelo, São Luís - MA", situacao: "Desativa" },
  { nome: "Pizza Club (Centro)", endereco: "Centro, São Luís - MA", situacao: "Desativa" },
  { nome: "Dirce Restaurante", endereco: "R. Antônio Rayol - Centro, São Luís - MA", situacao: "Desativa" },
  { nome: "Restaurante MM Food Service", endereco: "Centro, São Luís - MA", situacao: "Desativa" },
  { nome: "Restaurante Festança do Mar", endereco: "R. do Giz - Centro, São Luís - MA", situacao: "Desativa" },
  { nome: "Restaurante Paladar (Self Service)", endereco: "R. do Sol, 45 - Centro, São Luís - MA", situacao: "Desativa" },
  { nome: "Restaurante Villa Brasileira", endereco: "Rua Isaac Martins Barrocas, 42 - Centro, São Luís - MA", situacao: "Desativa" },
  { nome: "Restaurante Proteção de São José de Ribamar", endereco: "Beco dos Catraeiros - Centro, São Luís - MA", situacao: "Desativa" },
  { nome: "Restaurante Delícias da Fonte", endereco: "R. do Ribeirão - Centro, São Luís - MA", situacao: "Desativa" },
  { nome: "Restaurante Saborear", endereco: "R. de Santaninha - Centro, São Luís - MA", situacao: "Desativa" },
  { nome: "Restaurante WNH", endereco: "R. do Mocambo, 328 - Centro, São Luís - MA", situacao: "Desativa" },
  { nome: "Restaurante e Churrascaria Q'Delícia", endereco: "R. da Paz, 433 - Centro, São Luís - MA", situacao: "Desativa" },
  { nome: "Restaurante Dona Maria", endereco: "Av. Silva Maia - Centro, São Luís - MA", situacao: "Desativa" },
  { nome: "Juiz Restaurante Mineiro", endereco: "R. da Paz - Centro, São Luís - MA", situacao: "Desativa" },
  { nome: "Burger Night Centro", endereco: "Centro, São Luís - MA", situacao: "Desativa" },
  { nome: "CeB Churrasco", endereco: "Rua da Palma - Centro, São Luís - MA", situacao: "Desativa" },
  { nome: "Quitanda do Chef", endereco: "R. da Palma - Centro, São Luís - MA", situacao: "Desativa" },
  { nome: "Restaurante Bela Vista", endereco: "R. das Crioulas, 119 - Centro, São Luís - MA", situacao: "Desativa" },
  { nome: "Restaurante Faraó", endereco: "R. do Egito, 241 - Centro, São Luís - MA", situacao: "Desativa" },
  { nome: "Comida Gostosa Restaurante", endereco: "Praça Manoel Beckman - Centro, São Luís - MA", situacao: "Desativa" },

  // ================= ATIVOS =================
  { nome: "Cafofinho da Tia Dica", endereco: "Trav. Marcelino de Almeida, 173 - Centro, São Luís - MA", situacao: "Ativa" },
  { nome: "Sabor da Ilha", endereco: "R. do Ribeirão - Centro, São Luís - MA", situacao: "Ativa" },
  { nome: "Pedra de Sal LTDA", endereco: "R. Nazaré 173 - Centro, São Luís - MA", situacao: "Ativa" },
  { nome: "Skina Restaurante", endereco: "Centro, São Luís - MA", situacao: "Ativa" },
  { nome: "Bar Meu Bem", endereco: "R. do Giz, 426 - Centro, São Luís - MA", situacao: "Ativa" },
  { nome: "Casa Real Empório", endereco: "R. Eng. Couto Fernandes, 59 - Centro, São Luís - MA", situacao: "Ativa" },
  { nome: "Senac Restaurante Escola", endereco: "R. Nazaré, 242 - Centro, São Luís - MA", situacao: "Ativa" },
  { nome: "Porto Seguro Bar e Restaurante", endereco: "Av. Sen. Vitorino Freire - Centro, São Luís - MA", situacao: "Ativa" },
  { nome: "MS Restaurante", endereco: "R. da Paz, 414 - Centro, São Luís - MA", situacao: "Ativa" },
  { nome: "Casarão Grill", endereco: "R. do Passeio, 124 - Centro, São Luís - MA", situacao: "Ativa" },
  { nome: "Restaurante Tudo de Bom", endereco: "R. Oswaldo Cruz, 907 - Centro, São Luís - MA", situacao: "Ativa" },
  { nome: "Souté Cozinha", endereco: "R. Oswaldo Cruz, 1106 - Centro, São Luís - MA", situacao: "Ativa" },
  { nome: "Restaurante Tio João", endereco: "Rua Rio Branco - Centro, São Luís - MA", situacao: "Ativa" },
  { nome: "Restaurante do França", endereco: "R. Barão de Itapari - Centro, São Luís - MA", situacao: "Ativa" },
  { nome: "Restaurante e Lanchonete China", endereco: "Rua Grande - Centro, São Luís - MA", situacao: "Ativa" },
  { nome: "Américo Pães e Café", endereco: "R. da Palma, 143 - Centro Histórico, São Luís - MA", situacao: "Ativa" },
  { nome: "Ôh Brasileirão", endereco: "Praça João Lisboa - Centro, São Luís - MA", situacao: "Ativa" },
  { nome: "Zague Restaurante", endereco: "R. do Mocambo, 396 - Centro, São Luís - MA", situacao: "Ativa" },
  { nome: "Restaurante da Amizade", endereco: "R. Jacinto Maia, 309 - Centro, São Luís - MA", situacao: "Ativa" },
  { nome: "Flor de Vinagreira", endereco: "R. da Estrela, 220 - Centro, São Luís - MA", situacao: "Ativa" },
  { nome: "Sandubas", endereco: "Rua Oswaldo Cruz, 415 - Centro, São Luís - MA", situacao: "Ativa" },
  { nome: "Restaurante Tempero da Ilha", endereco: "R. São João, 279 - Centro, São Luís - MA", situacao: "Ativa" },
  { nome: "Pizzaria Baruk", endereco: "R. do Norte, 870 - Centro, São Luís - MA", situacao: "Ativa" },
  { nome: "Bar e Restaurante da Cruz", endereco: "R. da Manga, 138 - Centro, São Luís - MA", situacao: "Ativa" },
  { nome: "Restaurante Proteção de São José", endereco: "Mercado das Tulhas - Centro, São Luís - MA", situacao: "Ativa" },
  { nome: "Delícias Caseiras Restaurante", endereco: "Tv. Venceslau Braz - Canto da Fabril, São Luís - MA", situacao: "Ativa" },
  { nome: "Restaurante KK e K", endereco: "Av. Getúlio Vargas, 1652 - Monte Castelo, São Luís - MA", situacao: "Ativa" },
  { nome: "M&M Restaurante e Lanchonete", endereco: "R. da Manga, 44 - Centro, São Luís - MA", situacao: "Ativa" },
  { nome: "Class Restaurante", endereco: "Rua dos Prazeres - Centro, São Luís - MA", situacao: "Ativa" },
  { nome: "Restaurante do Mineiro", endereco: "Av. Getúlio Vargas, 1661 - Canto da Fabril, São Luís - MA", situacao: "Ativa" },
  { nome: "Restaurante e Lanchonete Leyla e Cia", endereco: "R. das Crioulas, 101 - Centro, São Luís - MA", situacao: "Ativa" },
  { nome: "Nativus Açaí", endereco: "R. da Alegria, 07 - Centro, São Luís - MA", situacao: "Ativa" },
  { nome: "Restaurante O Careca", endereco: "Tv. da Passagem - Centro, São Luís - MA", situacao: "Ativa" },
  { nome: "Pastelaria 420", endereco: "R. de Santana, 420 - Centro, São Luís - MA", situacao: "Ativa" },
  { nome: "IEMA Gastronomia", endereco: "R. do Egito, 282 - Centro, São Luís - MA", situacao: "Ativa" },
  { nome: "Restaurante Sabor Maranhense (137)", endereco: "R. das Crioulas, 137 - Centro, São Luís - MA", situacao: "Ativa" },
  { nome: "Café Guará", endereco: "R. São João, 393 - Centro, São Luís - MA", situacao: "Ativa" },
  { nome: "Restaurante do Gaúcho", endereco: "R. Cândido Ribeiro, 106 - Centro, São Luís - MA", situacao: "Ativa" },
  { nome: "Sabor e Saúde", endereco: "Mercado Central - Centro, São Luís - MA", situacao: "Ativa" },
  { nome: "Restaurante Bom Paladar (Mercado Central)", endereco: "Mercado Central - Centro, São Luís - MA", situacao: "Ativa" },
  { nome: "JR Lanches e Refeições", endereco: "Mercado Central - Centro, São Luís - MA", situacao: "Ativa" },
  { nome: "Restaurante Ki-Sabor (da Zeka)", endereco: "Mercado Central - Centro, São Luís - MA", situacao: "Ativa" },
  { nome: "Restaurante da Ana", endereco: "Mercado Central - Centro, São Luís - MA", situacao: "Ativa" },
  { nome: "Rainha do Mar Restaurante", endereco: "Mercado das Tulhas - Centro, São Luís - MA", situacao: "Ativa" },
  { nome: "Restaurante da Vovó Roxa", endereco: "Mercado das Tulhas - Centro, São Luís - MA", situacao: "Ativa" },
  { nome: "Metal Head's", endereco: "R. do Ribeirão, 169 - Centro, São Luís - MA", situacao: "Ativa" },
  { nome: "Restaurante das Meninas", endereco: "R. do Ribeirão - Centro, São Luís - MA", situacao: "Ativa" },
  { nome: "Lanche Bem", endereco: "R. do Ribeirão - Centro, São Luís - MA", situacao: "Ativa" },
  { nome: "Tebas Café & Cozinha", endereco: "R. do Ribeirão, 140B - Centro, São Luís - MA", situacao: "Ativa" },
  { nome: "Star Massa Pizzaria", endereco: "R. do Ribeirão - Centro, São Luís - MA", situacao: "Ativa" },
  { nome: "Café e Poesia", endereco: "Praça dos Poetas - Centro, São Luís - MA", situacao: "Ativa" },
  { nome: "Café e Prosa", endereco: "Praça dos Poetas - Centro, São Luís - MA", situacao: "Ativa" },
  { nome: "Restaurante Self-Service Reviver", endereco: "Trav. Marcelino de Almeida - Centro, São Luís - MA", situacao: "Ativa" },
  { nome: "Black Cat Pub", endereco: "R. Nazareth, 68 - Centro, São Luís - MA", situacao: "Ativa" },
  { nome: "Mr. Cold", endereco: "Beco Catarina Mina - Centro, São Luís - MA", situacao: "Ativa" },
  { nome: "Bar do Porto", endereco: "Rua Portugal - Centro, São Luís - MA", situacao: "Ativa" },
  { nome: "Catraeiros Bar", endereco: "Rua Portugal - Centro, São Luís - MA", situacao: "Ativa" },
  { nome: "Samambaia", endereco: "Rua Portugal - Centro, São Luís - MA", situacao: "Ativa" },
  { nome: "The Rock SLZ", endereco: "Rua Portugal, 59 - Centro, São Luís - MA", situacao: "Ativa" },
  { nome: "O Rei do Beiju Recheado", endereco: "R. da Estrela - Centro, São Luís - MA", situacao: "Ativa" },
  { nome: "Catarina Mina Bar e Restaurante", endereco: "R. Djalma Dutra, 121 - Centro, São Luís - MA", situacao: "Ativa" },
  { nome: "Restaurante Tempero Caseiro", endereco: "Rua de Nazaré, 110 - Centro, São Luís - MA", situacao: "Ativa" },
  { nome: "Caçarola Bistrô", endereco: "R. Nazaré - Centro, São Luís - MA", situacao: "Ativa" },
  { nome: "Tem Café", endereco: "R. da Palma, 610 - Centro, São Luís - MA", situacao: "Ativa" },
  { nome: "Restaurante Quintas da Lisboa", endereco: "Praça João Lisboa - Centro, São Luís - MA", situacao: "Ativa" },
  { nome: "Restaurante Cantinho Caseiro", endereco: "R. João Vital - Centro, São Luís - MA", situacao: "Ativa" },
  { nome: "Resenha SLZ", endereco: "Rua do Trapiche - Praia Grande, São Luís - MA", situacao: "Ativa" },
  { nome: "Casa do Lanche", endereco: "Rua Grande - Centro, São Luís - MA", situacao: "Ativa" },
  { nome: "Restaurante Bom de +", endereco: "R. de Santana, 576 - Centro, São Luís - MA", situacao: "Ativa" },
  { nome: "Restaurante Bella Rosa", endereco: "Alameda Escuro - Centro, São Luís - MA", situacao: "Ativa" },
  { nome: "Restaurante Recanto das Delícias", endereco: "R. Jacinto Maia, 233 - Centro, São Luís - MA", situacao: "Ativa" },
  { nome: "Restaurante e Lanchonete da Thalita", endereco: "R. Barão de Itapari - Centro, São Luís - MA", situacao: "Ativa" },
  { nome: "Restaurante Comida Caseira da Nina", endereco: "Mercado Central - Centro, São Luís - MA", situacao: "Ativa" },
  { nome: "Restaurante Delícia", endereco: "Mercado Central - Centro, São Luís - MA", situacao: "Ativa" },
  { nome: "Restaurante Deus é Fiel", endereco: "Mercado Central - Centro, São Luís - MA", situacao: "Ativa" },
  { nome: "Restaurante Elisangela", endereco: "Mercado Central - Centro, São Luís - MA", situacao: "Ativa" }
  
  
];


// Completa até 250 linhas
while (restaurantes.length < 250) {
  restaurantes.push({ nome: "", endereco: "", situacao: "" });
}

const tbody = document.getElementById("lista-restaurantes");

restaurantes.forEach((r, index) => {
  const tr = document.createElement("tr");

  const saved = localStorage.getItem("rest_" + index) || "";

  tr.innerHTML = `
    <td>${index + 1}</td>
    <td>${r.nome}</td>
    <td>${r.endereco}</td>
    <td>${r.situacao}</td>
    <td class="status">
      <select onchange="salvar(${index}, this.value)">
        <option value="">---</option>
        <option value="✅" ${saved === "✅" ? "selected" : ""}>✅</option>
        <option value="❌" ${saved === "❌" ? "selected" : ""}>❌</option>
      </select>
    </td>
  `;
  tbody.appendChild(tr);
});

function salvar(index, valor) {
  localStorage.setItem("rest_" + index, valor);

}
function salvar(index, valor) {
  db.collection("marcacoes").doc(String(index)).set({
    valor: valor,
    usuario: usuario,
    atualizadoEm: new Date()
  });
}

const usuario = prompt("Digite seu nome:");

db.collection("marcacoes").onSnapshot(snapshot => {
  snapshot.forEach(doc => {
    const index = doc.id;
    const data = doc.data();

    const select = document.querySelector(
      `select[onchange="salvar(${index}, this.value)"]`
    );

    if (select) {
      select.value = data.valor;
      select.title = `Marcado por: ${data.usuario}`;
    }
  });
});

async function exportarRelatorio() {
  const snapshot = await db.collection("marcacoes").get();

  let csv = "Usuário;Estabelecimento;Marcação\n";

  snapshot.forEach(doc => {
    const index = parseInt(doc.id);
    const data = doc.data();

    const restaurante = restaurantes[index]?.nome || "Desconhecido";
    const usuario = data.usuario || "";
    const valor = data.valor || "";

    if (valor === "✅" || valor === "❌") {
      csv += `${usuario};${restaurante};${valor}\n`;
    }
  });

  baixarCSV(csv);
}

function baixarCSV(conteudo) {
  const blob = new Blob(["\uFEFF" + conteudo], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = "relatorio_gpicg.csv";
  link.click();

  URL.revokeObjectURL(url);
}

db.collection("marcacoes").onSnapshot(snapshot => {
  snapshot.forEach(doc => {
    const index = doc.id;
    const data = doc.data();

    const select = document.querySelector(
      `select[onchange="salvar(${index}, this.value)"]`
    );

    if (select) {
      select.value = data.valor;
      select.title = `Marcado por: ${data.usuario}`;
    }
  });
});

async function exportarPDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  doc.setFontSize(16);
  doc.text("Relatório Final – GPICG", 14, 15);

  doc.setFontSize(11);
  let y = 30;

  doc.text("Usuário", 14, y);
  doc.text("Estabelecimento", 60, y);
  doc.text("Marcação", 180, y);

  y += 6;

  const snapshot = await db.collection("marcacoes").get();

  snapshot.forEach(docSnap => {
    const index = parseInt(docSnap.id);
    const data = docSnap.data();

    const restaurante = restaurantes[index]?.nome || "Desconhecido";
    const usuario = data.usuario || "";
    const valor = data.valor || "";

    if (!valor) return;

    if (y > 280) {
      doc.addPage();
      y = 20;
    }

    doc.text(usuario, 14, y);
    doc.text(restaurante.substring(0, 60), 60, y);
    doc.text(valor, 185, y);

    y += 7;
  });

  doc.save("relatorio_final_gpicg.pdf");
}
