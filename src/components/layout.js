import React from 'react'
import '../assets/scss/main.scss'

import Header from './Header'
import {ScrollPercentage} from './ScrollPercentage'

class Template extends React.Component {
    render() {
        const { children } = this.props

        return (
            <ScrollPercentage>
                <Header />
                {children}
            </ScrollPercentage>
        )
    }
}

export default Template
