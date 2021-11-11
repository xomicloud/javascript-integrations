# JavaScript Integrations

## Introduction

...

## Installation

You can clone the repository with [Git](https://git-scm.com/)...

    git clone https://github.com/xomicloud/javascript-integrations.git

...and then install the dependencies with [npm](https://www.npmjs.com/) from within the project's root directory:

    npm install

## Usage

Before running you will need to configure the application, which requires a corresponding Xomi client. In order to create one, if you have not done so already then create a Xomi [account](https://account.xomi.cloud/). Once you have an account, follow the wizard for creating a client and when prompted fill in the following values, assuming that you want to run the application locally to begin with:

* **Name** Anything you want. This is for internal display within Xomi only.

* **Display name**, **Host** and **Redirect URI** These can all be left blank.

Now create a file to hold the environment variables...

```
touch variables.env
```

...and copy the Xomi client's `CLIENT_ID` and `CLIENT_SECRET` environment variables into it. Your client can be found in the [clients](https://account.xomi.cloud/clients) section in your Xomi account. Click on the client name and they will appear in a table near the foot of page.

Now export the environment variables from a terminal...

```
source variables.env
```

...and run the `./googleDrive.js``file:

```
node ./googleDrive.js
```

If all has gone to plan then you should see the meta data for all your Google Drive files and folders echoed to the console.

## Related links

* [npm - Xomi](https://www.npmjs.com/package/@xomicloud/xomi)
* [Xomi Developers - Standalone Integrations Tutorial](https://developers.xomi.cloud/tutorial/standalone-integrations)
* [Xomi Developers - Google Drive Integration Tutorial](https://developers.xomi.cloud/tutorial/google-drive-integration)

## Contact

* contactus@xomi.cloud
* https://xomi.cloud
