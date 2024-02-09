declare module '@onflow/fcl' {
	type ConfigInstance = {
		put: (key: string, value: any) => ConfigInstance;
		get: (key: string, fallback: string) => any;
	};

	/** https://docs.onflow.org/fcl/reference/api/#Address */
	type Address = string;

	/** https://docs.onflow.org/fcl/reference/api/#authorizationobject */
	type AuthorizationObject = {
		addr: Address;
		signingFunction: unknown;
		keyId: number;
		sequenceNum: number;
	};

	/** https://docs.onflow.org/fcl/reference/api/#authorization-function */
	type AuthorizationFunction = (account: AccountObject) => Promise<AuthorizationObject>;

	type ServiceObject = unknown;

	/** https://docs.onflow.org/fcl/reference/api/#currentuserobject */
	type CurrentUserObject = {
		addr?: Address;
		cid?: string;
		expiresAt?: number;
		f_type: string;
		f_vsn: string;
		loggedIn?: boolean;
		services: [ServiceObject];
		subscribe: (callback: (obj: CurrentUserObject, ...args: unknown[]) => void) => void;
		authorization: AuthorizationFunction;
		signUserMessage: (message: string) => Promise<CompositeSignature[]>;
	};

	/** https://github.com/onflow/fcl-js/blob/master/packages/fcl/src/wallet-provider-spec/draft-v2.md#compositesignature */
	type CompositeSignature = {
		addr: string;
		keyId: number;
		signature: string;
	};

	/** https://docs.onflow.org/fcl/reference/api/#currentusersubscribe */
	export const currentUser: CurrentUserObject;

	/** https://docs.onflow.org/fcl/reference/api/#login */
	export function logIn(): void;

	/** https://docs.onflow.org/fcl/reference/api/#unauthenticate */
	export function unauthenticate(): void;

	export function config(): ConfigInstance;
}
