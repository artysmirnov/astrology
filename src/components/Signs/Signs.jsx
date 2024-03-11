const Signs = ({ setSign }) => {
  const signs = [
    "aries",
    "taurus",
    "gemini",
    "cancer",
    "leo",
    "virgo",
    "libra",
    "scorpio",
    "sagittarius",
    "capricorn",
    "aquarius",
    "pisces",
  ];
  return (
    <div className="horoscopeSigns">
      {signs.map((sign) => (
        <p
          key={sign}
          onClick={() => {
            setSign(sign);
            console.log(sign);
          }}
        >
          {sign}
        </p>
      ))}
    </div>
  );
};

export default Signs;
