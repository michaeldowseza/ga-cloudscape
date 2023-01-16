import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import AppLayout from "@cloudscape-design/components/app-layout";
import Badge from "@cloudscape-design/components/badge";
import BreadcrumbGroup from "@cloudscape-design/components/breadcrumb-group";
import Button from "@cloudscape-design/components/button";
import SideNavigation from "@cloudscape-design/components/side-navigation";
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

function App() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [activeHref, setActiveHref] = useState("/wizard");
  const navigate = useNavigate();

  return (
    <AppLayout
      contentType="wizard"
      breadcrumbs={
        <BreadcrumbGroup
          items={[
            { text: "System", href: "#" },
            { text: "Components", href: "#components" },
            {
              text: "Breadcrumb group",
              href: "#components/breadcrumb-group",
            },
          ]}
          ariaLabel="Breadcrumbs"
        />
      }
      navigation={
        <SideNavigation
          activeHref={activeHref}
          header={{ href: "#/", text: "Service name" }}
          onFollow={(event) => {
            if (!event.detail.external) {
              event.preventDefault();
              setActiveHref(event.detail.href);
              navigate(event.detail.href);
            }
          }}
          items={[
            { type: "link", text: "Home", href: "/" },
            { type: "link", text: "Wizard", href: "/wizard" },
          ]}
        />
      }
      content={
        <Wizard
          steps={steps}
          i18nStrings={i18nStrings}
          activeStepIndex={activeStepIndex}
          onNavigate={(e) => setActiveStepIndex(e.detail.requestedStepIndex)}
          secondaryActions={
            activeStepIndex === 2 ? <Button>Save as draft</Button> : null
          }
        />
      }
    />
  );
}

export default App;
