import "../../styles/BentoGridDesignCSS.css";

function ContactsButton() {
    
    
    return(
        <>
                          <p
                            className="grid-nav0-1-Contact"
                            style={{
                              border: "1px solid rgba(255, 255, 255, 0.4)",
                              padding: "6px",
                              boxShadow: "inset 2px 2px 4px 0px rgba(0, 0, 0, .5)",
                            }}
                          >
                            CONTACT
                          </p>
                          <div className="nav-bar-box-Contact r1-c9-location">
                            <div className="project-content-box"> {/*className="project-content-box"*/}
                              <div className="grid-content-container" style={{ textAlign: "center" }}> {/*className="grid-content-container"*/}
                                {/*/
                                <div className="grid-content1">
                                  <h2>MOVIE-ADDICT</h2>
                                </div>
                                <div className="grid-content2">
                                  <img
                                    className="content-logo-project"
                                    src="web_design_project/Individual_Project/logo/Movie-Addict-Logo.png"
                                    alt="Movie Addict Logo"
                                  />
                                </div>
                                
                                <div className="grid-content3">
                                  <a
                                    href="mailto:jjongsub@my.centennialcollege.ca"
                                    className="button-product"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    CONTACT
                                  </a>
                                </div>
                                <br />
                                <br />
                                */}
                                <div className="grid-content1">
                                <h3>Github: Client Side</h3>
                                  <a
                                    href="https://github.com/Jaturaput-Jongsubcharoen"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hidingHyperLink"
                                  >
                                    https://github.com/Jaturaput-Jongsubcharoen/Client-Jaturaput-Portfolio.git
                                  </a>
                                <br />
                                <br />
                                <h3>LinkedIn:</h3>
                                  <a
                                    href="https://www.linkedin.com/in/jaturaput-jongsubcharoen-5267ba25b"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hidingHyperLink"
                                  >
                                    https://www.linkedin.com/in/jaturaput-jongsubcharoen-5267ba25b
                                  </a>
                                <br />
                                <br />
                                <h3>College Email:</h3>
                                  <a
                                    href="mailto:jjongsub@my.centennialcollege.ca"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hidingHyperLink"
                                  >
                                    jjongsub@my.centennialcollege.ca
                                  </a>
                                <br />
                                <br />
                                <h3>Private Email:</h3>
                                  <a
                                    href="mailto:macker.jong@gmail.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hidingHyperLink"
                                  >
                                    macker.jong@gmail.com
                                  </a>
                                
                                </div>
                              </div>
                            </div>
                          </div>
        </>
    )
}
export default ContactsButton