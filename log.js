console.log("Fuehre die Funktion 'knawu17komma8' aus. Die Zeilennummern der Stacktrace aus der Datei 'log.js' geben dir die Position des Buchstaben 'l' in der Loesung an.");
const outerouter = () => {

const outer = () => {
const test_fn = () => {
    const a = 17.8;
    throw new Error();
}; test_fn();
if (true) {
    console.log("Wenn du das siehst, ist etwas falsch gelaufen."); }
}; outer();

};

function knawu17komma8 () {
    try { outerouter(); }
    catch (e) {
        console.error(e);
        return "Wer das liest ist dumm!";
    }
}
