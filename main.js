import Pokemon from './pokemon.js';
import { generateLog, addLog } from './logs.js';
import { random, createClickCounter } from './utils.js';

const [$btnKick, $btnStrong] = document.querySelectorAll('.control .button');

const character = new Pokemon({ name: 'Pikachu', id: 'character' });
const enemy = new Pokemon({ name: 'Charmander', id: 'enemy' });

const buttons = [
    { $btn: $btnKick, maxDamage: 20, limit: 7 },
    { $btn: $btnStrong, maxDamage: 40, limit: 5 },
];

const gameOver = (loser) => {
    alert(`Бідний ${loser.name} програв бій!`);
    buttons.forEach(({ $btn }) => {
        $btn.disabled = true;
    });
};

const attack = (defender, attacker, maxDamage) => {
    const damage = random(maxDamage);

    defender.changeHP(damage);
    addLog(generateLog(defender, attacker, damage));

    if (defender.isDead) {
        gameOver(defender);
    }
};

const fight = (maxDamage) => {
    attack(character, enemy, 20);

    if (!character.isDead) {
        attack(enemy, character, maxDamage);
    }
};

buttons.forEach(({ $btn, maxDamage, limit }) => {
    const countClick = createClickCounter($btn, limit);

    $btn.addEventListener('click', () => {
        countClick();
        fight(maxDamage);
    });
});
