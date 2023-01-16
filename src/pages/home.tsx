import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import AppLayout from "@cloudscape-design/components/app-layout";
import BreadcrumbGroup from "@cloudscape-design/components/breadcrumb-group";
import Button from "@cloudscape-design/components/button";
import ContentLayout from "@cloudscape-design/components/content-layout";
import Container from "@cloudscape-design/components/container";
import Header from "@cloudscape-design/components/header";
import SpaceBetween from "@cloudscape-design/components/space-between";
import SideNavigation from "@cloudscape-design/components/side-navigation";

function App() {
  const [activeHref, setActiveHref] = useState("/");
  const navigate = useNavigate();

  return (
    <AppLayout
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
        <ContentLayout
          header={
            <SpaceBetween size="m">
              <Header
                variant="h1"
                description="This is a generic description used in the header."
                actions={<Button variant="primary">Button</Button>}
              >
                Header
              </Header>
            </SpaceBetween>
          }
        >
          <Container
            header={
              <Header variant="h2" description="Container description">
                Container header
              </Header>
            }
          >
            Container content
          </Container>
        </ContentLayout>
      }
    />
  );
}

export default App;
