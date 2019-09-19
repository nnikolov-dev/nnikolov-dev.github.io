import React from 'react'
import Footer from './Footer'

class Header extends React.Component {
    constructor(props) {
        super(props)
        // this.state = {
        //     zoom: 100
        // }
        // this.handleScroll = this.handleScroll.bind(this)
    }

    // handleScroll(e) {
    //     const current = e.target.scrollingElement.scrollTop
    //     const max = e.target.scrollingElement.scrollTopMax
    //     const zoom = 100+(current/max)*100
    //     //console.log(zoom)
    //     this.setState({zoom})
    // }

    // componentDidMount() {
    //     window.addEventListener('scroll', this.handleScroll)
    // }

    render() {
        return (
            // <header id="header" style={{'background-size': `auto, auto ${this.state.zoom}%`}}>
            <header id="header">
                <div className="inner">
                    <h1>
                        <strong>nnikolov-dev</strong><br/>
                        software developer<br/>
                        ai enthusiast<br/>
                        freelancer
                    </h1>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
