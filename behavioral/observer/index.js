// Exemplo Observer: publicador de notícias e assinantes

class Subject {
  constructor() {
    this.observers = new Set();
  }

  subscribe(observer) {
    this.observers.add(observer);
  }

  unsubscribe(observer) {
    this.observers.delete(observer);
  }

  notify(data) {
    for (const obs of this.observers) {
      obs.update(data);
    }
  }
}

class NewsPublisher extends Subject {
  publish(news) {
    const payload = { news, time: new Date().toISOString() };
    this.notify(payload);
  }
}


class Subscriber {
  constructor(name) {
    this.name = name;
  }

  update(payload) {
    console.log(`[${this.name}] recebeu notícia: ${payload.news} (${payload.time})`);
  }
}

function demo() {
  const publisher = new NewsPublisher();

  const alice = new Subscriber("Alice");
  const bob = new Subscriber("Bob");

  publisher.subscribe(alice);
  publisher.subscribe(bob);

  publisher.publish("Novo artigo sobre padrões de projeto!");

  publisher.unsubscribe(bob);

  publisher.publish("Segunda notícia: exemplo do Observer.");
}

if (require.main === module) {
  demo();
}

module.exports = { Subject, NewsPublisher, Subscriber };
