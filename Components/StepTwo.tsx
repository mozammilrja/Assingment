const StepTwo = ({ nextStep, prevStep, handleFormData, values }) => {
  const submitFormData = (e) => {
    e.preventDefault();
    if (!values.fullName || !values.age) {
      alert("Please fill in both fields.");
      return;
    }
    nextStep();
  };

  return (
    <form onSubmit={submitFormData}>
      <h2>Step 2: Personal Info</h2>
      <input
        type="text"
        placeholder="Full Name"
        value={values.fullName}
        onChange={handleFormData("fullName")}
      />
      <br />
      <input
        type="number"
        placeholder="Age"
        value={values.age}
        onChange={handleFormData("age")}
      />
      <br />
      <button type="button" onClick={prevStep}>
        Previous
      </button>
      <button type="submit">Next</button>
    </form>
  );
};

export default StepTwo;
