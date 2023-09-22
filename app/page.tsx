
import { UserButton } from "@clerk/nextjs";
import { useEffect } from "react";
import { docClient, dynamodb } from "@/lib/api";

import { ListTablesCommand } from "@aws-sdk/client-dynamodb";


export default async function Home() {
  try {
    const results = await dynamodb.send(new ListTablesCommand({}));
    results.TableNames?.forEach(function (name: string) {
      console.log(name);

    });
  } catch (err) {
    console.error(err)
  }
  return (
    <div>
      <UserButton afterSignOutUrl="/"/>
    </div>
  )
}