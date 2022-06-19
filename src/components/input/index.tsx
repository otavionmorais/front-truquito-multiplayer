import "./styles.css";

export default function Input({
  value,
  setValue,
  label,
  autoFocus = false,
}: {
  value: string;
  setValue: (value: string) => void;
  label: string;
  autoFocus?: boolean;
}) {
  return (
    <div className="input-container">
      <h2 className="input-label">{label}</h2>
      <input
        autoFocus={autoFocus}
        className="input-style"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}
