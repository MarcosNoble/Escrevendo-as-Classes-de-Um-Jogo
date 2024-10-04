// Importa a biblioteca prompt-sync
const prompt = require('prompt-sync')();
// Classe genérica que representa um herói
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    // Método que define o ataque baseado no tipo do herói
    atacar() {
        let ataque = '';
        // Estrutura de decisão para definir o ataque baseado no tipo
        if (this.tipo === 'mago') {
            ataque = 'usou magia';
        } else if (this.tipo === 'guerreiro') {
            ataque = 'usou espada';
        } else if (this.tipo === 'monge') {
            ataque = 'usou artes marciais';
        } else if (this.tipo === 'ninja') {
            ataque = 'usou shuriken';
        } else {
            ataque = 'não definido';
        }
        // Exibe a mensagem de ataque
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}
// Função principal para criar o herói e executar o ataque
function main() {
    // Laço para criar heróis diferentes
    for (let i = 0; i < 3; i++) {
        // Captura os dados do herói
        const nome = prompt("Digite o nome do herói: ");
        const idade = parseInt(prompt("Digite a idade do herói: "));
        const tipo = prompt("Digite o tipo do herói (mago, guerreiro, monge, ninja): ").toLowerCase();
        let heroi = new Heroi(nome, idade, tipo);
        // Herói realiza o ataque
        heroi.atacar();
    }
}
// Executa o programa principal
main();
