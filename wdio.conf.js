// exports.config = {
//     // hostname: '127.0.0.1',
//     hostname: 'cbd1-2401-4900-3a01-b7f9-3032-65bd-7384-2da0.ngrok-free.app',
//     // port: 4723,
//     port: 443,

//     path: '/',  // Appium v2 uses '/' instead of '/wd/hub'

//     // protocol: 'http',
//     protocol: 'https',
    
//     specs: ['./test/specs/App.test.js'],

//     capabilities: [
//         {
//             'appium:platformName': 'Android',
//             'appium:deviceName': 'emulator-5554',
//             'appium:platformVersion': '11.0',
//             'appium:automationName': 'UiAutomator2',
//             'appium:app': 'C:/AwesomeProject/android/app/build/outputs/apk/release/app-release.apk',
//             'appium:noReset': true,
//             'appium:ignoreHiddenApiPolicyError': true,
//             'appium:newCommandTimeout': 300,
//         },
//     ],

//     logLevel: 'debug',
//     bail: 0,
//     waitforTimeout: 10000,
//     connectionRetryTimeout: 90000,
//     connectionRetryCount: 3,

//     framework: 'mocha',
//     reporters: ['spec'],
//     mochaOpts: {
//         ui: 'bdd',
//         timeout: 60000,
//     },
// };


















console.log('APK Pathhhhhhhhhhhhhhhh:', process.env.APK_PATH);

exports.config = {
    // hostname: '127.0.0.1',
    hostname: 'a67a-2405-201-8010-c0fa-b477-f4eb-613f-528c.ngrok-free.app',
    // port: 4723,
    port: 443,

    path: '/',  // Appium v2 uses '/' instead of '/wd/hub'

    // protocol: 'http',
    protocol: 'https',

    specs: ['./test/specs/App.test.js'],

    capabilities: [
        {
            'appium:platformName': 'Android',
            'appium:deviceName': 'emulator-5554',
            'appium:platformVersion': '11.0',
            'appium:automationName': 'UiAutomator2',
            'appium:app': process.env.APK_PATH, // Use environment variable
            'appium:noReset': true,
            'appium:ignoreHiddenApiPolicyError': true,
            'appium:newCommandTimeout': 300,
        },
    ],

    logLevel: 'debug',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,

    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000,
    },
};
