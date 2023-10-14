export function findStr(str: string) {
    if (str.length < 2) {
        return str;
    }

    const charCount: any = {};

    for (let i = 0; i < str.length - 1; i += 2) {
        const charPair = str.slice(i, i + 2);
        if (charCount[charPair]) {
            charCount[charPair]++;
        } else {
            charCount[charPair] = 1;
        }
    }

    let mostFrequentCharPair = str.slice(0, 2);
    let maxCount = 1;

    for (const charPair in charCount) {
        if (charCount[charPair] > maxCount) {
            mostFrequentCharPair = charPair;
            maxCount = charCount[charPair];
        }
    }

    return mostFrequentCharPair;
}