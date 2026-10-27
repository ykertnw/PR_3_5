export const random = (num) => Math.ceil(Math.random() * num);

export const createClickCounter = ($button, limit) => {
    let clicks = 0;
    const buttonName = $button.innerText.trim();

    $button.innerText = `${buttonName} (${limit})`;

    return () => {
        clicks++;
        const left = limit - clicks;

        console.log(`Кнопка "${buttonName}": натиснуто ${clicks} раз, залишилось ${left}`);
        $button.innerText = `${buttonName} (${left})`;

        if (left === 0) {
            $button.disabled = true;
            console.log(`Кнопка "${buttonName}" більше не доступна`);
        }
    };
};
