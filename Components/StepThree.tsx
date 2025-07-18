const StepThree = ({ values, prevStep }) => {
  const { email, phone, fullName, age } = values;

  const handleFinalSubmit = () => {
    console.log("Submitted", values);
  };

  return (
    <div>
      <h2>Step 3: Review Your Info</h2>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <p>Full Name: {fullName}</p>
      <p>Age: {age}</p>

      <button onClick={prevStep}>Previous</button>
      <button onClick={handleFinalSubmit}>Submit</button>
    </div>
  );
};

export default StepThree;
