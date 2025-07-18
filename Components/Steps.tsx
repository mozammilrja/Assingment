"use client";

import { useState } from "react";
import StepOne from "../../components/StepOne";
import StepTwo from "../../components/StepTwo";
import StepThree from "../../components/StepThree";

const Steps = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    fullName: "",
    age: "",
  });

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleInputData = (input) => (e) => {
    const { value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [input]: value,
    }));
  };

  switch (step) {
    case 1:
      return (
        <StepOne
          nextStep={nextStep}
          handleFormData={handleInputData}
          values={formData}
        />
      );
    case 2:
      return (
        <StepTwo
          nextStep={nextStep}
          prevStep={prevStep}
          handleFormData={handleInputData}
          values={formData}
        />
      );
    case 3:
      return <StepThree values={formData} prevStep={prevStep} />;
    default:
      return <div>Error: Unknown step</div>;
  }
};

export default Steps;
