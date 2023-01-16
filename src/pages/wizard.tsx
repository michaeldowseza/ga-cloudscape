import React, { useState } from "react";

import Box from "@cloudscape-design/components/box";
import Button from "@cloudscape-design/components/button";
import Wizard, { WizardProps } from "@cloudscape-design/components/wizard";

const steps: WizardProps.Step[] = [
  {
    title: "Step 1",
    content: (
      <div>
        <div id="content-text">Content 1</div>
      </div>
    ),
  },
  {
    title: "Step 2",
    content: (
      <div>
        <div id="content-text">Content 2</div>
      </div>
    ),
  },
  {
    title: "Step 3",
    content: (
      <div>
        <div id="content-text">Content 3</div>
      </div>
    ),
  },
];

const i18nStrings: WizardProps.I18nStrings = {
  stepNumberLabel: (stepNumber) => `Step ${stepNumber}`,
  collapsedStepsLabel: (stepNumber, stepsCount) =>
    `Step ${stepNumber} of ${stepsCount}`,
  skipToButtonLabel: (step) => `Skip to ${step.title}`,
  navigationAriaLabel: "Steps",
  errorIconAriaLabel: "Error",
  cancelButton: "Cancel",
  previousButton: "Previous",
  nextButton: "Next",
  submitButton: "Create",
  optional: "optional",
};

function WizardPage() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  return (
    <Wizard
      steps={steps}
      i18nStrings={i18nStrings}
      activeStepIndex={activeStepIndex}
      onNavigate={(e) => setActiveStepIndex(e.detail.requestedStepIndex)}
      secondaryActions={
        activeStepIndex === 2 ? <Button>Save as draft</Button> : null
      }
    />
  );
}

export default WizardPage;
