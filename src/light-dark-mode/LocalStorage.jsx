import { useEffect, useState } from "react"


const targetValue = (key, value) => {
    let currentValue;

    try {
        currentValue = JSON.parse(localStorage.getItem(key) || String(value))
    } catch (e) {
        console.log(e);
        currentValue = value
    }
    return currentValue
}


const LocalStorage = (key, defaultValue) => {
    const [value, setValue] = useState(targetValue(key, defaultValue))

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])

    return [value, setValue]

}

export default LocalStorage