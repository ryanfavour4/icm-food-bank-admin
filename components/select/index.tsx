import useSelect, { ISelectProps } from "./useSelect";

export default function Select({
  name,
  options,
  required = false,
  state,
  placeholder = "Select an option",
  className,
  setState,
  ...rest
}: ISelectProps) {
  const { handleChange, validateOnBlur } = useSelect(state, required, setState);

  return (
    <div className="relative flex w-full flex-col gap-1">
      {/* //* SELECT */}
      <select
        name={name}
        id={name}
        className={`block w-full rounded-md border-2 bg-white px-3 py-2.5 text-base text-textcolor -outline-offset-1 outline-primary ring-primary/25 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:ring-2 sm:text-sm/6 md:text-sm ${
          state.error ? "border-red-600" : "border-dark/20"
        } ${className}`}
        value={state.value}
        onChange={handleChange}
        onBlur={(e) => validateOnBlur(e)}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
        onFocus={(_e) => setState((prev: any) => ({ ...prev, dirty: true }))}
        required={required}
        {...rest}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option, index) => (
          <option
            className="bg-secondary/20 font-semibold text-dark"
            key={index}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>
      {/* //* ERROR MESSAGE */}
      <p className="text-sm text-error">{state.message}</p>
    </div>
  );
}
