import { useParams } from "react-router-dom";
import ContestRatingChart from "./section1/ContestRatingChart";
import SectionTwo from "./Section2/SectionTwo";

function StudentProfile() {
  const { studentId } = useParams();
  //console.log(studentId);
  return (
    <div className="flex flex-col gap-10">
      <div>
        <ContestRatingChart studentId={studentId} />
      </div>
      <div>
        <SectionTwo studentId={studentId} />
      </div>
    </div>
  );
}

export default StudentProfile;
