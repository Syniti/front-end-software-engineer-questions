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
import React, { useCallback, useState } from "react";
import { Email, EmailListResponse } from "../email/models";

const EmailList = ({
  getEmailList,
}: {
  getEmailList: () => Promise<EmailListResponse>;
}) => {
  const [emails, setEmails] = useState<EmailListResponse>([]);
  const [selectedEmails, setSelectedEmails] = useState<number[]>([]);

  const onSelectEmail = React.useCallback(
    (id: number) => {
      let selectedEmailsArray = [...selectedEmails];
      if (selectedEmailsArray.includes(id)) {
        selectedEmailsArray = selectedEmailsArray.filter(
          (selectedId) => selectedId !== id
        );
      } else {
        selectedEmailsArray = [...selectedEmailsArray, id];
      }
      setSelectedEmails(selectedEmailsArray);
    },
    [selectedEmails]
  );

  const onDeleteEmail = useCallback(() => {
    const deletedEmails = emails.filter((email: Email) => !(selectedEmails.includes(email.id as number)));
    setSelectedEmails([]);
    setEmails(deletedEmails);
    toaster.success("Deleted selected mails");
  }, [emails, selectedEmails]);

   React.useEffect(() => {
     getEmailList().then((emails) => setEmails(emails));
   }, [getEmailList]);
  
  return (
    <Pane>
      <Pane>
        <Button
          marginY={8}
          marginRight={12}
          iconBefore={TrashIcon}
          intent="danger"
          disabled={selectedEmails.length === 0 || emails.length === 0}
          onClick={() => onDeleteEmail()}
        >
          Delete...
        </Button>
      </Pane>
      <Pane>
        <Table>
          <Table.Head display="flex">
            <Table.TextHeaderCell flex={0.1}>Name</Table.TextHeaderCell>
            <Table.TextHeaderCell flex={0.8}>Subject</Table.TextHeaderCell>
          </Table.Head>
          <Table.Body height="calc(100vh - 172px)">
            {emails.map((email: Email) => {
              let isChecked = selectedEmails.includes(email.id as number);
              let border = isChecked ? `1px solid #ccc` : "";
              let borderBottom = isChecked ? `1px solid #ccc !important` : "";
              
              return (
                <Table.Row
                  isSelectable
                  onSelect={() => onSelectEmail(email.id as number)}
                  border={border}
                  borderBottom={borderBottom}
                  key={email.id}
                >
                  <Table.TextCell flex={0.1}>
                    <Heading size={200}>{email.name}</Heading>
                    <Text>{email.email}</Text>
                  </Table.TextCell>
                  <Table.TextCell flex={0.8}>
                    <Heading size={200}>{email.subject}</Heading>
                  </Table.TextCell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
      </Pane>
    </Pane>
  );
};

export { EmailList };
