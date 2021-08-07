import React from 'react'
// import icon1 from "../Assets/react.png"
// import icon2 from "../Assets/html.png"
// import icon3 from "../Assets/js.png"
// import icon4 from "../Assets/css.png"
// import icon5 from "../Assets/bootstrap.png"
// import icon6 from "../Assets/git.png"
// import icon7 from "../Assets/vscode.png"
import icon8 from "../Assets/chakraui.jpeg"
// import icon9 from "../Assets/nextjs.png"
// import icon10 from "../Assets/redux.png"
// import icon11 from "../Assets/sass.png"

function Tools() {
    return (
        <div className="main_tools"  id="tools">
            <div className="container tools_content">
                <h4>Tools I work with</h4>
                <p>Over the years, I have learnt, 
                    and frequently used these tools. 
                    I am constantly learning, and adding 
                    to my skillset. (Currently learning TypeScript)
                </p>
                <div className="tabs">
                    <div className="tab">
                        <i class="devicon-html5-plain-wordmark colored"></i>
                        <p>HTML</p>
                    </div>
                    <div className="tab">
                        <i class="devicon-css3-plain-wordmark colored"></i>
                        <p>CSS</p>
                    </div>
                    <div className="tab">
                        <i class="devicon-javascript-plain colored"></i>
                        <p>JAVASCRIPT</p>
                    </div>
                    <div className="tab">
                        <i class="devicon-react-original colored"></i>
                        <p>REACT</p>
                    </div>
                    <div className="tab">
                        <i class="devicon-nextjs-original colored"></i>
                        <p>NEXTJS</p>
                    </div>
                    <div className="tab">
                        <i class="devicon-sass-original colored"></i>
                        <p>SASS</p>
                    </div>
                    <div className="tab">
                        <i class="devicon-github-original colored"></i>
                        <p>GITHUB</p>
                    </div>
                    <div className="tab">
                        <i class="devicon-vscode-plain colored"></i>
                        <p>VS CODE</p>
                    </div>
                    <div className="tab">
                        <i class="devicon-bootstrap-plain colored"></i>
                        <p>BOOTSTRAP</p>
                    </div>
                    <div className="tab">
                        <img src={icon8} alt=""/>
                        <p>CHAKRA UI</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tools
