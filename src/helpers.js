function choice(e) {
    let idx = Math.floor(Math.random() * e.length)
    return e[idx]
}
export {choice};