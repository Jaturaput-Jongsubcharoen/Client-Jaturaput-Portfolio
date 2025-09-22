import myPicture1 from "../../images/my_picture1_500x750.png";
import "../../styles/layout/ResponsiveGrid.css";
import "./DisplayMyPictureProfile2.css";

function DisplayMyPictureProfile2() {
  return (
    <div className="profile-img-box2">
      <img src={myPicture1} alt="My Profile" />
    </div>
  );
}

export default DisplayMyPictureProfile2;