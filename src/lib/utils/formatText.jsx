const formatText = (text) => {
  return text.split("---").map((line, i) => (
    <span key={i} className="mb-2 leading-relaxed">
      {line}
    </span>
  ));
};

export default formatText;
