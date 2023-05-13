"use client";

import { Icon, Pane, Tab, Tablist, LockIcon, Pill } from "evergreen-ui";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import { Loader } from "./Loader";

export interface ITabs {
  name: string;
  path: string;
  isLocked: boolean;
}

const NavigationPane = ({ children }: { children: React.ReactNode }) => {
  const tabs: ITabs[] = React.useMemo<ITabs[]>(
    () => [
      {
        name: "Home",
        path: "/",
        isLocked: false,
      },
      {
        name: "Email",
        path: "/email",
        isLocked: false,
      },
      {
        name: "Storage",
        path: "/storage",
        isLocked: false,
      },
      {
        name: "Photos",
        path: "/photos",
        isLocked: false,
      },
      {
        name: "Device Catalog",
        path: "/device-catalog",
        isLocked: true,
      },
      {
        name: "Subscription Manager",
        path: "/subscription-manager",
        isLocked: false,
      },
    ],
    []
  );
  const pathname = usePathname();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const handleRoute = useCallback(
    (path: string) => {
      setIsLoading(true);
      router.push(path);
    },
    [router]
  );

  useEffect(() => {
    setIsLoading(false);
  }, [pathname]);

  return (
    <Pane display="flex" height="calc(100vh - 67px)">
      <Pane background="tint2" flex={0.15}>
        <Tablist marginBottom={16} flexBasis={200}>
          {tabs.map((tab, _index) => {
            return (
              <Tab
                aria-controls={`panel-${tab}`}
                direction="vertical"
                isSelected={tab.path === pathname}
                key={tab.name}
                onSelect={() => handleRoute(tab.path)}
                color="green"
                appearance="secondary"
              >
                {tab.name}
                {tab.name === "Email" ? (
                  <Pill display="inline-flex" margin={8} color="red">
                    5
                  </Pill>
                ) : null}
                {tab.isLocked ? (
                  <Icon icon={LockIcon} size={12} marginLeft={5} />
                ) : null}
              </Tab>
            );
          })}
        </Tablist>
      </Pane>
      <Pane width="100%" flex={0.85}>
        {isLoading ? <Loader /> : children}
      </Pane>
    </Pane>
  );
};

export { NavigationPane };
