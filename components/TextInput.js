// file: /components/TextInput.js
const TextInput = ({ value, onChange, placeholder }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      className="form-control"
      placeholder={placeholder}
    />
  );
};

export default TextInput;