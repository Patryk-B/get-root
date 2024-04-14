/**
 * @license CC BY-NC-ND 4.0
 *
 * @copyright © 2024 Patryk B.
 * All rights reserved.
 */

import upath from "upath";

/**
 * @description
 * returns root directory of the project.
 * usually root directory, is defined as directory with project's `package.json` file.
 * location of the correct `package.json` file is taken from `process.env.npm_package_json`.
 *
 * WARNING:
 * this function constrains the entire project, it is being used in, to be started, builded, etc through `npm run <...>` scripts.
 * otherwise env var `process.env.npm_package_json` is not defined.
 *
 * @returns {string} unix-style path of root directory of the project.
 */
export const getRoot = (): string => {
    if (typeof process.env.npm_package_json === "undefined")
        throw new Error("`process.env.npm_package_json` is not defined. Start app via `npm run <script>`");

    return upath.dirname(process.env.npm_package_json);
};

export default getRoot;
