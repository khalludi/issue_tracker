import IssueForm from "@/app/issues/_components/IssueForm";
import prisma from "@/prisma/client";
import { notFound } from "next/navigation";

interface Props {
  params: { id: string };
}

export default async function EditIssuePage({ params }: Props) {
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!issue) notFound();

  return <IssueForm issue={issue} />;
}
