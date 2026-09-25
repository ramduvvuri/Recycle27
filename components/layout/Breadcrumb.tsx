import Link from "next/link";
import { ChevronRight } from "lucide-react";
import React from "react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumb({ items, className }: BreadcrumbProps) {
  // Filter out any redundant leading "Home" item since Breadcrumb already renders "Home" as root
  const cleanItems = items.filter(
    (item, index) => !(index === 0 && item.label.trim().toLowerCase() === "home")
  );

  return (
    <div className={`bg-white border-b border-light-border w-full ${className || ""}`}>
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12 py-3">
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 overflow-x-auto whitespace-nowrap scrollbar-hide">
            <li>
              <Link
                href="/"
                className="font-body text-[13px] text-secondary-text/70 hover:text-primary-emerald transition-colors"
              >
                Home
              </Link>
            </li>
            {cleanItems.map((item, index) => {
              const isLast = index === cleanItems.length - 1;
              return (
                <React.Fragment key={index}>
                  <li>
                    <ChevronRight className="w-3 h-3 text-light-border shrink-0" />
                  </li>
                  <li>
                    {item.href && !isLast ? (
                      <Link
                        href={item.href}
                        className="font-body text-[13px] text-secondary-text/70 hover:text-primary-emerald transition-colors"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <span className="font-body text-[13px] font-medium text-dark-text/80">
                        {item.label}
                      </span>
                    )}
                  </li>
                </React.Fragment>
              );
            })}
          </ol>
        </nav>
      </div>
    </div>
  );
}
