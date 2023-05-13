"use client";

import {
  Pane,
  Heading,
  ArchiveIcon,
  FloppyDiskIcon,
  ImageRotateLeftIcon,
  LockIcon,
} from "evergreen-ui";
import React, { useState } from "react";
import { Card, ICard, Loader } from "./components";

export default function Home() {
  const [loading, setIsLoading] = useState<boolean>(false);
  const quickAccessCardData: ICard[] = React.useMemo<ICard[]>(
    () => [
      {
        iconName: ArchiveIcon,
        content: "You have received 5 mails",
        redirectLink: "/email",
      },
      {
        iconName: FloppyDiskIcon,
        content: "You have reached almost 84% of your storage",
        redirectLink: "/storage",
      },
      {
        iconName: ImageRotateLeftIcon,
        content: "Photo backup is complete, go check out!",
        redirectLink: "/photos",
      },
      {
        iconName: LockIcon,
        content: "Subscribe to have this feature",
        redirectLink: "/device-catalog",
      },
    ],
    []
  );
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Pane display="flex" padding={50} flexDirection="column">
          <Pane display="flex" flexDirection="row" marginBottom={20}>
            <Heading size={800} marginLeft={5}>
              Welcome Anonymous User
            </Heading>
          </Pane>
          <Pane>
            <Heading size={500} marginLeft={5} marginBottom={20}>
              Quick Access
            </Heading>
            <Pane display="flex" flexWrap="wrap" justifyContent="space-between">
              {quickAccessCardData.map((card, index) => {
                return (
                  <Card key={index} {...card} setIsLoading={setIsLoading} />
                );
              })}
            </Pane>
          </Pane>
        </Pane>
      )}
    </>
  );
}
