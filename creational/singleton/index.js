// Exemplo simples de Singleton: Logger
// Garantimos que haja apenas uma instância do Logger no app.

class Logger {
  constructor() {
    if (Logger._instance) {
      return Logger._instance;
    }
    this.logs = [];
    Logger._instance = this;
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const entry = `${timestamp} - ${message}`;
    this.logs.push(entry);
    console.log(entry);
  }

  getHistory() {
    return [...this.logs];
  }
}

function getLogger() {
  return new Logger();
}

function demo() {
  const a = getLogger();
  const b = getLogger();

  console.log("São a mesma instância?", a === b);

  a.log("Primeira mensagem");
  b.log("Segunda mensagem");

  console.log("Histórico:", a.getHistory());
}

if (require.main === module) {
  demo();
}

module.exports = { Logger, getLogger };