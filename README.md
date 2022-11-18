## Data Center Portal System Deployment Manual
------


### Introduction
------

This document is a guide to the installation, configuration and operation of the BSN Spartan Network Data Center Portal System. This system connects to the Data Center Management System [v1.1.0](https://github.com/BSN-Spartan/Data-Center-System/releases/tag/v1.1.0) and later version.

### Hardware Requirements
------

Minimum Requirements:
- 1 CPU
- Memory: 2GB

Recommended Requirements:
- 2 CPU
- Memory: 4GB

### System Installation
------

#### 1. Prerequisites

##### 1.1 NodeJS

Node.js should be locally installed. [Download](https://nodejs.org/) from official website and install it.

##### 1.2 PM2 Management Tool1
After installing node.js, install pm2:

```
npm install pm2@latest -g
```
Check whether pm2 is successfully installed:

```
pm2 -v
```


#### 2. Download the Data Center Portal Deployment Package

Download the data center portal deployment package to a local directory:

```
git clone https://github.com/BSN-Spartan/Data-Center-Portal.git
```



#### 3. Configure the Data Center Portal and Management System

Go to the directory where the data center portal deployment package is located, open next.config.js file, and configure the port number of data center portal and the URL of management system, where the port number and the URL can be customized.

##### 3.1 Configure the Port Number of Data Center Portal

```
const PORT = [3000];
```

##### 3.2 Configure the URL of Data Center Management System

```
const baseURL = [date center url];
```

*Note: After changing the the port number of data center portal or the URL of data center management system, you must run the command below to rebuild the project.*

Rebuild the project:
```
npm run build
```

#### 4. Start the Data Center Portal System

Go to the directory where the deployment package is located

##### 4.1 Install Dependencies

```
npm install
```

##### 4.2 Start/Stop the Project

4.2.1 Start the Project

```
npm run build
npm run start
```

4.2.2 Stop the Project

```
 ctrl+C
```

##### 4.3 Permanent Start/Stop the Project

4.3.1 Permanent Start

```
npm run build
pm2 start server.js
```

4.3.2 Permanent Stop

```
pm2 stop server.js
```

#### 5. User Manual Deployment

After completing the deployment, the portal system uses the default user manual. You need to customize the user manual to meet the actual business requirements.

1. Edit the user manual. The path of the user manual is:

    <u>data-center-portal/public/static/User Manual.doc</u>

2. After edited, you can save it as a PDF file and replace the default user manual:

    <u>data-center-portal/public/static/User Manual.pdf</u>

3. If you would like to change the name of the user manual, customize it in the following path:

    <u>data-center-portal/components/CustomHeader/index.tsx</u>

```
export const UserManual = "/static/newName.pdf";
```

#### 6. Terms of Service Deployment

After completing the deployment, the portal system uses the default Terms of Service. You need to customize the Terms of Service to meet the actual business requirements.

1. Edit the Terms of Service. The path of the Terms of Service is:

<u>data-center-portal/public/static/Terms Of Service.doc</u>

2. After edited, you can save it as a PDF file and replace the default Terms of Service:

<u>data-center-portal/public/static/Terms Of Service.pdf</u

3. If you would like to change the name of Terms of Serivce, customize it in the following path:

<u>data-center-portal/components/CustomHeader/index.tsx</u

```
export const TermsOfService = "/static/newName.pdf";
```
