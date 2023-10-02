function Choice(items) {
    const randomValue = Math.floor(Math.random() * items.length)
    return items[randomValue]
}

function Remove(items, item) {
    for (let i = 0; i < items.length; i++) {
        if (items[i] === item) {
            return [...items.slice(0, i), ...items.slice(i + 1)]
        }
    }
}

export {Choice, Remove};