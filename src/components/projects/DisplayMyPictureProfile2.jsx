import myPicture2 from "../../images/my_picture1_500x750.png";
import myPicture2Slice from "../../images/my_picture2_800x800.png"; // import for CSS slice
import "../../styles/layout/ResponsiveGrid.css";
import "./DisplayMyPictureProfile2.css";

function DisplayMyPictureProfile2() {
  return (
    <div
      className="profile-img-box2"
      style={{ "--profile-slice": `url(${myPicture2Slice})` }}  // pass slice as CSS var
    >
      <img src={myPicture2} alt="My Profile" />
    </div>
  );
}

export default DisplayMyPictureProfile2;
