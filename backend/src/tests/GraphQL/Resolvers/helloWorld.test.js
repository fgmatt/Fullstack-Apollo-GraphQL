import * as Resolvers from ".../resolvers/helloWorldResolver";

export const helloWorldTest = () => {
    const obj = {
        hello: "Hello World!",
    };

    const args = {};
    const ctx = {};

    const output = Resolvers.name(obj, args, ctx);

    expect(output).toEqual("Hello World!");
};
