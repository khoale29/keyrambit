export default function DetailSection({ title, children }) {
  // sinh id dựa trên title, ví dụ "Thông số kỹ thuật" → "section-thong-so-ky-thuat"
  const sectionId =
    'section-' +
    title
      .trim()
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9\-]/g, '');

  return (
    <section
      id={sectionId}
      className="mb-6"
      role="region"
      aria-labelledby={sectionId}
      itemScope
      itemType="https://schema.org/WebPageElement"
    >
      <h2
        id={sectionId}
        itemProp="headline"
        className="font-bold uppercase text-sm md:text-base mb-2 text-gray-700"
      >
        {title}
      </h2>
      <div itemProp="text" className="text-sm md:text-base text-gray-900">
        {children}
      </div>
    </section>
  );
}