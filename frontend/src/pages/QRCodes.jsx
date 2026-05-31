import { QRCodeCanvas } from "qrcode.react";

export default function QRCodes() {
  const baseUrl = window.location.origin;

  const quickUrl = `${baseUrl}/quick`;
  const drinksUrl = `${baseUrl}/drinks`;
  const roomsUrl = `${baseUrl}/rooms`;

  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold text-center mb-10">
        Monkey Beach QR Codes
      </h1>

      <div className="grid grid-3">

        <div className="card text-center p-6">
          <h2 className="font-bold mb-4">Quick Access</h2>

          <QRCodeCanvas
            value={quickUrl}
            size={220}
          />

          <p className="mt-4 text-sm text-gray-500">
            Scan for Rooms, Drinks & Contact
          </p>
        </div>

        <div className="card text-center p-6">
          <h2 className="font-bold mb-4">Drinks Menu</h2>

          <QRCodeCanvas
            value={drinksUrl}
            size={220}
          />

          <p className="mt-4 text-sm text-gray-500">
            Direct access to drinks menu
          </p>
        </div>

        <div className="card text-center p-6">
          <h2 className="font-bold mb-4">Rooms</h2>

          <QRCodeCanvas
            value={roomsUrl}
            size={220}
          />

          <p className="mt-4 text-sm text-gray-500">
            Direct room booking page
          </p>
        </div>

      </div>
    </div>
  );
}
