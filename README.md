# 📌 ConnectaRH – Sistema de Cadastro de Recursos Humanos

### 📅 Data
26/09/2025  

---

## 📖 Descrição Geral
O **ConnectaRH** é um sistema de gestão de cadastro de Recursos Humanos desenvolvido para otimizar a administração de informações de colaboradores dentro das organizações.  

Seu principal objetivo é **centralizar, padronizar e automatizar o registro de dados**, garantindo maior eficiência, segurança e confiabilidade ao setor de RH.  

### Funcionalidades principais:
- Cadastro completo de funcionários (dados pessoais, profissionais e contratuais).  
- Pesquisa, edição, exclusão e histórico de alterações.  
- Relatórios gerenciais para suporte à tomada de decisão.  
- Redução de falhas manuais no registro de informações.  
- Agilidade na busca e atualização de dados.  
- Segurança da informação, com controle de acesso e auditoria.  
- Integração futura com outros módulos de gestão (folha de pagamento, ponto eletrônico, benefícios etc.).  

A principal entidade do sistema é o **Colaborador**, com os atributos:  
- `id` → identificador único.  
- `nome` → nome completo do colaborador.  
- `cargo` → função desempenhada.  
- `departamento` → setor em que trabalha.  
- `salario` → remuneração correspondente.  

O **ConnectaRH** implementa um **CRUD completo** para a entidade Colaborador, permitindo criar, listar, atualizar e excluir registros, além de consultas específicas por nome, cargo ou departamento.  

O sistema foi desenvolvido utilizando **Node.js, NestJS, TypeORM, TypeScript** e banco de dados **PostgreSQL**, com o **Insomnia** para testes de API.  

---

## 📊 Diagrama da Entidade

A entidade principal do sistema é **Colaborador**, representada pelo diagrama de classes abaixo:

<img width="915" height="599" alt="Screenshot 2025-09-26 160308" src="https://github.com/user-attachments/assets/13a656d4-7d32-463e-a68a-ebc3789f1ec2" />

---

## 🚀 Tecnologias Utilizadas
- Node.js  
- NestJS  
- TypeORM  
- TypeScript  
- Banco de dados: **PostgreSQL** (adaptável para MySQL, se necessário)  

---

## 📦 Pré-requisitos
Antes de começar, certifique-se de ter instalado:  
- **Git**  
- **Node.js** (versão LTS recomendada)  
- **NPM** ou **Yarn**  
- **PostgreSQL** (ou outro banco configurado no `data-source.ts`)  

---

## ⚙️ Como rodar o projeto

### 1. Clonar o repositório
```bash
git clone https://github.com/OxenteC0de/ConnectaRH
cd ConnectaRH 
```

### 2. Instalar as dependências
npm install


### 3. Configurar o banco de dados

No arquivo data-source.ts ou app.module.ts, configure suas credenciais:
```bash
TypeOrmModule.forRoot({
  type: 'postgres',
  host: 'localhost',
  port: 3360,
  username: 'seu_usuario',
  password: 'sua_senha',
  database: 'nome_do_banco',
  autoLoadEntities: true,
  synchronize: true, // apenas em ambiente de desenvolvimento
}),
```

⚠️ Dica: Crie o banco no PostgreSQL antes de rodar o projeto.


### 4. Rodar o projeto
npm run start:dev

O servidor estará disponível em:
👉 http://localhost:4000

---

### ✅ Testes

Utilize o Insomnia (ou Postman) para testar as rotas.

Já existe um arquivo de workspace do Insomnia (insomnia.json) dentro da pasta /docs → basta importar e clicar em Send (os testes já estão preenchidos).

---

### 👥 Equipe Responsável

#### OxenteCode

Participantes:

David Barbosa – Criação endpoint PUT e GET findById()

Dilvani – Criação endpoint DELETE

Janaína Bezerra – Criação endpoint POST

Karine Santos – Criação do endpoint GetFindAll()

Tauane Soares – Entidade e arquivo Insomnia

William Almeida – Scrum Master e responsável pelo merge do código

Winnie Sant’Ana – Documentação e escopo do projeto
