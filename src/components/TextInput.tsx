type PropsType = {
  placeholder: string;
  type?: string;
  ref?: React.RefObject<HTMLInputElement | null>;
};

const TextInput = ({ placeholder, type = "text", ref }: PropsType) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      ref={ref}
      className="p-2 border border-gray-500 outline-gray-600 mb-4 text-gray-300 font-extralight rounded-sm"
    />
  );
};

export default TextInput;
