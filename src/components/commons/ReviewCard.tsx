import { FaStar, FaRegStar } from 'react-icons/fa';

interface ReviewCards{
    username:string;
    date:string;
    userAvatar: string;
    reviewTitle: string;
    reviewBio: string;
    reviewStars: number;
}

export default function ReviewCard({ username, date, userAvatar, reviewTitle, reviewBio, reviewStars }: ReviewCards) {

  return (
    <div className="p-5 max-w-md md:max-w-2xl mx-auto">
        <div className="flex items-center mb-4">
                        <img src={userAvatar} alt="Profile picture of the reviewer" className="w-12 h-12 rounded-full mr-4 ml-1" />
                        <div>
                            <div className="text-mobile/h7 md:text-desktop/h5/medium text-[#1C1B1B]">{username}</div>
                            <div className="md:text-desktop/caption text-[#666666]">{date}</div>
                        </div>
        </div>
        <div className="flex items-center mb-2 ml-2">
                        <div className="flex text-yellow-500">
                        {[...Array(5)].map((_, index) => (
                            index < reviewStars ? (
                            <FaStar key={index} />
                            ) : (
                            <FaRegStar key={index} />
                            )
                        ))}
                        </div>
                        <div className="ml-2 mt-1 text-[#252525] md:text-desktop/body/2/medium text-mobile/h6">{reviewTitle}</div>
        </div>
        <div className="text-[#666666] text-desktop/body/2/regular ml-2">{reviewBio}</div>
    </div>
  )
}
