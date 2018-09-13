# nightharbor-bigquery-reporter

[![CircleCI](https://circleci.com/gh/YoshiyukiKato/nightharbor-bigquery-reporter.svg?style=svg)](https://circleci.com/gh/YoshiyukiKato/nightharbor-bigquery-reporter) 
[![sonarcloud badge](https://sonarcloud.io/api/project_badges/measure?project=YoshiyukiKato_nightharbor-bigquery-reporter&metric=alert_status)](https://sonarcloud.io/api/project_badges/measure?project=YoshiyukiKato_nightharbor-bigquery-reporter&metric=alert_status)
[![Greenkeeper badge](https://badges.greenkeeper.io/YoshiyukiKato/nightharbor-bigquery-reporter.svg)](https://greenkeeper.io/)


A [nightharbor](https://github.com/YoshiyukiKato/nightharbor) reporter for GCP BigQuery.

```sh
$ npm install --save nightharbor nightharbor-bigquery-reporter
```

```js
import {BigQueryReporter} from "nightharbor/reporter/gcp";

export default {
  ...,
  reporters: [
    new BigQueryReporter("gcp project id", "dataset name", "table name")
  ]
  ...
}
```
