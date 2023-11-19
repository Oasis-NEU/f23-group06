"use client";
import { Button, Link } from "@nextui-org/react";

export function ClubButton({clubId}: any) {
  return (
    <Link href={`/${clubId}`}>
      <Button variant="bordered" color="primary">
        Go to Club
      </Button>
    </Link>
  );
}
