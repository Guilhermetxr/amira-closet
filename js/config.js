/* ============================================================
   CONFIGURAÇÃO DO PROJETO
   ------------------------------------------------------------
   1) Crie um projeto em https://console.firebase.google.com
   2) Ative  Authentication > Sign-in method > E-mail/senha
   3) Ative  Firestore Database (modo produção)
   4) Em "Configurações do projeto > Seus apps > Web", copie o
      objeto de configuração e cole abaixo, no lugar dos "COLE_AQUI".

   Enquanto os campos não forem preenchidos, o site roda em
   MODO DEMONSTRAÇÃO: os dados ficam salvos apenas no navegador
   (localStorage) e servem para testar o layout e o painel.
   ============================================================ */

export const firebaseConfig = {
  apiKey: "COLE_AQUI",
  authDomain: "COLE_AQUI",
  projectId: "COLE_AQUI",
  storageBucket: "COLE_AQUI",
  messagingSenderId: "COLE_AQUI",
  appId: "COLE_AQUI",
};

/* Versão do SDK do Firebase carregada via CDN. */
export const FIREBASE_VERSION = "11.0.2";

/* Senha usada apenas no MODO DEMONSTRAÇÃO (sem Firebase configurado).
   Com o Firebase ativo, o login passa a ser o de verdade (e-mail + senha). */
export const DEMO_SENHA = "amira123";

/* Valores usados quando ainda não há nada salvo em "config/loja". */
export const CONFIG_PADRAO = {
  nome: "Amira Closet",
  slogan: "Seu estilo, sua essência",
  whatsapp: "5500000000000", // formato: 55 + DDD + número (só dígitos) — trocar pelo WhatsApp real
  mensagemPadrao: "Olá! Vi o catálogo da Amira Closet e queria saber mais sobre:",
  instagram: "https://instagram.com/amiracloset",
  avisos: [
    "MODA FEMININA · LEVE · ESTILOSA · ACESSÍVEL",
    "LOOKS QUE COMBINAM COM VOCÊ",
    "PEÇA PELO WHATSAPP",
  ],
  heroTitulo: "Roupas que te fazem bem",
  heroTexto:
    "Looks que combinam com você: qualidade, conforto e preço acessível. Escolha a peça e fale com a gente no WhatsApp.",
  rodapeTexto:
    "Moda feminina leve & estilosa. Preços e disponibilidade sujeitos a alteração — confirme no WhatsApp antes de fechar o pedido.",
};

/* Quantos produtos aparecem por vez. A ideia é nunca despejar o
   estoque inteiro de uma vez: a home mostra uma amostra por seção
   e a página da categoria carrega aos poucos. */
export const LIMITE_HOME = 8;
export const LIMITE_PAGINA = 12;