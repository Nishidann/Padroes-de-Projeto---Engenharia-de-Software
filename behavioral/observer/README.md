# Pattern: Observer (Comportamental)

## Problema
Precisamos notificar múltiplos objetos quando o estado de outro objeto muda, sem acoplamento forte entre eles.

## Solução
Separar o *Subject* (publicador) dos *Observers* (assinantes). Observers registram-se no Subject; quando o Subject muda, ele notifica todos os Observers.

## UML (PlantUML)
```plantuml
@startuml
class Subject {
  - observers : Collection
  + subscribe(o)
  + unsubscribe(o)
  + notify(data)
}
class ConcreteObserver {
  + update(data)
}
class ConcreteSubject {
  + publish(data)
}
Subject <|-- ConcreteSubject
Subject --> ConcreteObserver : notifica
@enduml
