import './home.css'
import logo from '../assets/images/Signature.png'
import github from '../assets/images/github.png'
import linkedin from '../assets/images/linkedin.png'
import soundcloud from '../assets/images/soundcloud-black.png'
const home = props => {
    return (
        <div className="main-container">
            <div className="container-left three-quarters-width">
                <div className="container-top-left eighty-percent-height">
                    <span>
                        <img className='logo' src= {logo} alt = 'Ben Signature'></img>
                    </span>
                    <div className="center" id= "home-header">
                        <h1>Hi there, I'm <span className="hilight">Ben.</span></h1>
                        <h2>A pleasure to meet you.</h2>
                    </div>
                </div>
                <div className="container-bottom-left fill-space">
                    <ul id="home-socials">
                        <li>
                            <img src={github} alt='GitHub' className="social"></img>
                        </li>
                        <li>
                            <img src={linkedin} alt='LinkedIn' className="social"></img>
                        </li>
                        <li>
                            <img src={soundcloud} alt='SoundCloud' className="social"></img>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="container-right">
                <ul id="nav">
                    <li><a href="./about">About Me</a></li>
                    <li>My Resume</li>
                    <li>Personal Projects</li>
                    <li>Contact Me</li>
                </ul>
            </div>
        </div>
        
    )
}

home.propTypes = {

}

export default home
