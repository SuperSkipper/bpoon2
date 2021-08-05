import './resume.css'
import sig from "../assets/images/White Signature.png"
import resumePic from "../assets/images/resume.png"
const resume = props => {
    return (
        <div className="main-container">
            <div className="container-left third-width">
                <div id="resume-content" className="container-top-left ninety-five-percent-height vertical-center">
                    <div className="full-width">
                        <a href="./" className="return">Return</a>
                        <h2>View/Download My <span className="hilight">Resume</span></h2>
                        <ul className="center-text">
                            <li><a href="./">Download PDF</a></li>
                            <li><a href="./">Download Doc</a></li>
                            <li><a href="./">Download PNG</a></li>
                        </ul>
                    </div>
                </div>
                <div className="container-bottom-left half-width fill-space">
                </div>
            </div>
            <div className="container-right center" >
                <img src={resumePic} alt="resume" id="resume"></img>
                <img src={sig} alt="signature" className="white-logo"></img>
            </div>
        </div>
        
    )
}

resume.propTypes = {

}

export default resume