# Telegram Scheduled Message

- ### Allows you to post messages on telegram through a bot

- ### A bot with access to a chan is required

## Installation & configuration

- Copy & edit env variables

```
cp .env.sample .env
```

- Copy & edit html file

```
cp networks.sample files/networks.html
```

- Download dependencies & start server

```
yarn && yarn start
```

*Messages will be sent by default every sunday at 5 PM (GMT).*
