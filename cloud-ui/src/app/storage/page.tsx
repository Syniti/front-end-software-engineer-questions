"use client"

import { Pane, Heading, Text, Button } from "evergreen-ui";

export default function Storage() {
  return (
    <Pane padding={30}>
      <Pane
        display="flex"
        justifyContent="center"
        alignItems="center"
        marginBottom={20}
      >
        <Heading size={800} marginLeft={10}>
          Welcome Anonymous User
        </Heading>
      </Pane>
      <Pane
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        marginBottom={50}
      >
        <Heading size={600} marginLeft={10} marginBottom={20}>
          84% of storage used
        </Heading>
        <Text marginBottom={30}>Storage in Email, Photos</Text>
        <Button marginRight={16} appearance="primary" intent="success">
          Get more storage
        </Button>
      </Pane>
    </Pane>
  );
}
