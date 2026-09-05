import myPicture2 from "../../images/my_picture2_800x800.webp";
import "../../styles/layout/ResponsiveGrid.css";
import "./DisplayMyPictureProfile.css"

function DisplayMyPictureProfile() {
  return (
    <div className="profile-img-box">
      <img src={myPicture2} alt="My Profile" />
    </div>
  );
}

export default DisplayMyPictureProfile;
