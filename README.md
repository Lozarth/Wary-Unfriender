# Wary-Unfriender
A Discord selfbot CLI tool for carefully unfriending users on your friends list

![Preview](https://i.imgur.com/F6Tk9u4.png)

## Warning
Although it is unlikely, this tool could potentially have your account moderated by Discord in some form as selfbotting against their [Terms of Service](https://discord.com/terms). I am not liable if this happens to you. Please use this tool at your own risk.

## Installation
1. Install [Node.js](https://nodejs.org/en/download/)
2. Git clone this repository or extract the zip file
3. Open a terminal in the directory and run `npm install`
4. Run `node index.js` to start the program
5. Enter your user token when prompted

Tip: Use **CTRL+SHIFT+I** and paste the code below into the Console to copy your token:
```js
window.webpackChunkdiscord_app.push([
  [Math.random()],
  {},
  req => {
    for (const m of Object.keys(req.c)
      .map(x => req.c[x].exports)
      .filter(x => x)) {
      if (m.default && m.default.getToken !== undefined) {
        return copy(m.default.getToken());
      }
      if (m.getToken !== undefined) {
        return copy(m.getToken());
      }
    }
  },
]);
console.log('%cWorked!', 'font-size: 50px');
console.log(`%cYou now have your token in the clipboard!`, 'font-size: 16px');
```
6. You can now begin choosing users to unfriend
