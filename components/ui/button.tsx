import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-sm border border-transparent text-[0.72rem] font-medium tracking-[0.16em] uppercase whitespace-nowrap transition-colors outline-none select-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-terracotta/40 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "bg-terracotta text-primary-foreground hover:bg-terracotta-deep",
        outline:
          "border-ink/20 bg-transparent text-ink hover:border-ink hover:bg-ink hover:text-cream",
        secondary:
          "bg-ink text-cream hover:bg-ink-soft",
        ghost:
          "text-ink hover:bg-cream-deep",
        destructive:
          "bg-destructive text-primary-foreground hover:opacity-90",
        link: "tracking-normal normal-case text-terracotta underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 gap-2 px-5",
        xs: "h-8 gap-1 px-3 text-[0.65rem]",
        sm: "h-10 gap-2 px-4",
        lg: "h-12 gap-2 px-6",
        icon: "size-11",
        "icon-xs": "size-8",
        "icon-sm": "size-10",
        "icon-lg": "size-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
