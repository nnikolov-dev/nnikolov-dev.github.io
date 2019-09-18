import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <ul className="icons">
                        <li><a href="#!" className="icon fa-github"><span className="label">Github</span></a></li>
                        <li><a href="#!" className="icon fa-linkedin-square"><span className="label">Linked In</span></a></li>
                        <li><a href="#!" className="icon fa-envelope-o"><span className="label">Email</span></a></li>
                        <li><a href="#!" className="icon fa-file-text-o"><span className="label">View my CV</span></a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer
