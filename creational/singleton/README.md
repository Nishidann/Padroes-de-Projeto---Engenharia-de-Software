# Pattern: Singleton (Criacional)

## Problema
Em alguns casos precisamos garantir que exista apenas uma única instância de uma classe e fornecer um ponto de acesso global a essa instância.

## Solução
Controlar a criação da instância: a classe guarda a instância criada e, em novas chamadas, retorna a instância existente em vez de criar uma nova.

## Quando usar
- Quando um único objeto coordena ações (logger, gerenciador de configuração).
- Quando múltiplas instâncias causariam erros ou inconsistência.

## UML (PlantUML)
```plantuml
@startuml
class Logger {
  - logs : Array
  - static _instance : Logger
  + log(message)
  + getHistory()
}
@enduml
