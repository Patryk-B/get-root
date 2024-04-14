const upath = require("upath");

const root = upath.normalize(__dirname)

/** @type { import("jest").Config } */
const config = {

    // ---- . ---- ---- ---- ---- . ----
    // root:
    // ---- . ---- ---- ---- ---- . ----
    "rootDir": root,
    "roots": [ "<rootDir>" ],

    // ---- . ---- ---- ---- ---- . ----
    // test:
    // ---- . ---- ---- ---- ---- . ----
    "testMatch": [ `${root}/dist/test?(s)/**/*.jest.?(c|m)(j|t)s?(x)` ],
    "testPathIgnorePatterns": [
        "/node_modules",
    ],
    "testEnvironment": "node",
    "testTimeout": 10000,

    // ---- . ---- ---- ---- ---- . ----
    // options:
    // ---- . ---- ---- ---- ---- . ----
    "cache": false,

    // ---- . ---- ---- ---- ---- . ----
    // extensions:
    // ---- . ---- ---- ---- ---- . ----
    "moduleFileExtensions": [
        "js",
        "cjs",
        "mjs",
        "jsx",
        "cjsx",
        "mjsx",
        "ts",
        "cts",
        "mts",
        "tsx",
        "ctsx",
        "mtsx",
        "json",
        "node"
    ],
    "extensionsToTreatAsEsm": [
        ".jsx",
        ".mjsx",
        ".ts",
        ".mts",
        ".tsx",
        ".mtsx"
    ],
};

// ---- . ---- ---- ---- ---- . ----
// export default:
// ---- . ---- ---- ---- ---- . ----

module.exports = exports = config;
