/**
 * @license CC BY-NC-ND 4.0
 *
 * @copyright © 2024 Patryk B.
 * All rights reserved.
 */

import crypto from "crypto";

import getRoot from "#src/get-root";

// ---- . ---- ---- ---- ---- . ----
// describe:
// ---- . ---- ---- ---- ---- . ----

describe("file: /src/get-root.ts", (): void => {
    const originalPackageJSONPath = process.env.npm_package_json!;

    const setupPackageJSONPath = (packageJSON: string): void => {
        process.env.npm_package_json = packageJSON;
    };

    const makePackageJSONPathUndefined = (): void => {
        delete process.env.npm_package_json;
    };

    const genFakePackageJSON = (): {
        readonly dirname: string;
        readonly filename: string;
        readonly data: string;
    } => {
        const fakeDirname = "./" + crypto.randomUUID(); // crypto.randomBytes(16).toString('hex'); // random string.
        const fakeFilename = fakeDirname + "/package.json";
        const fakeData = JSON.stringify({
            "fake-data": crypto.randomUUID()
        });

        return {
            "dirname": fakeDirname,
            "filename": fakeFilename,
            "data": fakeData
        };
    };

    afterAll((): void => {
        setupPackageJSONPath(originalPackageJSONPath);
    });

    // ---- . ---- ---- ---- ---- . ----
    // describe: getRoot():
    // ---- . ---- ---- ---- ---- . ----

    describe("function: getRoot()", (): void => {
        test("check if output is correct", (): void => {
            const fake = genFakePackageJSON();

            // swap path to `package.json` file:
            setupPackageJSONPath(fake.filename);

            // expect `getPackage()` to return `fakeData`.
            expect(getRoot()).toStrictEqual(fake.dirname);
        });

        test("check if throws", (): void => {
            // make `process.env.npm_package_json` undefined to trigger condition to throw an error:
            makePackageJSONPathUndefined();

            // expect an error to be thrown.
            expect(getRoot).toThrow(Error);
        });
    });
});
