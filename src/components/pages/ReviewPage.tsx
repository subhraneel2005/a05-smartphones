import { FaChevronDown } from "react-icons/fa";
import { reviews } from "../../data/review";
import ReviewCard from "../commons/ReviewCard";

export default function ReviewPage() {
  return (
    <div className="w-full min-h-screen flex justify-center items-center flex-col overflow-hidden">
        <h2 className="md:text-desktop/h3 text-[#1C1B1B] text-desktop/h4 mt-[140px] md:text-center text-start w-full px-6">Top Reviews</h2>
        <div className="mt-4 flex flex-col">
            {reviews.map((r) => (
                <ReviewCard key={r.id} date={r.date} reviewBio={r.reviewBio} reviewTitle={r.reviewTitle} userAvatar={r.userAvatar} username={r.username} reviewStars={r.reviewStars}/>
            ))}
        </div>
        <span className="flex justify-center items-center gap-1 mt-6 cursor-pointer">
            <p className="text-[15px] font-bold">Read More</p>
            <FaChevronDown size={20} className="text-[#FF0037] mb-1"/>
        </span>
    </div>
  )
}
