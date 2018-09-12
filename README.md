# nightharbor-bigquery-reporter

[![CircleCI](https://circleci.com/gh/YoshiyukiKato/nightharbor-bigquery-reporter.svg?style=shield)](https://circleci.com/gh/YoshiyukiKato/nightharbor-bigquery-reporter)
[![codecov](https://codecov.io/gh/YoshiyukiKato/nightharbor-bigquery-reporter/branch/master/graph/badge.svg)](https://codecov.io/gh/YoshiyukiKato/nightharbor-bigquery-reporter)

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
