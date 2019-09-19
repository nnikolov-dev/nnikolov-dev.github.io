import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <ul className="icons">
                        <li><a href="http://github.com/nnikolov-dev/" target="_blank" className="icon fa-github"><span className="label">Github</span></a></li>
                        <li><a href="https://www.linkedin.com/in/nikita-nikolov-45136618b" target="_blank" className="icon fa-linkedin-square"><span className="label">Linked In</span></a></li>
                        <li><a href="mailto:nn00317@surrey.ac.uk" target="_blank" className="icon fa-envelope-o"><span className="label">Email</span></a></li>
                        <li><a href="/resume" target="_blank" className="icon fa-file-text-o"><span className="label">View my CV</span></a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer
