import Enquirer from 'enquirer';
import QrCode from 'qrcode';
import * as path from 'path';
import * as fs from 'fs';

export type TPrompt = {
	url: string;
};

const enquirer = new Enquirer();

const DIR_PATH = path.join(process.cwd(), 'qrcodes');

if (!fs.existsSync('qrcodes')) {
	fs.mkdirSync('qrcodes');
}
const FILE_PATH = path.join(DIR_PATH, `${Date.now()}.png`);

export async function QrCodeGenerator(url: string): Promise<void> {
	return await QrCode.toFile(FILE_PATH, url, {
		errorCorrectionLevel: 'H',
		type: 'png',
	});
}

enquirer
	.prompt([
		{
			type: 'input',
			name: 'url',
			message: 'Paste the source url for the qrcode: ',
		},
	])
	.then(async (values: unknown) => {
		const promptValuesObject = values as TPrompt;
		await QrCodeGenerator(promptValuesObject.url);
	});
