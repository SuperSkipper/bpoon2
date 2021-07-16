import './home.css'
import logo from '../assets/images/Signature.png'
import github from '../assets/images/github.png'
import linkedin from '../assets/images/linkedin.png'
import soundcloud from '../assets/images/soundcloud-black.png'
const home = props => {
    return (
        <div id="home-main-container">
            <div id="home-container-left">
                <div id="home-container-top-left">
                    <span>
                        <img className='logo' src= {logo} alt = 'Ben Signature'></img>
                    </span>
                    <div id= "home-header">
                        <h1>Hi there, I'm Ben.</h1>
                        <h1>A pleasure to meet you.</h1>
                    </div>
                </div>
                <div id="home-container-bottom-left">
                    <ul>
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
            <div id="home-container-right">
                <ul>
                    <li>About Me</li>
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
