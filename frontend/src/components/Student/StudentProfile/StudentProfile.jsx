import ContestRatingChart from "./section1/ContestRatingChart";
import SectionTwo from "./Section2/SectionTwo";

function StudentProfile() {
  return (
    <div className="flex flex-col gap-10">
      <div>
        <ContestRatingChart />
      </div>
      <div>
        <SectionTwo />
      </div>
    </div>
  );
}

export default StudentProfile;
