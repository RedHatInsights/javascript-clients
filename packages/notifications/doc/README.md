notifications-client / [Exports](modules.md)

# Javascript client for Notifications API
If you want to use [RedHatInsights/notifications-backend](https://github.com/RedHatInsights/notifications-backend) you shouldn't use get requests directly, but rather use this client to integrate with this service.

## Install
NPM
```bash
npm install --save @redhat-cloud-services/notifications-client
```

Or Yarn
```bash
yarn add @redhat-cloud-services/notifications-client
```

### Usage
This client is using typescript and axios. Types are distributed with this package, so no need to define or install them separately.

To correctly bootstrap this API you should use this config (no need to define it multiple times, just one config and reimport it anywhere you want to use it).
```JS
// api.js
import axios from 'axios';
import { NotificationsApi } from '@redhat-cloud-services/notifications-client';
const instance = axios.create();

// BASE_PATH should be set in your constants file
const notificationsApi = new NotificationsApi(undefined, BASE_PATH, instance);
export notificationsApi;
```

If you want to add some interceptors you can use axios build in interceptors
```JS
// api.js
import axios from 'axios';
import { NotificationsApi } from '@redhat-cloud-services/notifications-client';
const instance = axios.create();

// Request interceptor
instance.interceptors.request.use((request) => {
    // some logic to do with request
});

// Response interceptor
instance.interceptors.response.use((response) => {
    // some logic to do with request
});

// Error interceptor
instance.interceptors.response.use(null, (error) => {
    // some logic to do with error
});

// BASE_PATH should be set in your constants file
const notificationsApi = new NotificationsApi(undefined, BASE_PATH, instance);
export notificationsApi;
```

## API documentation

* [README](doc/README.md)
