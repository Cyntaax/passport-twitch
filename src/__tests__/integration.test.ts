import { Scope as TwitchScopes, Strategy as TwitchStrategy } from "../index";
import passport from "passport";
const validOptions = {
	clientID: "fdsfadsffdfadsfdasfd",
	clientSecret: "fdsfdasfsaijfdsaiofjsdifo",
	callbackURL: "http://localhost:8453/auth/callback",
	scope: [TwitchScopes.BitsRead, TwitchScopes.UserReadEmail]
};

describe("integration#passport", () => {
	const strategy = new TwitchStrategy(validOptions, (access, refresh, done) => {});
	///@ts-ignore
	passport.authenticate = jest.fn((authType, something, cb) => (cb: any) => {
		console.log(cb, authType);
		cb();
	});
	passport.use(strategy);
	it("should do the thing", (done) => {
		passport.authenticate(strategy, () => {
			console.log(`DONE!`);
			done();
		});
	});
});
