import { twMerge } from "tailwind-merge";

// COLORS TYPE
type PrimaryColors = {
  bg?: string;
  hoverBg?: string;
  focusRing?: string;
};

type SecondaryColors = {
  text?: string;
  hoverBorder?: string;
  hoverBg?: string;
  focusRing?: string;
  darkHoverBorder?: string;
};

type TertiaryColors = {
  text?: string;
  hoverText?: string;
  focusRing?: string;
  darkHoverText?: string;
};

type BaseButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

// Overload Signatures for the button component
type ButtonComponent = {
  (
    props: BaseButtonProps & { variant?: "primary"; colors?: PrimaryColors }
  ): JSX.Element;
  (
    props: BaseButtonProps & { variant: "secondary"; colors?: SecondaryColors }
  ): JSX.Element;
  (
    props: BaseButtonProps & { variant: "tertiary"; colors?: TertiaryColors }
  ): JSX.Element;
};

export const Button: ButtonComponent = ({
  variant = "primary",
  colors = {},
  ...props
}) => {
  // base clasess
  const baseClasses: string =
    "inline-flex items-center justify center gap-2 rounded-md px-4 text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-zinc-800 disabled:pointer-events-none disabled:opacity-50";

  const generateVariantClasses = (variant: string, colorProps: any) => {
    switch (variant) {
      case "primary":
        return `border border-transparent py-3 text-white ${
          colorProps.bg || "bg-emerald-500"
        } ${colorProps.hoverBg || "hover:bg-emerald-600"} ${
          colorProps.focusRing || "focus:ring-emerald-500"
        }`;

      case "secondary":
        return `border-2 border-gray-200 py-[0.688rem] hover:text-white dark:border-zinc-700 ${
          colorProps.text || "text-emerald-500"
        } ${colorProps.hoverBorder || "hover:border-emerald-500"} ${
          colorProps.hoverBg || "hover:bg-emerald-500"
        } ${colorProps.focusRing || "focus:ring-emerald-500"} ${
          colorProps.darkHoverBorder || "dark:hover:border-emerald-500"
        }`;

      case "tertiary":
        return `border border-tranparent py-3 underline-offset-4 ring-offset-white hover:underline ${
          colorProps.text || "text-emerald-500"
        } ${colorProps.hoverText || "hover:text-emerald-700"} ${
          colorProps.focusRing || "focus:ring-emerald-500"
        } ${colorProps.darkHoverText || "dark:hover:text-emerald-400"}`;
      default:
        return "";
    }
  };

  // Generate variant classses base ont the extracted color pros
  const variantClasses = generateVariantClasses(variant, colors);

  // Merge the base classes with the variant classes and any additional classes
  const mergedClasses = twMerge([baseClasses, variantClasses]);

  return <button className={mergedClasses} {...props} />;
};
