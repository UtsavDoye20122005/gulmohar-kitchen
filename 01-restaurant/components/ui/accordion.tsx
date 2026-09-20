import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion";
import { cn } from "cn";
import { PlusIcon, MinusIcon } from "lucide-react";

function Accordion({ className, ...props }: AccordionPrimitive.Root.Props) {
  return (
    <AccordionPrimitive.Root
      data-slot="accordion"
      className={cn("flex w-full flex-col", className)}
      {...props}
    />
  );
}

function AccordionItem({ className, ...props }: AccordionPrimitive.Item.Props) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("border-b border-ink/15", className)}
      {...props}
    />
  );
}

function AccordionTrigger({
  className,
  children,
  ...props
}: AccordionPrimitive.Trigger.Props) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "group/accordion-trigger relative flex flex-1 items-center justify-between py-5 text-left font-display text-xl tracking-tight outline-none focus-visible:ring-2 focus-visible:ring-terracotta/40",
          className
        )}
        {...props}
      >
        {children}
        <PlusIcon
          data-slot="accordion-trigger-icon"
          className="size-4 shrink-0 text-terracotta group-aria-expanded/accordion-trigger:hidden"
        />
        <MinusIcon
          data-slot="accordion-trigger-icon"
          className="hidden size-4 shrink-0 text-terracotta group-aria-expanded/accordion-trigger:inline"
        />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: AccordionPrimitive.Panel.Props) {
  return (
    <AccordionPrimitive.Panel
      data-slot="accordion-content"
      className="overflow-hidden text-base text-ink-soft data-open:animate-accordion-down data-closed:animate-accordion-up"
      {...props}
    >
      <div className={cn("h-(--accordion-panel-height) pt-0 pb-5", className)}>
        {children}
      </div>
    </AccordionPrimitive.Panel>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
