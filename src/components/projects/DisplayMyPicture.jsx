import myPicture2 from "../../images/my_picture2(800x800).png";
import "../../styles/BentoGridDesignCSS.css";

function DisplayMyPicture() {
    return(
        <>
            <div className="project-img-box">
                <img src={myPicture2}  />
            </div>            
        </>
    )
}
export default DisplayMyPicture