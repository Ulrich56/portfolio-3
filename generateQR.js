const QRCode = require('qrcode');

const url = "https://portfolio-ulrich-pineiro.vercel.app";
QRCode.toFile("portfolio-qr.png", url, {
  color: {
    dark: "#000000",
    light: "#ffffff"
  }
}, function (err) {
  if (err) throw err;
  console.log("QR code généré : portfolio-qr.png");
});
