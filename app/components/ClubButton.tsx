"use client";
import { Button, Link } from "@nextui-org/react";

export function ClubButton({clubId}: any) {
    const saveClubId = () => {
        localStorage.setItem("clubId", clubId.toString());
    };

  return (
    <Link href="/club/">
      <Button variant="bordered" color="primary" onClick={saveClubId}>
        Go to Club
      </Button>
    </Link>
  );
}
