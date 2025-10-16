// file: /components/SubmitButton.js
const SubmitButton = ({ onClick }) => {
  return (
    <button type="submit" className="btn btn-dark" onClick={onClick}>
      Submit
    </button>
  );
};

export default SubmitButton;
