import Link from "next/link";
import { ChevronRight } from "lucide-react";
import React from "react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="py-4 border-b border-light-border bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
        <ol className="flex items-center gap-2 overflow-x-auto whitespace-nowrap scrollbar-hide">
          <li>
            <Link href="/" className="font-body text-[13px] text-secondary-text hover:text-primary-emerald transition-colors">
              Home
            </Link>
          </li>
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <React.Fragment key={index}>
                <li>
                  <ChevronRight className="w-4 h-4 text-light-border" />
                </li>
                <li>
                  {item.href && !isLast ? (
                    <Link href={item.href} className="font-body text-[13px] text-secondary-text hover:text-primary-emerald transition-colors">
                      {item.label}
                    </Link>
                  ) : (
                    <span className="font-body text-[13px] font-medium text-dark-text">
                      {item.label}
                    </span>
                  )}
                </li>
              </React.Fragment>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
