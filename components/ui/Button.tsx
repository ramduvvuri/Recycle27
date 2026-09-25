"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRegistrationModal } from "@/contexts/RegistrationModalContext";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "secondary-light" | "icon";
  href?: string;
  icon?: React.ReactNode;
  showArrow?: boolean;
  modalTrigger?: boolean;
}

export function Button({
  className,
  variant = "primary",
  href,
  icon,
  showArrow = false,
  modalTrigger = false,
  children,
  ...props
}: ButtonProps) {
  const { openModal } = useRegistrationModal();
  const baseStyles = "inline-flex items-center justify-center font-body text-[14px] font-medium transition-all duration-200";
  
  const variants = {
    primary: "px-6 py-3 bg-primary-emerald text-light-text rounded-full hover:bg-deep-emerald hover:-translate-y-[1px] active:translate-y-0",
    secondary: "px-6 py-3 bg-transparent border-[1.5px] border-dark-text text-dark-text rounded-full hover:bg-dark-text hover:text-light-text",
    "secondary-light": "px-6 py-3 bg-transparent border-[1.5px] border-light-text text-light-text rounded-full hover:bg-white/10",
    icon: "px-6 py-3 bg-primary-dark text-light-text rounded-full flex gap-2 items-center hover:bg-secondary-dark",
  };

  const content = (
    <>
      {icon && <span className="mr-2">{icon}</span>}
      {children}
      {showArrow && (
        <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
      )}
    </>
  );

  const handleClick = (e: React.MouseEvent) => {
    if (modalTrigger) {
      e.preventDefault();
      openModal();
    }
  };

  if (modalTrigger) {
    return (
      <button
        className={cn(baseStyles, variants[variant], "group", className)}
        onClick={handleClick}
        {...props}
      >
        {content}
      </button>
    );
  }

  if (href) {
    return (
      <Link href={href} className={cn(baseStyles, variants[variant], "group", className)}>
        {content}
      </Link>
    );
  }

  return (
    <button
      className={cn(baseStyles, variants[variant], "group", className)}
      {...props}
    >
      {content}
    </button>
  );
}
