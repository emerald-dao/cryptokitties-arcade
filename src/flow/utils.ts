import * as fcl from '@onflow/fcl';
import { network } from './config';

export const verifyAccountOwnership = async (userObject) => {
	if (!userObject.loggedIn) {
		return false;
	}
	const accountProofService = userObject.services.find(
		(services) => services.type === 'account-proof'
	);
	const fclCryptoContract = {
		emulator: '0xf8d6e0586b0a20c7',
		testnet: '0x5b250a8a85b44a67',
		mainnet: '0xdb6b70764af4ff68'
	}[network];
	return await fcl.AppUtils.verifyAccountProof('CryptoKitties: Arcade!', accountProofService.data, {
		fclCryptoContract
	});
};
