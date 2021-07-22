import './about.css'
const about = props => {
    return (
        <div className="main-container">
            <div className="container-left three-quarters-width">
                <div id="about-content" className="container-top-left ninety-percent-height vertical-center">
                    <div className="half-width">
                        <a href="./">Return</a>
                        <h1>Hi there, I'm <span className="hilight">Ben.</span></h1>
                        <p className="block-text">
                        Nice to meet you! I’m a student at the Universty of Georgia studying computer science and business management with an emphasis on human resources. 
                        Professionally, I am currently interning as an open technology solutions consultant at Credera. I also work as a real estate agent from time-to-time 
                        as a supplement to my income.
                        </p><br></br>
                        <p className="block-text">
                        Outside of work and school, I can usually be found working on personal projects such as this website, learning new 
                        recipies to cook, reading up on new technologies, at the gym, or playing video games. My interests also include music production, UI/UX design, 
                        and poker. Lately, these interests have expanded into home (apartment in my case) automation as well as IoT.
                        </p>
                    </div>
                </div>
                <div className="container-bottom-left third-width">
                   
                </div>
            </div>
            <div className="container-right">
               
            </div>
        </div>
        
    )
}

about.propTypes = {

}

export default about
