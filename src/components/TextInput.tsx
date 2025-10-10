type PropsType = {
  placeholder: string;
  type?: string;
};

const TextInput = ({ placeholder, type = "text" }: PropsType) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="p-2 border border-gray-500 outline-gray-600 mb-4 text-gray-300 font-extralight rounded-sm"
    />
  );
};

export default TextInput;
