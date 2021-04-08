import { useState, useEffect } from 'react'

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const abortCont = new AbortController()

        console.log('use effect ran')

        fetch(url, { signal: abortCont.signal })
        .then(resp => {
            if(!resp.ok) {
                throw Error('Data Unavailable')
            }
            return resp.json()
        })
        .then((data) => {
            setData(data)
            setIsPending(false)
            setError(null)
        })
        .catch(error => {
            if (error.name === 'AbortError') {
                console.log('could not complete the fetch')
            } else {
                setIsPending(false)
                setError(error.message)
            }
        })

        return () => abortCont.abort()
    }), [url]

    return { data, isPending, error }
}

export default useFetch