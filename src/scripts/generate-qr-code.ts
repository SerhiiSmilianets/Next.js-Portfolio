import 'dotenv/config';
import QRCode from 'qrcode';

const urls = {
  site: process.env.BASE_URL
};

(async () => {
    for (const [name, url] of Object.entries(urls)) {
        if (typeof url === 'string' && url) {
            await QRCode.toFile(`./public/qr-${name}.png`, url, {
                width: 800,
                margin: 10,
                color: {
                    dark: '#0057B7',
                    light: '#FFDD00'
                },
                type: 'png'
            });
            console.log(`QR for ${name} saved`);
        } else {
            console.warn(`URL for ${name} is not defined. Skipping QR code generation.`);
        }
    }
})();
