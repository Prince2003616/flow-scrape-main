import { cn } from "@/lib/utils";
import { SquareDashedMousePointer } from "lucide-react";
import Link from "next/link";
import React from "react";

function Logo({
  fontSize = "2xl",
  iconSize = 20,
}: {
  fontSize?: string;
  iconSize?: number;
}) {
  return (
    <Link
      className={cn(
        "text-2xl font-extrabold flex items-center gap-2",
        fontSize
      )}
      href="/"
    >
      <div className="rounded-xl bg-gradient-to-r from-primary to-secondary p-2">
        <SquareDashedMousePointer size={iconSize} className="stroke-foreground" />
      </div>
      <div>
        <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Flow
        </span>
        <span className="text-foreground">Scrape</span>
      </div>
    </Link>
  );
}

export default Logo;