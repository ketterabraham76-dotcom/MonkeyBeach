const WHATSAPP_NUMBER = "+918007691078"; // CHANGE THIS (country code + number)

export function sendWhatsAppMessage(message) {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}
