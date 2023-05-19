const LightBox = ({ clickedBlog, setClickedBlog }) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("dismiss")) {
      setClickedBlog(null);
    }
  };

  return (
    <>
      <div className="overlay dismiss" onClick={handleClick}>
        <img src={clickedBlog.thumb} alt={clickedBlog.title} />
        <span className="dismiss" onClick={handleClick}>
          X
        </span>
      </div>
    </>
  );
};

export default LightBox;
