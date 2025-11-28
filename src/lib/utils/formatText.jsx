const formatText = (text) => {
  return text.split("---").map((line, i) => (
    <p key={i} className="mb-2 leading-relaxed">
      {line}
    </p>
  ));
};

export default formatText;
