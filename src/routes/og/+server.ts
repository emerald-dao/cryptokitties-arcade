import satori from 'satori';
import { getIconCode, loadEmoji } from './utils';
import type { RequestHandler } from './$types';
import { getRandomLogo } from '$lib/config/logos';
import colors from 'tailwindcss/colors';

const brandHue = '142deg';

const surfaceColor = `hsl(${brandHue} 10% 10%)`;
const copyColor = `hsl(${brandHue} 10% 10%)`;

const getRandomColor = () => {
	const clrs = [
		colors.purple[500],
		colors.blue[500],
		colors.green[500],
		colors.red[500],
		colors.pink[500]
	];
	return clrs[Math.floor(Math.random() * clrs.length)];
};

export const GET = (async ({ fetch, url }) => {
	const courseName = url.searchParams.get('course') ?? '';

	const vt323Data = await fetch('/fonts/VT323-Regular.ttf').then((res) => res.arrayBuffer());

	const svg = await satori(
		{
			type: 'div',
			props: {
				style: {
					display: 'flex',
					height: '100%',
					width: '100%',
					'background-color': surfaceColor
				},
				children: {
					type: 'div',
					props: {
						style: {
							display: 'flex',
							padding: '20px',
							width: '100%',
							height: '100%'
						},
						children: {
							type: 'div',
							props: {
								children: [
									{
										type: 'div',
										props: {
											children: [
												{
													type: 'span',
													props: {
														children: `${getRandomLogo()} CryptoKitties: `
													}
												},
												{
													type: 'span',
													props: {
														children: {
															type: 'span',
															props: {
																children: 'ARCADE!'
															}
														},
														style: {
															color: `${getRandomColor()}`
														}
													}
												}
											],
											style: {
												display: 'flex',
												gap: '16px',
												'flex-shrink': 0,
												'font-size': courseName ? '78px' : '90px'
											}
										}
									},
									{
										type: 'div',
										props: {
											children: courseName,
											style: { 'flex-shrink': 0, fontSize: '90px', 'text-transform': 'uppercase' }
										}
									}
								],
								style: {
									display: 'flex',
									backgroundColor: 'white',
									color: copyColor,
									width: '100%',
									height: '100%',
									fontSize: '64px',
									gap: '62px',
									padding: '40px',
									'border-radius': '20px',
									'flex-direction': 'column',
									'align-items': 'center',
									'justify-content': 'center',
									fontFamily: 'VT323'
								}
							}
						}
					}
				}
			}
		},
		{
			width: 1200,
			height: 630,
			fonts: [{ name: 'VT323', data: vt323Data, weight: 400, style: 'normal' }],

			loadAdditionalAsset: async (code: string, segment: string) => {
				if (code === 'emoji') {
					// if segment is an emoji
					// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
					return `data:image/svg+xml;base64,${btoa(await loadEmoji('twemoji', getIconCode(segment)))}`;
				}

				// if segment is normal text
				return code;
			}
		}
	);
	return new Response(svg, {
		headers: {
			'Content-Type': 'image/svg+xml'
		}
	});
}) satisfies RequestHandler;
