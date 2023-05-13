"use client";

import { Icon, IconComponent, Pane, Text } from "evergreen-ui";
import { useRouter } from "next/navigation";
import { useCallback, useEffect } from "react";

export interface ICard {
  redirectLink: string;
  isExternal?: boolean;
  iconName: IconComponent;
  content: string;
  setIsLoading?: React.Dispatch<React.SetStateAction<boolean>>;
}

const Card = ({
  content,
  iconName,
  isExternal = false,
  redirectLink,
  setIsLoading,
}: ICard) => {
  const router = useRouter();
  const onCardClick = useCallback(() => {
    setIsLoading && setIsLoading(true);
    if (isExternal) {
      window.open(redirectLink);
    } else {
      router.push(redirectLink);
    }
  }, [isExternal, redirectLink, router, setIsLoading]);

  return (
    <Pane
      display="flex"
      alignItems="center"
      justifyContent="center"
      cursor="pointer"
      onClick={onCardClick}
      height={100}
      width={300}
      border="1px solid #ccc"
      elevation={1}
      padding={10}
      flexDirection="column"
      marginRight={20}
      marginBottom={10}
    >
      <Pane>
        <Icon icon={iconName} size={30} />
      </Pane>
      <Pane>
        <Text>{content}</Text>
      </Pane>
    </Pane>
  );
};

export { Card };
