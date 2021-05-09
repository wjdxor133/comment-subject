import faunadb from "faunadb";

const secretKey = "fnAEIvDagzACClbH_TegqUYvdObxW1N5vGW6xm8j";

const serverClient = new faunadb.Client({ secret: secretKey });

export default serverClient;
