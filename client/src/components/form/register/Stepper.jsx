import React, { useState, useEffect, useRef } from 'react';

function Stepper({ steps, currentStep }) {
  const [newStep, setNewStep] = useState([]);
  const stepsRef = useRef();

  const updateStep = (stepNumber, step) => {
    const newSteps = [...step];
   
    let count = 0;
    while (count < newSteps.length) {
      // current step
      if (count === stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: true,
          selected: true,
          completed: false,
        };
        count += 1;
      } else if (count < stepNumber) {
        // step completed
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: true,
          completed: true,
        };
        count += 1;
      } else {
        // step pending
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: false,
          completed: false,
        };
        count += 1;
      }
    }

    return newSteps;
  };

  useEffect(() => {
    const stepsState = steps.map((step, index) => ({

      description: step,
      completed: false,
      highlighted: index === 0,
      selected: index === 0,
    }));

    stepsRef.current = stepsState;
    const current = updateStep(currentStep - 1, stepsRef.current);
    setNewStep(current);
  }, [steps, currentStep]);

  const stepsDisplay = newStep.map((step, index) => (
    <div
      key={index}
      className={`${index !== newStep.length - 1 ? 'w-full flex items-center' : 'flex items-center'}`}
    >
      <div className="relative flex flex-col mb-8  items-center text-accent font-bold">
        <div
          className={` transition duration-500 ease-in-out h-12 w-12 flex items-center justify-center py-3  ${step.selected ? ' text-accent font-bold ' : ''
          }`}
        >
          {step.completed ? (
            <span className="text-accent font-bold text-xl">&#10003;</span>
          ) : (index + 1)}
        </div>
        <div
          className={`absolute top-0  text-center mt-16  w-32 text-xs font-normal uppercase ${step.highlighted ? 'text-accent' : 'text-gray-400'}`}
        >
          {step.description}
        </div>
      </div>
      <div
        className={`flex-auto border-t-2 transition duration-500 ease-in-out  ${step.completed ? 'border-accent' : 'border-gray-300 '
        }  `}
      />
    </div>
  ));

  return (
    <div className="mx-4 p-4 flex justify-between items-center">
      {stepsDisplay}
    </div>
  );
}
export default Stepper;
