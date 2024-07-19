import { useState, useEffect } from 'react';
import { Dot } from 'lucide-react';
import { Check } from 'lucide-react';
import { cn } from '../../../../../@/lib/utils';

type ProcessProps = {
  currentStep: number;
};

export const Process = ({ currentStep }: ProcessProps) => {
  const [highestStepReached, setHighestStepReached] = useState(-1);
  const steps = ['Customer', 'Shipping', 'Payment'];

  useEffect(() => {
    if (currentStep > highestStepReached) {
      setHighestStepReached(currentStep);
    }
  }, [currentStep, highestStepReached]);

  return (
    <div className="w-full">
      <div className="flex justify-between font-body font-bold w-full">
        {steps.map((step, i) => (
          <div
            key={i}
            className={cn(
              'step-item',
              i <= highestStepReached ? 'active' : ''
            )}
          >
            <div className="step">
              {i >= currentStep ? <Dot /> : <Check />}
            </div>
            <p className="text-gray hidden">{step}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
