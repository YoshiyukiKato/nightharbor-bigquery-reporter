### nightharbor-bigquery-reporter

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
