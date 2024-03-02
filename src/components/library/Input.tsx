import { twMerge } from "tailwind-merge";

// Define the type for the props thats the input component will accept
type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string; //Optional label prop
  description?: string; //Optional description prop
};

export const Input: React.FC<InputProps> = ({
  label,
  description,
  className,
  ...props
}) => {
  // Base Classes
  const baseClasses: string =
    "block w-full rounded-md border-gray-200 px-4 py-3 text-sm focus:border-emerald-500 focus:ring-emerald-500 disabled:pointer-events-none disabled:opacity-50";

  const mergedClasses: string = twMerge([baseClasses, className]);

  return (
    <div className="max-w-sm space-y-3">
      {label && (
        <label className="mb-2 block text-sm font-medium">{label}</label>
      )}
      <input {...props} className={mergedClasses} />
      {description && (
        <p className="mt-2 text-sm text-gray-500">{description}</p>
      )}
    </div>
  );
};
