import React, { useState, useEffect } from 'react'
import axios from 'axios'

function ShortenLink() {
    const [input, setInput] = useState('')
    const [link, setLink] = useState('')
    const [shortenLink, setShortenLink] = useState('')
    const [loading, setLoading] = useState(false)
    const [err, setErr] = useState(false)
    const [shrtco,setShrtco] = useState(false)
    const [qr,setQr] = useState(false)
    const [shiny,setShiny] = useState(false)
    const [shrtcoBG,setShrtcoBG] = useState('')
    const [qrBG,setQrBG] = useState('')
    const [shinyBG,setShinyBG] = useState('')
    const handleClick = () => {
        setLink(input)   
    }
    const handleShrtco =()=>
    {
        
        setShrtco(true)
        setQr(false)
        setShiny(false)
        setShrtcoBG('black')
        setQrBG('')
        setShinyBG('')
    }
    const handleQr =()=>
    {
        setShrtco(false)
        setQr(true)
        setShiny(false)
        setShrtcoBG('')
        setQrBG('black')
        setShinyBG('')
    }
    const handleShiny =()=>
    {
        setShrtco(false)
        setQr(false)
        setShiny(true)
        setShrtcoBG('')
        setQrBG('')
        setShinyBG('black')
    }
    console.log(shrtco,qr,shiny)
    const getData = async () => {
        try {
            setLoading(true)
            const res = await axios(`https://api.shrtco.de/v2/shorten?url=${link}`)
            if (shrtco==true)
                {
                    setShortenLink(res.data.result.short_link)
                }
            else if (qr==true )
                {
                    setShortenLink(res.data.result.short_link2)
                }
            else if (shiny==true )
                {
                    setShortenLink(res.data.result.short_link3)
                }
            
        } catch(err) {
            setErr(err)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if (link.length) {getData()}
    }, [link])

    if(loading) {
        return (
            <div className='container'>Loading</div>
        )
    }

    if(err) {
        return (
            <div>Error</div>
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
        <h3>Enter a Link:</h3>
        <input placeholder='Example.com' onChange={(e) => setInput(e.target.value)} value={input}/>
        <button onClick={handleClick}><i className="fa fa-arrow-right"></i></button>
        </div>
        <div className='group-bnt'>
            <h3>Short domain:</h3>
            <button className={shrtcoBG} onClick={handleShrtco}>shrtco.de</button>
            <button className={qrBG} onClick={handleQr}>9qr.de</button>
            <button className={shinyBG} onClick={handleShiny}>shiny.link</button>
        </div>
        <h3>Link </h3>
        {shortenLink}
    </div>
  )
}

export default ShortenLink