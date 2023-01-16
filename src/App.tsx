import { useState } from "react";

import { Routes, Route, useNavigate } from "react-router-dom";

import AppLayout, {
  AppLayoutProps,
} from "@cloudscape-design/components/app-layout";
import BreadcrumbGroup from "@cloudscape-design/components/breadcrumb-group";
import SideNavigation from "@cloudscape-design/components/side-navigation";

import usePageTracking from "./hooks/usePageTracking";

import HomePage from "./pages/home";
import WizardPage from "./pages/wizard";

const contentTypeMap: Record<string, AppLayoutProps["contentType"]> = {
  "/wizard": "wizard",
};

function App() {
  const [activeHref, setActiveHref] = useState("/");
  const navigate = useNavigate();
  usePageTracking();

  return (
    <AppLayout
      contentType={contentTypeMap[activeHref] || "default"}
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
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/wizard" element={<WizardPage />} />
        </Routes>
      }
    />
  );
}

export default App;
