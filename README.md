# Soardinator 3000 Amplify implementation

The purpose of this repository is to simplify the development and deployment processes of Soardinator 300 by using aws amplify.

To deploy Soardinator 3000 with aws amplify, you require the aws amplify CLI:
```
npm install -g @aws-amplify/cli
```

Clone this repository
```
git clone git@github.com:COMP9447-Team1/amplify.git
```

Initialise amplify - this will require signing into your aws environment
```
amplify init
```

Launch the product!
```
amplify publish
```

You may need to then pull the changes and republish as there seems to be a [bug in Amplify](https://github.com/aws-amplify/amplify-cli/issues/3033) where push/publish is not updating the API Urls in aws-exports.js
```
amplify pull
amplify publish
```
This will give you a url where the frontend is hosted. You will need to register a user on the application.


# To launch in another environment

Simply add an amplify environemnt
```
amplify env add
```

Then publish to the new environment
```
amplify publish
```

As above, pull and publish again
```
amplify pull
amplify publish
```
