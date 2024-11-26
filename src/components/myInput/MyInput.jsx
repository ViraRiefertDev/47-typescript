function MyInput({ label, name, type, placeholder }) {
  return (
    <>
      <label>{label}</label>
      <input placeholder={placeholder} name={name}  type={type} />
    </>
  );
}

export default MyInput;
