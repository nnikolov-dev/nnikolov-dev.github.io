import React from 'react'
import Footer from './Footer'
import {ScrollPercentageContext} from './ScrollPercentage'

class Header extends React.Component {
    render() {
        return (
            <ScrollPercentageContext.Consumer>
                {percentage => (
                    <header id="header" style={{'backgroundSize': `auto, auto ${percentage+100}%`}}>
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
                )}
            </ScrollPercentageContext.Consumer>
        )
    }
}

export default Header
