import { Box, Card, Flex } from "@radix-ui/themes";
import { Skeleton } from "@/app/components";

export default function IssueDetailLoadingPage() {
  return (
    <Box className="max-w-xl">
      <Skeleton />
      <Flex my="2" gap="3">
        <Skeleton width="5rem" />
        <Skeleton width="8rem" />
      </Flex>
      <Card className="prose" mt="3">
        <Skeleton count={3} />
      </Card>
    </Box>
  );
}
