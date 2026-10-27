class Pokemon {
    constructor({ name, id, hp = 100 }) {
        this.name = name;
        this.id = id;
        this.defaultHP = hp;
        this.damageHP = hp;

        this.elName = document.getElementById(`name-${id}`);
        this.elHP = document.getElementById(`health-${id}`);
        this.elProgressbar = document.getElementById(`progressbar-${id}`);

        this.renderName();
        this.renderHP();
    }

    get isDead() {
        return this.damageHP === 0;
    }

    renderName() {
        this.elName.innerText = this.name;
    }

    renderHP() {
        this.renderHPLife();
        this.renderProgressbarHP();
    }

    renderHPLife() {
        const { elHP, damageHP, defaultHP } = this;
        elHP.innerText = `${damageHP} / ${defaultHP}`;
    }

    renderProgressbarHP() {
        const { elProgressbar, damageHP, defaultHP } = this;
        const percent = damageHP / defaultHP * 100;

        elProgressbar.style.width = `${percent}%`;
        elProgressbar.classList.remove('low', 'critical');

        if (percent <= 20) {
            elProgressbar.classList.add('critical');
        } else if (percent <= 60) {
            elProgressbar.classList.add('low');
        }
    }

    changeHP(count) {
        this.damageHP = Math.max(this.damageHP - count, 0);
        this.renderHP();
    }
}

export default Pokemon;
