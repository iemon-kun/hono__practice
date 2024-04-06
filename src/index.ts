import { Hono } from "hono";
import { prettyJSON } from "hono/pretty-json";
import posts from "./blogs/blogs";
import auth from "./auth/auth";
import { basicAuth } from "hono/basic-auth";

const app = new Hono();

app.use("*", prettyJSON()); // ミドルウェアを使う
app.use(
  "/auth/*",
  basicAuth({
    username: "hono",
    password: "test",
  })
);

// ルーティング
app.route("/posts", posts);
app.route("/auth", auth);

// GETメソッド
app.get("/", (c) => {
  return c.text("Hello Hono!");
});

export default app;
