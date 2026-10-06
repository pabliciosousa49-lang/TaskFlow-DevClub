# DevPath — Instruções para o Codex

## 1. Função

Você atua como agente de implementação do projeto DevPath.

Sua responsabilidade é executar tecnicamente as alterações solicitadas no prompt atual, respeitando o código, a arquitetura e o comportamento existente da aplicação.

As decisões sobre produto, arquitetura, fases, metodologia, prioridades e commits são definidas externamente.

O prompt atual define o que deve ser realizado.
Este arquivo define como a implementação deve ser conduzida.

---

## 2. Stack atual

Utilize somente as tecnologias atualmente adotadas pelo projeto:

- HTML5
- CSS3
- JavaScript

Não adicione frameworks, bibliotecas, dependências ou novas tecnologias sem solicitação explícita.

Não introduza antecipadamente tecnologias planejadas para fases futuras.

---

## 3. Escopo

Implemente somente o que estiver solicitado no prompt atual.

Não:

- crie funcionalidades adicionais;
- antecipe funcionalidades futuras;
- altere a arquitetura sem solicitação;
- faça refatorações fora do escopo;
- altere comportamentos que não fazem parte da tarefa;
- crie arquivos, pastas ou abstrações sem necessidade;
- remova código existente sem relação direta com a tarefa.

Aplique YAGNI.

Se uma alteração fora do escopo for realmente necessária para concluir a tarefa corretamente, informe antes de realizá-la.

---

## 4. Leitura do projeto

Antes de alterar código:

- leia somente os arquivos necessários para compreender a tarefa;
- identifique dependências e referências diretamente relacionadas;
- preserve padrões existentes quando forem adequados;
- verifique o impacto da alteração nos arquivos relacionados.

Não reanalise todo o projeto quando a tarefa puder ser resolvida de forma localizada.

---

## 5. Implementação

Quando necessário para cumprir o prompt, você pode:

- criar arquivos;
- editar arquivos existentes;
- mover arquivos;
- remover arquivos explicitamente relacionados à alteração;
- atualizar caminhos e referências;
- integrar alterações entre HTML, CSS e JavaScript;
- corrigir erros diretamente causados ou revelados pela implementação;
- executar verificações relevantes.

Uma mesma tarefa pode modificar vários arquivos quando todos fizerem parte da mesma responsabilidade.

Preserve funcionalidades existentes que não fazem parte da alteração solicitada.

---

## 6. Código

Mantenha o código:

- simples;
- legível;
- organizado;
- coerente com a arquitetura existente;
- com responsabilidades claras;
- sem duplicações desnecessárias;
- sem complexidade antecipada.

Prefira a solução mais simples que atenda corretamente ao requisito.

Não faça mudanças apenas para deixar o código diferente ou mais sofisticado.

---

## 7. Integração entre arquivos

Sempre que criar, mover, renomear ou remover arquivos, verifique as referências relacionadas.

Isso inclui, quando aplicável:

- links entre páginas;
- arquivos CSS;
- arquivos JavaScript;
- imagens;
- ícones;
- fontes;
- imports;
- caminhos relativos;
- arquivos de configuração;
- processos de build ou deploy existentes.

Uma reorganização não deve deixar referências quebradas.

---

## 8. Validação

Não considere uma implementação concluída apenas porque o código foi escrito.

Quando aplicável:

- verifique sintaxe;
- verifique caminhos e referências;
- execute testes existentes relacionados à alteração;
- execute verificações disponíveis no projeto;
- procure erros diretamente relacionados à implementação.

Não corrija problemas não relacionados apenas porque foram encontrados.

Informe-os separadamente quando forem relevantes.

---

## 9. Segurança

Nunca exponha ou adicione ao código:

- senhas;
- tokens;
- chaves de API;
- credenciais;
- informações sensíveis.

Não insira segredos diretamente no código.

Caso encontre um risco de segurança relevante durante a tarefa, informe no relatório final.

---

## 10. Git

Não execute:

- git commit;
- git push.

Não altere o histórico Git.

Os commits são responsabilidade do desenvolvedor.

---

## 11. Finalização

Depois de concluir uma tarefa, apresente um relatório curto contendo:

1. o que foi alterado;
2. arquivos criados, modificados, movidos ou removidos;
3. verificações ou testes executados;
4. como validar manualmente, quando necessário;
5. problemas, limitações ou riscos encontrados.

Evite explicações extensas quando não forem necessárias.

Depois disso, pare e aguarde novas instruções.