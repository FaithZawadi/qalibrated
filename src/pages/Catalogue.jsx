
import Navbar from '../components/Navbar';

import Footer from '../components/Footer';
import heroImage from '../assets/darkbgcatalog.jpg';

function Catalogue() {
  const models = [
    { code: "WB-TX-S-3X8-60T.6L", dimension: "3x8", capacity: "60", division: "30" },
    { code: "WB-TX-S-3X10-60T.6L", dimension: "3x10", capacity: "60", division: "30" },
    { code: "WB-TX-S-3X12-60T.6L", dimension: "3x12", capacity: "60", division: "30" },
    { code: "WB-TX-M-3X14-80T.8L", dimension: "3x14", capacity: "80", division: "50" },
    { code: "WB-TX-L-3X24-100T.10L", dimension: "3x24", capacity: "100", division: "50" },
  ];

  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-b from-gray-400 via-gray-200 to-gray-500 pt-24 pb-20 px-6" style={{ backgroundImage: `url(${heroImage})` }}>
        <section className="text-center max-w-4xl mx-auto mb-12" >
          <h1 className="text-5xl font-bold text-amber-400 mb-4">Weighbridge Catalogue</h1>
          <p className="text-white text-2xl">
            Discover our robust and highly accurate TX-BRIDGE series — designed for seamless installation and years of uninterrupted operation.
          </p>
        </section>

        <section className="max-w-6xl mx-auto mb-12 bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Key Features</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Modular design for fast installation</li>
            <li>Produced with CNC-controlled automation</li>
            <li>Durable V-beam construction</li>
            <li>IP67–IP69K stainless steel load cells</li>
            <li>Self-centering Rocker Column design</li>
            <li>Supports automation, camera & RFID integrations</li>
            <li>WinSCALE truck scale management software</li>
          </ul>
        </section>

        <section className="max-w-6xl mx-auto mb-12 bg-white p-6 rounded-lg shadow overflow-x-auto">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Technical Specifications</h2>
          <table className="min-w-full border border-gray-300 text-sm text-center">
            <thead className="bg-amber-400 text-white">
              <tr>
                <th className="p-2 border">Model Code</th>
                <th className="p-2 border">Dimensions (m)</th>
                <th className="p-2 border">Capacity (ton)</th>
                <th className="p-2 border">Division (kg)</th>
              </tr>
            </thead>
            <tbody>
              {models.map((item, idx) => (
                <tr key={idx} className="odd:bg-gray-50">
                  <td className="p-2 border">{item.code}</td>
                  <td className="p-2 border">{item.dimension}</td>
                  <td className="p-2 border">{item.capacity}</td>
                  <td className="p-2 border">{item.division}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="max-w-6xl mx-auto mb-12 bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Optional Features</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Remote LED display & IP camera monitoring</li>
            <li>Steel side rails and cover plates</li>
            <li>Explosion-proof (EX-proof) options available</li>
            <li>RFID/Barcode identification with vehicle log tracking</li>
          </ul>
        </section>

        <section className="text-center">
          <a
            href="../assets/qsl-catalogue (1).pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-amber-400 text-white px-6 py-3 rounded hover:bg-blue-700 font-semibold"
          >
            Download Full Catalogue (PDF)
          </a>
          <p className="mt-2 text-sm text-black">
            Need custom sizing? <a href="/contact" className="text-amber-400 underline">Contact our team</a>.
          </p>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Catalogue;
