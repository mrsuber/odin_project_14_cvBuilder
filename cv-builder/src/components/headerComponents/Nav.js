import '../../styles/Nav.css'
import {Link} from 'react-router-dom'
function Nav(){
  return(

    <>
        <script src="" crossorigin="anonymous"></script>


        <nav id="menu">
            <div class="menu-item">
                <div class="menu-text">
                    CV
                </div>
                <div class="sub-menu">


                    <div class="icon-box">

                        <Link to='/cvbuilder'>
                        <div class="text">
                            <div class="title">Creat CV</div>
                            <div class="sub-text">Create Your Own Cv Fast And Neat</div>
                        </div>
                        </Link>
                    </div>
                    <div class="icon-box">

                        <div class="text">
                            <div class="title">View CV</div>
                            <div class="sub-text">View Your Cv and Print</div>
                        </div>
                    </div>
                    <div class="icon-box">

                        <div class="text">
                            <div class="title">View Boss CV </div>
                            <div class="sub-text">Are You Ready To Get Your Mind Blown &#x1F4A5; &#x1F4A5; &#x1F4A5;</div>
                        </div>
                    </div>
                    <div class="sub-menu-holder"></div>
                </div>
            </div>




            <div class="menu-item highlight">
                <div class="menu-text">
                    <a href="#">Projects</a>
                </div>
                <div class="sub-menu double">
                    <div class="icon-box gb a">

                        <div class="text">
                            <div class="title">HTML</div>
                            <div class="sub-text">Projects Done With Html</div>
                        </div>
                    </div>
                    <div class="icon-box gb b">

                        <div class="text">
                            <div class="title"> HTML/CSS</div>
                            <div class="sub-text">Projects Done With Html And Css</div>
                        </div>
                    </div>
                    <div class="icon-box gb c">

                        <div class="text">
                            <div class="title">HTML/CSS/JS</div>
                            <div class="sub-text">Projects Done With Html, Css & JS</div>
                        </div>
                    </div>
                    <div class="icon-box gb d">

                        <div class="text">
                            <div class="title">REACT/FRONTEND</div>
                            <div class="sub-text"> FRONTEND Projects With REACT </div>
                        </div>
                    </div>
                    <div class="icon-box gb e">

                        <div class="text">
                            <div class="title">REACT/FULLSTACK </div>
                            <div class="sub-text">FULLSTACK Projects With REACT</div>
                        </div>
                    </div>
                    <div class="icon-box gb f">

                        <div class="text">
                            <div class="title">UNDERSTAND </div>
                            <div class="sub-text">Have A Glims Where I Am Heading To. </div>
                        </div>
                    </div>
                    <div class="bottom-container">
                        Ready to dive in? <a>View All Projects</a>
                    </div>
                    <div class="sub-menu-holder"></div>
                </div>
            </div>
            <div class="profolio">
                <div class="menu-text">
                    <a href="#">My Profolio</a>
                </div>

            </div>
            <div class="menu-item">
                <div class="menu-text">
                    <a>Community</a>
                </div>
                <div class="sub-menu">
                    <div class="icon-box">

                        <div class="text">
                            <div class="title">FaceBook </div>
                            <div class="sub-text">Follow Me On Facebook.</div>
                        </div>
                    </div>
                    <div class="icon-box">

                        <div class="text">
                            <div class="title">LinkIn </div>
                            <div class="sub-text">Follow Me On LinkIn</div>
                        </div>
                    </div>
                    <div class="icon-box">

                        <div class="text">
                            <div class="title">GitHub </div>
                            <div class="sub-text">Follow Me On GitHub</div>
                        </div>
                    </div>
                    <div class="sub-menu-holder"></div>
                </div>
            </div>
            <div id="sub-menu-container">
                <div id="sub-menu-holder">
                    <div id="sub-menu-bottom">

                    </div>
                </div>
            </div>
        </nav>

  </>


  )
}
 export default Nav
