// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function temp(text) {

    const a = text.length;

    for (let i = 0; i < 7 - a; i++) {
        text += " ";
    }

    return text;
}

console.log(temp("log"));
