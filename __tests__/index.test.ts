import { QrCodeGenerator } from '../src/index';

describe('testing qrcode generator', () => {
	test('generates qr-code file', async () => {
		expect(QrCodeGenerator('www.youtube.com')).toBeDefined();
	});
});
