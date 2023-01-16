import { useState } from "react";

import AppLayout from "@cloudscape-design/components/app-layout";
import Badge from "@cloudscape-design/components/badge";
import BreadcrumbGroup from "@cloudscape-design/components/breadcrumb-group";
import Button from "@cloudscape-design/components/button";
import ContentLayout from "@cloudscape-design/components/content-layout";
import Container from "@cloudscape-design/components/container";
import Header from "@cloudscape-design/components/header";
import SpaceBetween from "@cloudscape-design/components/space-between";
import SideNavigation from "@cloudscape-design/components/side-navigation";

function App() {
  const [activeHref, setActiveHref] = useState("#/page1");

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
            }
          }}
          items={[
            { type: "link", text: "Page 1", href: "#/page1" },
            { type: "link", text: "Page 2", href: "#/page2" },
            { type: "link", text: "Page 3", href: "#/page3" },
            { type: "link", text: "Page 4", href: "#/page4" },
            { type: "divider" },
            {
              type: "link",
              text: "Notifications",
              href: "#/notifications",
              info: <Badge color="red">23</Badge>,
            },
            {
              type: "link",
              text: "Documentation",
              href: "https://example.com",
              external: true,
            },
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
