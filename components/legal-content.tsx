export function LegalContent({ sections }: { sections: { title: string; text: string }[] }) {
  return (
    <section className="py-20 md:py-28">
      <div className="page-shell max-w-3xl space-y-10">
        {sections.map((section) => (
          <article key={section.title}>
            <h2 className="text-2xl font-medium text-white">{section.title}</h2>
            <p className="mt-3 text-base leading-8 text-[#918d84]">{section.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
