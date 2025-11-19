const FAQCard = ({ faq }) => {
  return (
    <div className="collapse collapse-arrow bg-base-100 border border-base-300 rounded-lg">
      <input type="radio" name="my-accordion-2" />
      <div className="collapse-title font-semibold text-lg">{faq.question}</div>
      <div className="collapse-content text-sm">{faq.answer}</div>
    </div>
  );
};

export default FAQCard;
