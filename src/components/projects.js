import './projects.css'
import sig from "../assets/images/Signature.png"
const projects = props => {
    return (
        <div className="main-container">
            <div className="container-left third-width">
                <div id="resume-content" className="container-top-left ninety-five-percent-height vertical-center">
                    <div className="full-width">
                        <a href="./" className="return">Return</a>
                        <h2>A Selection of My <span className="hilight">Projects</span></h2>
                    </div>
                </div>
                <div className="container-bottom-left half-width fill-space">
                </div>
            </div>
            <div className="container-right center" >
                <ul>
                    <li>
                        <h2>Night Light</h2>
                    </li>
                </ul>
            </div>
        </div>
        
    )
}

projects.propTypes = {

}

export default projects