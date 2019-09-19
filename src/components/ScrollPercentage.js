import React, {createContext, useEffect, useState} from 'react'

const ScrollContext = createContext()

function ScrollPercentage(props) {
    const [percentage, setPercentage] = useState(null)
    const handleScroll = (e) => {
        const current = e.target.scrollingElement.scrollTop
        const max = e.target.scrollingElement.scrollTopMax
        const zoom = 100+(current/max)*100
        console.log(zoom)
        setPercentage(zoom)
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    })
    return (
        <ScrollContext.Consumer value={percentage}>
            <div>
                <Display />
            </div>
        </ScrollContext.Consumer>
    )
}

function Display(props) {
    return(
        <b>1</b>
    )
}

export default ScrollPercentage