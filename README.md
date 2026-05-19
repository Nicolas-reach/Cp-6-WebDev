# 📚 devbooks

> Loja virtual de livros de tecnologia e programação.
> Projeto do **Checkpoint 6 — Web Dev** (FIAP · Turma 1ESPA).

---

## 🎯 Sobre o projeto

A **devbooks** é uma livraria digital focada em livros de tecnologia.
O objetivo do checkpoint foi praticar a arquitetura de rotas, a
componentização em React e o fluxo de trabalho profissional com Git/GitHub.

O código-fonte está na pasta [`vite-project`](./vite-project).

---

## 🚀 Tecnologias

| Tecnologia | Para que serve |
|------------|----------------|
| **Vite** | Build e servidor de desenvolvimento |
| **React** | Construção da interface |
| **React Router DOM** | Gerenciamento das rotas |
| **Tailwind CSS** | Estilização |

---

## 🧩 Componentes

- **Header** — logotipo e menu de navegação
- **Footer** — copyright e links de redes sociais
- **Card** — componente reutilizável que exibe os dados de cada livro

## 🛣️ Rotas

| Rota | Página | Descrição |
|------|--------|-----------|
| `/` | Home | Página inicial de boas-vindas |
| `/produtos` | Produto | Catálogo com os cards de livros |
| `*` | Error | Página de erro 404 personalizada |

---

## 💻 Como rodar

```bash
cd vite-project
npm install
npm run dev
```

Depois abra o endereço que aparecer no terminal (geralmente `http://localhost:5173`).

---

## 👤 Autor

Desenvolvido por **Nicolas** — FIAP, Engenharia de Software (1ESPA).
