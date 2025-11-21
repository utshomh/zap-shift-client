const calculateCharge = ({ isDocument, isSameCity, weight }) => {
  const docRate = isSameCity ? 60 : 80;
  const baseRate = isSameCity ? 110 : 150;
  const extraRate = isSameCity ? 40 : 40;

  if (isDocument) return docRate;

  if (weight < 3) return baseRate;

  const extraWeight = weight - 3;
  return baseRate + extraWeight * extraRate + (isSameCity ? 0 : 40);
};

export default calculateCharge;
