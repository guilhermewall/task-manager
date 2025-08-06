App

**Task Manager API**

### RFs (Requisitos funcionais)

- [ ] Deve ser possível se cadastrat;
- [ ] Deve ser possivel se autenticar;
- [ ] Deve ser possivel obter o perfil do usuario logado;
- [ ] Deve ser possivel manusear tarefas para o usuario logado;
- [ ] Deve ser possivel manusear subtarefas para o usuario logado;
- [ ] Deve ser possivel o usuario buscar a tarefa pelo nome;

### RNs (Regras de negócio)

- [ ] O usuario não deve poder se cadastrar com um email duplicado;
- [ ] O usuario pode cadastrar multiplas tarefas;
- [ ] O usuario pode cadastrar multiplas subtarefas;

### RNFs (Requisitos não funcionais)

- [ ] A senha do usuario deve estar criptografada;
- [ ] Os dados da aplicacao precisam estar persistidos em um banco PostgresSQL;
- [ ] Todas as listas de dados precisam estar paginadas com 20 itens por pagina;
- [ ] O usuatio deve ser identificado por um JWT
