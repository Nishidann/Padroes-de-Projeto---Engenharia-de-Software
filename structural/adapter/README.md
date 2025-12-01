# Pattern: Adapter (Estrutural)

## Problema
Sua aplicação depende de uma interface antiga, mas você precisa usar uma biblioteca/serviço com interface diferente. Reescrever toda a aplicação é custoso, então adaptamos a interface externa para a esperada.

## Solução
Criar um Adapter que implementa a interface esperada pela aplicação e internamente faz a tradução para a API/objeto novo.

## UML (PlantUML)
```plantuml
@startuml
interface OldPaymentProcessor {
  + pay(amount)
}
class NewPaymentGateway {
  + makePayment(params)
}
class PaymentAdapter {
  - gateway : NewPaymentGateway
  + pay(amount)
}
OldPaymentProcessor <|.. PaymentAdapter
PaymentAdapter --> NewPaymentGateway
@enduml
