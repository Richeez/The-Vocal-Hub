/* eslint-disable react/prop-types */

const TextBox = ({
  heading1,
  heading2,
  heading3,
  text1,
  text2,
  button,
  alignPText = "left",
  display = "block",
  to,
  scroll,
  href,
}) => {
  const scrollToPage = (page) => {
    window.scrollTo({
      top: page.current.offsetTop,
    });
  };

  return (
    <div className="textBox df fdirc">
      {heading1 ? <h1>{heading1}</h1> : null}
      {heading2 ? <h2>{heading2}</h2> : null}
      {heading3 ? <h3>{heading3}</h3> : null}
      <p style={{ textAlign: alignPText }}>{text1}</p>
      <p style={{ textAlign: alignPText }}>{text2}</p>
      <button
        onClick={scroll ? () => scrollToPage(scroll) : null}
        style={{ display: display }}
      >
        {to ? (
          <span to={to}>{button}</span>
        ) : (
          <a href={href} target="_blank" rel="noopener noreferrer">
            {button}
          </a>
        )}
      </button>
    </div>
  );
};

export default TextBox;
