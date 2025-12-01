// Exemplo Adapter: adaptar uma nova API de pagamento para a interface antiga

// Interface antiga esperada pela aplicação:
class OldPaymentProcessor {
  pay(amount) {
    throw new Error("not implemented");
  }
}

// Nova API com método diferente:
class NewPaymentGateway {
  constructor(apiKey) {
    this.apiKey = apiKey;
  }

  makePayment({ amountCents, currency }) {
    const amountFormatted = (amountCents / 100).toFixed(2);
    return `Pago ${amountFormatted} ${currency} via NewPaymentGateway`;
  }
}

class PaymentAdapter extends OldPaymentProcessor {
  constructor(newGateway) {
    super();
    this.gateway = newGateway;
  }

  pay(amount) {
    const amountCents = Math.round(amount * 100);
    const result = this.gateway.makePayment({ amountCents, currency: "USD" });
    return result;
  }
}

function demo() {
  const gateway = new NewPaymentGateway("minha-chave");
  const adapter = new PaymentAdapter(gateway);

  const receipt = adapter.pay(12.34);
  console.log(receipt);
}

if (require.main === module) {
  demo();
}

module.exports = { OldPaymentProcessor, NewPaymentGateway, PaymentAdapter };