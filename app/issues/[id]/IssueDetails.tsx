import { Card, Flex, Heading, Text } from "@radix-ui/themes";
import IssueStatusBadge from "../../components/IssueStatusBadge";
import ReactMarkdown from "react-markdown";
import { Issue } from "@prisma/client";

export default function IssueDetails({ issue }: { issue: Issue }) {
  return (
    <>
      <Heading>{issue.title}</Heading>
      <Flex my="2" gap="3">
        <IssueStatusBadge status={issue.status} />
        <Text>{issue.createdAt.toDateString()}</Text>
      </Flex>
      <Card className="prose" mt="3">
        <ReactMarkdown>{issue.description}</ReactMarkdown>
      </Card>
    </>
  );
}
