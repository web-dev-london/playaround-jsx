import { useEffect, useState, useCallback } from "react";

const UseFetchHook = (url) => {
    const [data, setData] = useState(null);
    const [pending, setPending] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = useCallback(async () => {
        setPending(true)
        try {
            const response = await fetch(url)
            if (!response.ok) {
                throw new Error(response.statusText)
            }
            const result = await response.json()
            setData(result)
            setPending(false)
            setError(null)
        } catch (e) {
            if (e instanceof Error)
                setError(`${e} Sorry, Error Occured.`)
            setPending(false)
        }
    }, [url])


    useEffect(() => {
        fetchData();
    }, [url, fetchData])

    return { data, error, pending }
}

export default UseFetchHook;