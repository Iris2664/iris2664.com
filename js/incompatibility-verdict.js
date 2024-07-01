'use strict';

const browser = platform.name;
const version = platform.version;
const os = platform.os;

if (browser == "Firefox" && version < "117") {
    alert("最新版のFirefoxでないと閲覧できません.");
}

if (browser == "Chrome" && version < "112") {
    alert("最新版のChromeでないと閲覧できません.");
}

if (browser == "Microsoft Edge" && version < "112") {
    alert("最新版のMicrosoft Edgeでないと閲覧できません.");
}

if (browser == "IE") {
    alert("Internet Explorerはサポートが終了しています. 他のブラウザから閲覧してください.");
}

if (browser == "Safari" && version < "16.5") {
    alert("最新版のSafariでないと閲覧できません.");
}

if (browser == "Opera" && version < "98") {
    alert("最新版のOperaでないと閲覧できません.");
}

console.log(browser);
console.log(version);