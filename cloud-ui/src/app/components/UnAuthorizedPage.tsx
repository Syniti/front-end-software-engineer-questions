"use client";
import { Heading, Icon, LockIcon, Pane, Link } from "evergreen-ui";
import { useRouter } from "next/navigation";
const UnAuthorizedPage = () => {
  const router = useRouter()
  return (
    <Pane
      display="flex"
      alignItems="center"
      justifyContent="center"
      height={"calc(100vh - 124px)"}
      flexDirection="column"
    >
      <Pane marginBottom="20">
        <Icon icon={LockIcon} size={50} />
      </Pane>
      <Pane>
        <Heading size={600}>
          Unauthorized Access,{" "}
          <span
            style={{ cursor: "pointer", textDecoration: "underline" }}
            onClick={() => router.push("/subscription-manager")}
          >
            Subscribe
          </span>{" "}
          to Premium Version
        </Heading>
      </Pane>
    </Pane>
  );
};

export { UnAuthorizedPage };
