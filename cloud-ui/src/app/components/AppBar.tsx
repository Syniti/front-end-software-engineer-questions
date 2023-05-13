"use client";

import {
  Avatar,
  Badge,
  Button,
  Heading,
  Link,
  Pane,
  Popover,
  Position,
  Text,
  Icon,
  CloudIcon,
} from "evergreen-ui";

const AppBar = () => {
  return (
    <Pane display="flex" padding={5} background="tint2" borderRadius={3}>
      <Pane flex={1} alignItems="center" display="flex">
        <Icon icon={CloudIcon} size={30} color="green" />
        <Heading size={800} marginLeft={10} color="green">
          Cloud UI
        </Heading>
      </Pane>
      <Pane>
        <Popover
          content={
            <Pane display="flex" alignItems="start" padding={10}>
              <Pane
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexDirection="column"
              >
                <Avatar
                  hashValue="id_124"
                  name="Anonymous User"
                  size={80}
                  marginRight={16}
                />
              </Pane>
              <Pane display="flex" flexDirection="column">
                <Text>au@xyz.com</Text>
                <Text marginTop={5}>Dev</Text>
                <Link marginTop={5} href="/">
                  Sign out
                </Link>
              </Pane>
            </Pane>
          }
          position={Position.BOTTOM_RIGHT}
        >
          <Avatar
            hashValue="id_124"
            name="Anonymous User"
            size={40}
            marginRight={16}
          />
        </Popover>
      </Pane>
    </Pane>
  );
};

export { AppBar };
