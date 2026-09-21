import * as React from "react";
import { Input as InputPrimitive } from "@base-ui/react/input";
import { cn } from "cn";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <InputPrimitive
      type={type}
      data-slot="input"
      className={cn(
        "h-12 w-full min-w-0 rounded-sm border border-ink/20 bg-paper px-3 text-base text-ink transition-colors outline-none placeholder:text-muted-foreground focus-visible:border-terracotta focus-visible:ring-2 focus-visible:ring-terracotta/30 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive",
        className
      )}
      {...props}
    />
  );
}

export { Input };
