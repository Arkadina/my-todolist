export function generateId() {
    let id = "";

    for (let i = 0; i < 5; i++) {
        let generated = Math.floor(Math.random() * 10);
        id += generated;
    }

    return id;
}
