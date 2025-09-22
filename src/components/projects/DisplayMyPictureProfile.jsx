import myPicture from "../../images/my_picture2(800x800).png";
import "../../styles/layout/ResponsiveGrid.css";
import "./DisplayMyPictureProfile.css"

function DisplayMyPictureProfile() {
  return (
    <div className="profile-img-box">
      <img src={myPicture} alt="My Profile" />
    </div>
  );
}

export default DisplayMyPictureProfile;
