# Data Center Portal System Deployment Manual

------

## Introduction

------

This document is a guide to the installation, configuration and operation of the BSN Spartan Network Data Center Portal System. This system connects to the Data Center Management System v1.2.0 and later version.

## Hardware Requirements

------

Minimum Requirements:

- 1 CPU
- Memory: 2GB

Recommended Requirements:

- 2 CPU
- Memory: 4GB

## System Installation

------

### 1. Prerequisites

| Software                                                     | Version |
| ------------------------------------------------------------ | ------- |
| Node.js                                                      | 14+     |
| git                                                          | 2.39.0+ |
| [Spartan-I Chain Default Node](https://github.com/BSN-Spartan/NC-Ethereum) | -       |
| [Data Center Management System](https://github.com/BSN-Spartan/Data-Center-System) | 1.1.0+  |
| [Data Center Gateway](https://github.com/BSN-Spartan/Data-Center-Gateway) (recommended) | -       |
| PM2 (optional)                                               | latest  |

Note: Data Center Gateway is provided by the Data Center Operator to its end-users for accessing the Spartan Network. It can protect the node access, and regulates the transaction amount of end-users. We strongly recommend that the Data Center Operator should set up the Data Center Gateway before installing the portal system.

### 2. Download the Data Center Portal Deployment Package

Download the data center portal deployment package to a local directory:

```
git clone https://github.com/BSN-Spartan/Data-Center-Portal.git
```

### 3. Configure the Data Center Portal and Management System

#### 3.1 Configure the Data Center Portal and Management System

Configure the port number and IP address in `Data-Center-Portal/config.js` file:

```
module.exports = {
  baseURL: "data_center_url",  
  PORT: "data center portal port",
};
```

Example:  baseURL:  "http://xx.xx.xx.xx:xxxx"
                   PORT:  "3000"

*Note: After changing the port number of Data Center Portal or the URL of Data Center Management System, you must run the command below to rebuild the project.*

Rebuild the project:

```
npm run build
```

#### 3.2 Portal Management

The logo and other information of the portal can be set in the Data Center Management System.

Please refer to [Portal Management](https://spartan.bsn.foundation/static/quick-start/2gettingStarted/2-1-2.html) section to configure the information of the portal.

### 4. Start the Data Center Portal System

Go to the directory where the deployment package is located

#### 4.1 Install Dependencies

```
npm install
```

#### 4.2 Start/Stop the Project

##### 4.2.1 Start the Project

```
npm run build
npm run start
```

##### 4.2.2 Stop the Project

```
 ctrl+C
```

#### 4.3 Permanent Start/Stop the Project

##### 4.3.1 PM2 Management Tool

Install PM2:

```
npm install pm2@latest -g
```

Check whether PM2 is successfully installed:

```
pm2 -v
```

Please be noted that PM2 is not a must, it's a node application management tool that we recommended, you can use whatever you like.

##### 4.3.2 Permanent Start

```
npm run build
pm2 start server.js
```

##### 4.3.3 Permanent Stop

```
pm2 stop server.js
```

### 5. Start the Service by docker-compose.yaml

Download the application package of the Data Center Portal from [here](https://raw.githubusercontent.com/BSN-Spartan/Data-Center-Portal/main/Deployment-package.zip).

#### 5.1 Configure Application Package

In Data-Center-Portal/standalone/config.js, change the baseURL to the link of Data Center Management System:

```
module.exports = {
  baseURL: "data center url",
};
```

Example: baseURL: "http://xx.xx.xx.xx:xxxx"

#### 5.2 Configure docker-compose.yaml

For the port configuration in the file, you only need to modify the local port of the server. The corresponding service port in the container does not need to be modified. For example, only xxxx needs to be modified in `- "xxxx:3000"`.

```
'docker-compose.yaml'
version: '3.1'
services:
  nodejs:
    image: gengxiaofang/nodejs17.3_pm2-5.2.2:v1
    ports:
      - "xxxx:3000"
    privileged: true
    restart: always
    volumes:
      - ./standalone:/data
    command: [ "/bin/sh", "-c", "pm2 start /data/server.js --no-daemon" ]

```

#### 5.3 Start the Service

1. If you start the service in the directory where the docker-compose.yaml file is located, and it is the only yaml file in the directory, you can start the service directly using the following command:

```
docker-compose up -d
```

2. If there are more than one yaml files in the directory, you can start the service by the following command:

```
docker-compose -f xxxx.yaml up -d
```

#### 5.4 Stop the Service

You can run below command to stop all docker-compose services:

```
 docker-compose down
```

Or you can stop a specific service by:

```
docker-compose -f xxxx.yaml down
```


### 6. User Manual Deployment

After deployed the portal, you need to customize the default user manual to meet the actual business requirements.

We have provided the user manual in both word and markdown formats, which can be obtained through `Data-Center-Portal/public/static/` directory.

When using the user manual in markdown format, please ensure that you have installed gitbook locally. Here we take Windows system as an example to introduce how to install and use it:

1. Download and install Node.js from [Official Website](https://nodejs.org/download/release/v10.12.0/), you need to use a lower version of Node.js (for example v12.12.0) to install gitbook.

2. Open command prompt and check the version:  `node -v` v12.12.0 `npm -v` 6.11.3

3. Install gitbook by command prompt:  `npm install gitbook-cli -g` Run command below to check the version:  `gitbook --version` CLI version: 2.3.2 GitBook version: 3.2.3

4. Create a folder and run command below to check whether gitbook has been successfully installed: `gitbook init`

   If installed, the following message will be returned:

   ```
   warn: no summary file in this book
   info: create README.md
   info: create SUMMARY.md
   info: initialization is finished
   ```

5. Copy the user manual in word format and `user-manual` folder to this folder. The user manual in markdown format is saved in in `user-manual` folder.

   ![getChainAccessInformation](https://github.com/BSN-Spartan/Data-Center-Portal/raw/main/image/usermanual.png)

   You can edit the word document and then export it to the pdf version and store that file in the same path.

   Please keep the name consistent among different user manual formats.

6. Edit markdown documents. You can open `user-manual` folder through Visual Studio Code to edit the markdown document.

- Click SUMMARY.md to change the directory. Please note that the directory structure is consistent with the word document.

  ![summary](https://github.com/BSN-Spartan/Data-Center-Portal/raw/main/image/summary.png)

- Click README.md, edit the name, version and revision date of the user manual. If you do not need to provide the pdf version, you can delete the last row of data.

  ![readme](https://github.com/BSN-Spartan/Data-Center-Portal/raw/main/image/readme.png)

- Configure the logo and copyright information of your online user manual in book.json.

  ![bookjson](https://github.com/BSN-Spartan/Data-Center-Portal/raw/main/image/bookjson.png)

- The default user manual creates folders according to chapters. The contents of each chapter are stored in the corresponding folder as markdown documents. You can edit them directly.

  ![edit](https://github.com/BSN-Spartan/Data-Center-Portal/raw/main/image/edit.png)

- After editing the markdown documents, you can check the user manual by typing `gitbook serve` command to generate html file. You can also directly type `gitbook build` command to generate the user manual in the terminal, and the generated manual will be stored in `_ Book` folder. After saving the file, press `Ctrl+C` to terminate the command.

  ![build](https://github.com/BSN-Spartan/Data-Center-Portal/raw/main/image/build.png)

- Enable global search, replace `<a href="./">` with `<a href="./index. html">`, replace`< A href="../">` with `<a href="../index. html">`. Then, find `index.html file` in `_book` folder and replace `../` with `./`.

  ![search](https://github.com/BSN-Spartan/Data-Center-Portal/raw/main/image/search.png)

- After the above operations are completed, replace the files in the `Data-Center-Portal/public/static/user-manual` folder in the server with the files in `_book` folder.
