"use client";

import {
  Button,
  Checkbox,
  Heading,
  Table,
  Text,
  Pane,
  TrashIcon,
  toaster,
} from "evergreen-ui";
import {
  ISubscription,
  SubscriptionListResponse,
} from "../subscription-manager/model";
import { useEffect, useState } from "react";

const SubscriptionManager = ({
  getSubscriptionList,
}: {
  getSubscriptionList: () => Promise<SubscriptionListResponse>;
}) => {
  const [subscriptionList, setSubscriptionList] = useState<ISubscription[]>([]);
  useEffect(() => {
    getSubscriptionList().then((res) => setSubscriptionList(res));
  }, [getSubscriptionList]);
  return (
    <Table>
      <Table.Head display="flex">
        <Table.TextHeaderCell flex={0.25}>Apps</Table.TextHeaderCell>
        <Table.TextHeaderCell flex={0.25}>Start date</Table.TextHeaderCell>
        <Table.TextHeaderCell flex={0.25}>Days left</Table.TextHeaderCell>
        <Table.TextHeaderCell flex={0.25}>Purchase</Table.TextHeaderCell>
      </Table.Head>
      <Table.Body height="calc(100vh - 124px)">
        {subscriptionList.map((subscription) => {
          return (
            <Table.Row key={subscription.id}>
              <Table.TextCell flex={0.25}>
                <Heading size={200}>{subscription.name}</Heading>
              </Table.TextCell>
              <Table.TextCell flex={0.25}>
                <Heading size={200}>{subscription.startDate}</Heading>
              </Table.TextCell>
              <Table.TextCell flex={0.25}>
                <Heading size={200}>{subscription.daysLeft}</Heading>
              </Table.TextCell>
              <Table.TextCell flex={0.25}>
                {subscription.purchase ? (
                  <Heading size={200}>{"-"}</Heading>
                ) : (
                  <Heading
                    size={200}
                    cursor="pointer"
                    onClick={() => alert("Purchasing page")}
                  >
                    {"Request to access"}
                  </Heading>
                )}
              </Table.TextCell>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
  );
};

export { SubscriptionManager };
