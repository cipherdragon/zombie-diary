## Notice

This project is a fork of samuelmeuli's mini-diary project which is no longer maintained by 
its developers. I have no connection with the original developers. I'm just a fan of the mini-diary 
project who thought it would be nice if I could keep on maintaining the project.

[original project](https://github.com/samuelmeuli/mini-diary) \
[original website by samuelmeuli → minidiary.app](https://minidiary.app)

Original project is now dead but this project exist. What you call a dead man who exist in real 
world? Maybe, Zombie, hence the name zombie-diary.

### How am I planning maintain this?

There are some outdated dependencies this project relying on. Also, some parts of code related 
to cryptography are now depreciated. I'm planning to eliminate the outdated dependencies. I'll 
remove encryption from the app or make it non-default as I don't have enough experience to work 
with cryptography. It's better to completely remove encryption than putting users in risk by 
implementing encryption improperly. Then I'm planning to go through samuelmeuli's repo's issues 
and fix them.

---

<div align="center">
  <img src="website/img/app-icon.png" height="120">
  <h1>Zombie Diary</h1>
  <strong>Simple and secure journal app</strong>
  <img src="website/img/screenshot-1.png" width="100%" alt="Screenshot">
</div>

## Development

The application is built with Electron and React. To run or build the app yourself, you'll need to have Node.js and Yarn installed.

### Running the app

1. Clone this repository: `git clone REPO_URL`
2. Navigate into the project directory: `cd mini-diary`
3. Install the dependencies: `yarn`
4. Run the app: `yarn start`

### Building the app

After cloning the repo and installing the dependencies, run `yarn build`. The packaged app can be found in the `dist` folder.

## Contributing

This project is just forked from samuelmeuli's repository. I'm not yet ready to accept contributions. I mean, you can 
contribute but I cannot guarentee I'll accept it yet. Just give me some time to make the project go.

### Features and Bugs

> Suggestions and contributions are always welcome! Please first discuss changes via issue before submitting a pull request.

### Adding missing translations

> The list of all English strings can be found in [`en.ts`](./src/main/i18n/translations/en.ts). If there are translations 
> missing for your language and you'd like to help with the translation, you can add the translated strings to your 
> language's file in [`src/main/i18n/translations`](./src/main/i18n/translations) and submit a PR.

I just forked the project. I'm not yet ready to accept language translations. I'll unquote about text when project is ready.

### Adding a new language

If the app isn't translated into your language yet and you'd like to help out, you can easily add translations with the following steps:

1. The translation files can be found in [`src/main/i18n/translations`](./src/main/i18n/translations). Duplicate the [`en.ts`](./src/main/i18n/translations/en.ts) file as `[LANG].ts`, where `[LANG]` is the [shortcode of your language](https://electronjs.org/docs/api/locales).
2. In the file you just created, replace the English translations with your own.
3. Import your file in the `ALL_TRANSLATIONS` object in [`src/main/i18n/i18n.ts`](./src/main/i18n/i18n.ts).
4. Add your language shortcode to the `electronLanguages` array in [`package.json`](./package.json).
5. Run the app in your language (see the steps [above](#development)) and make sure that the translations fit into the app (e.g. that they aren't too long for input fields).
6. Submit a PR. Thanks for your help!
