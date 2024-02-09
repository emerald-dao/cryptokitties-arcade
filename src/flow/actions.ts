import './config';
import * as fcl from '@onflow/fcl';
import { browser } from '$app/environment';
import { user } from '$lib/stores/flow/FlowStore';

if (browser) {
	fcl.currentUser.subscribe(user.set, []);
}

export const unauthenticate = () => fcl.unauthenticate();
export const logIn = async () => fcl.logIn();
