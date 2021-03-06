import BQ from "@google-cloud/bigquery";
import assert from "power-assert";
import {BigQueryReporter} from "../src";

describe("GCP BQ reporters", () => {
  const bq = new BQ({
    projectId: process.env.GCP_PROJECT_ID || "",
  });
  const dataset: string = process.env.GCP_BQ_DATASET || "";
  const table: string = process.env.GCP_BQ_TABLE || "";

  before(() => {
    return bq.dataset(dataset).createTable(table, { schema: "message:string" });
  });

  after(() => {
    return bq.dataset(dataset).table(table).delete();
  });

  it("sends report data to BQ with no error", () => {
    const data = { message: "test" };
    const reporter = new BigQueryReporter(bq, dataset, table);
    reporter.write(data);
    return reporter.close()
      .then(() => {
        assert(true);
      });
  });
});
