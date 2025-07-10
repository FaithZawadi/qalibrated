
function ServicesGrid() {
  const services = [
    { title: "Weighbridge Solutions", desc: "Static, Multi-deck, Axle & WIM systems for accurate truck weight management." },
    { title: "Industrial Automation", desc: "Conveyor belts, product line check weighers & AI-based process control." },
    { title: "ITS Solutions", desc: "Smart parking, traffic counting, transport safety and road efficiency systems." },
    { title: "Electrical & Networking", desc: "Wiring, CCTV, access control, fiber-optic networking & power distribution." },
    { title: "Software & ERP", desc: "Custom dashboards, monitoring tools, truck scale integrations & fleet systems." },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-12">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow text-center">
              <h3 className="text-xl font-bold text-amber-400 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesGrid;
