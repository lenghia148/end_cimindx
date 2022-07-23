import React, { useState, useEffect } from 'react'
import axios from 'axios'

function ShortenLink() {
    const [input, setInput] = useState('')
    const [link, setLink] = useState('')
    const [shortenLink, setShortenLink] = useState('')
    const [loading, setLoading] = useState(false)
    const [err, setErr] = useState(false)
    const [black,setBlack] = useState('')

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const handleClick = () => {
        setLink(input)
        console.log(input)
    }

    const fetchData = async () => {
        try {
            setLoading(true)
            const res = await axios(`https://api.shrtco.de/v2/shorten?url=${link}`)
            setShortenLink(res.data.result.full_short_link)
        } catch(err) {
            setErr(err)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if (link.length) {fetchData()}
    }, [link])

    if(loading) {
        return (
            <div className='container'>Loading</div>
        )
    }

    if(err) {
        return (
            <div>Something went wrong :(</div>
        )
    }

  return (
    <div className='container'>
        <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <h1>Shorten your link</h1>
        <div className='form-work'>
        <h3>Short domain:</h3>
        <input placeholder='Example.com' onChange={(e) => handleChange(e)} value={input}/>
        <button onClick={handleClick}><i className="fa fa-arrow-right"></i></button>
        </div>
        <div className='group-bnt'>
            <h3>Short domain:</h3>
            <button className={black} onClick={()=>setBlack('black')}>shrtco.de</button>
            <button className={black} onClick={()=>setBlack('black')}>9qr.de</button>
            <button className={black} onClick={()=>setBlack('black')}>shiny.link</button>
        </div>
        
        {shortenLink}
    </div>
  )
}

export default ShortenLink