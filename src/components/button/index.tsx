import "./styles.css";

export default function Button({
  onClick,
  children,
}: {
  onClick?: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="button-container">
      <button className="button-style" onClick={onClick}>
        {children}
      </button>
    </div>
  );
}
