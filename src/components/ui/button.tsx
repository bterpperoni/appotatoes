"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

//-- -------------------------------------------- Button Styles Variants ----------------------------------------------|
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-lammerant text-white hover:bg-lammerant/90",
        primary: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        customLink: "relative overflow-hidden border-2 border-lammerant bg-white text-lammerant hover:bg-gray-50 hover:text-white px-12 py-3 rounded-md text-md font-medium group",
        customButton: "relative overflow-hidden border-2 border-lammerant text-lammerant font-medium py-2 m-1 rounded-xl group cursor-pointer transition-colors",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

//-- ------------------------------------------------- Button Props ---------------------------------------------------|
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  href?: string;
}

//-- ---------------------------------------------------- Component ---------------------------------------------------|
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      children,
      href,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    const finalClass = cn(buttonVariants({ variant, size }), className);

    //-- ----------------------------- Gestion des contenus spécifiques à chaque variante -----------------------------|
    let content = children;

    switch (variant) {
      case "customLink": {
        content = (
          <>
            <span className="absolute left-0 top-1/2 h-0 w-full bg-lammerant opacity-100 transition-all duration-400 ease group-hover:top-0 group-hover:h-full" />
            <span className="absolute right-0 flex h-10 w-10 translate-x-full items-center justify-start transition duration-300 group-hover:translate-x-0">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
              </svg>
            </span>
            <span className="relative">{children}</span>
          </>
        );
        break;
      }
      case "customButton": {
        const buttonClass = cn(finalClass, `container`);
        return (
          <Comp ref={ref} className={buttonClass} {...props}>
            <span className="ease absolute top-1/2 h-0 w-full origin-center -translate-x-10 rotate-45 bg-lammerant transition-all duration-200 group-hover:h-96 group-hover:-translate-y-32" />
            <span className="ease relative text-lammerant font-bold transition duration-300 group-hover:text-white">
              {children}
            </span>
          </Comp>
        );
      }
      case "default": {
        content = (
          <>
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
            </svg>
            {children}
          </>
        );
        break;
      }
    }


    return (
      <Comp ref={ref} className={finalClass} {...props}>
        {content}
      </Comp>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
