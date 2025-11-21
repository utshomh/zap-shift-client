import reviewQuote from "../../assets/images/review-quote.png";

const ReviewCard = ({ review }) => {
  return (
    <div className="max-w-md bg-base-100 shadow-lg rounded-xl p-6 border border-gray-200 space-y-4">
      <img src={reviewQuote} className="w-8 h-auto" />

      <p>{review.review}</p>

      <div className="border-t border-dashed border-gray-300"></div>

      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-primary">
          <img src={review.user_photoURL} />
        </div>
        <div>
          <h3 className="font-semibold text-lg">{review.userName}</h3>
          <p className="text-sm text-gray-500">Senior Product Designer</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
