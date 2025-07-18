const StepOne = ({ nextStep, handleFormData, values }) => {
  const submitFormData = (e) => {
    e.preventDefault();
    if (!values.email || !values.phone) {
      alert("Please fill in both fields.");
      return;
    }
    nextStep();
  };

  return (
    <form onSubmit={submitFormData}>
      <h2>Step 1: Contact Info</h2>
      <input
        type="email"
        placeholder="Email"
        value={values.email}
        onChange={handleFormData("email")}
        required
      />
      <br />
      <input
        type="tel"
        placeholder="Phone Number"
        value={values.phone}
        onChange={handleFormData("phone")}
        required
      />
      <br />
      <button type="submit">Next</button>
    </form>
  );
};

export default StepOne;
