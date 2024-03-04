// Define the type for the props that will be accepted by the card container

import { twMerge } from "tailwind-merge";

type CardContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  widthLimit?: "none" | "xs" | "sm" | "md" | "lg";
};

const cardWidths = {
  none: "",
  xs: "max-w-xs",
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
};

export const CardContainer: React.FC<CardContainerProps> = ({
  className,
  children,
  widthLimit = "xs",
  ...props
}) => {
  // Base classes
  const baseClasses: string =
    "rounded-xl border bg-white shadow-sm dark:border-zinc-700 dark:bg-zinc-800 dark:shadow-zinc-700/[.7]";
  const mergedClasses = twMerge([baseClasses, className]);

  const widthClass = twMerge(["w-full", cardWidths[widthLimit]]);
  return (
    <div className={widthClass} {...props}>
      <div className={mergedClasses}>{children}</div>
    </div>
  );
};

// This type of card is for displaying content
export const ContentCard = ({
  header,
  footer,
  title,
  subtitle,
  plaintext,
  link,
  widthLimit,
  children,
}: {
  header?: string;
  footer?: string;
  title?: string;
  subtitle?: string;
  plaintext?: string;
  link?: {
    url: string;
    text: string;
  };
  widthLimit?: CardContainerProps["widthLimit"];
  children?: React.ReactNode;
}) => {
  return (
    <CardContainer widthLimit={widthLimit}>
      {header && (
        <div className="rounded-t-xl border-b bg-gray-100 px-4 py-3 md:px-5 md:py-4 dark:border-zinc-700 dark:bg-zinc-800">
          <p className="mt-1 text-sm text-gray-500 dark:text-zinc-500">
            {header}
          </p>
        </div>
      )}

      <div className="flex flex-col p-4 md:p-5">
        {title && (
          <h3 className="text-lg font-bold text-gray-800 dark:text-white">
            {title}
          </h3>
        )}
        {subtitle && (
          <h3 className="mt-1 text-xs font-medium uppercase text-gray-500 dark:text-zinc-500">
            {subtitle}
          </h3>
        )}
        {plaintext && (
          <p className="mt-2 text-gray-800 dark:text-zinc-400">{plaintext}</p>
        )}
        {children}
        {link && (
          <a
            className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-emerald-500 hover:text-emerald-700 dark:hover:text-emerald-400"
            href={link.url}
          >
            {link.text}
          </a>
        )}
      </div>

      {footer && (
        <div className="rounded-b-xl border-t bg-gray-100 px-4 py-3 md:px-5 md:py-4 dark:border-zinc-700 dark:bg-zinc-800">
          <p className="mt-1 text-sm text-gray-500 dark:text-zinc-500">
            {footer}
          </p>
        </div>
      )}
    </CardContainer>
  );
};

// This type of card is for providing block links.
export const BlockLinkCard = ({
  url,
  text,
  children,
  CustomLinkComponent,
  CustomLinkProps = {},
  widthLimit,
}: {
  url?: string; // URL for the link. If none provide, default to "#"
  text?: string; // The text content to be displayed inside the card
  children: React.ReactNode; //children element that will be rendered inside the card
  CustomLinkComponent?: React.ComponentType<any>;
  CustomLinkProps?: any;
  widthLimit?: CardContainerProps["widthLimit"];
}) => {
  const linkClasses: string = "flex flex-col items-center p-6 sm:p-10";

  const linkContent = (
    <>
      {children}
      {text && <p className="mt-2 font-medium">{text}</p>}
    </>
  );
  return (
    <CardContainer
      widthLimit={widthLimit}
      className="text-gray-800 transition-colors hover:bg-gray-200/50 dark:text-white dark:hover:bg-zinc-700"
    >
      {CustomLinkComponent ? (
        <CustomLinkComponent className={linkClasses} {...CustomLinkProps}>
          {linkContent}
        </CustomLinkComponent>
      ) : (
        <a
          href={url || "#"}
          className={linkClasses}
          target="_blank"
          {...(CustomLinkProps as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {linkContent}
        </a>
      )}
    </CardContainer>
  );
};
