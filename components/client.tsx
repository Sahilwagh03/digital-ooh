const clients = [
  "Devangi Outdoor",
  "Palkan Advertising",
  "Quro Media",
  "Apex Ventures",
  "Metro Display",
  "Urban Vision",
];

const Clients = () => {
  return (
    <section className="w-full py-12">
      <div className="max-w-340 mx-auto px-4">
        <div className="text-center mb-5">
          <p className="text-[1rem] text-accent-foreground font-semibold">
            Trusted by Growing Media Brands
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 items-center max-w-5xl mx-auto">
          {clients.map((client, index) => (
            <button
              key={index}
              className="flex items-center justify-center px-3 py-3 rounded-xl border font-medium text-[0.875rem] backdrop-blur-sm"
            >
              {client}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
