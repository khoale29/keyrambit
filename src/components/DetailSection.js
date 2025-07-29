// components/DetailSection.js
export default function DetailSection({ title, children }) {
  return (
    <div>
      <h3 className="font-bold uppercase text-xs mb-1 opacity-60">{title}</h3>
      <div className="text-sm md:text-base">{children}</div>
    </div>
  );
}