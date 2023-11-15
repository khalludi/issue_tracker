import React from "react";
import { Button } from "@radix-ui/themes";
import { Pencil2Icon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function EditIssueButton({ issueId }: { issueId: number }) {
  return (
    <Link href={`/issues/${issueId}/edit`}>
      <Button>
        <Pencil2Icon />
        Edit Issue
      </Button>
    </Link>
  );
}
