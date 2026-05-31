import { QRCodeCanvas } from "qrcode.react";

export default function QRCodes() {
  const siteUrl = "https://monkey-beach.vercel.app";

  const qrCodes = [
    {
      title: "Quick Access",
      url: `${siteUrl}/quick`,
      description: "Rooms, Drinks & Contact",
    },
    {
      title: "Drinks Menu",
      url: `${siteUrl}/drinks`,
      description: "Browse and order drinks",
    },
    {
      title: "Rooms",
      url: `${siteUrl}/rooms`,
      description: "View rooms and book",
    },
  ];

  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold text-center mb-10">
        Monkey Beach QR Codes
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {qrCodes.map((item) => (
          <div
            key={item.title}
            className="bg-white rounded-2xl shadow-lg p-6 text-center"
          >
            <h2 className="text-xl font-semibold mb-4">
              {item.title}
            </h2>

            <div className="flex justify-center">
              <QRCodeCanvas
                value={item.url}
                size={220}
              />
            </div>

            <p className="mt-4 text-gray-500">
              {item.description}
            </p>

            <p className="mt-2 text-xs break-all text-gray-400">
              {item.url}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
