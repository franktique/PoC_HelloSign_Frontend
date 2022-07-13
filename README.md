# Hellosign frontend PoC

Shows the use of 'hellosign-embedded', using the backend that you can find in the 'PoC_HelloSign_Backend' repo.

## Table of contents
* [Description](#description)
* [Installation / setup](#installation)
  * [Environment variables](#environment-variables)

## Description

Shows a very simple flow of hellosign from creating a signing request (by typing a template id) to the document download after sign it.


## Installation

```cli
yarn install
```

## Environment variables

### `REACT_APP_HELLOSIGN_CLIENT_ID`
The [client_id](https://faq.hellosign.com/hc/en-us/articles/360035403131) signifies a specific API app within HelloSign.


### `REACT_APP_API_BASE_URL`
The url of the backend service ('PoC_HelloSign_Backend'). The default value is 'http://localhost:3001/'