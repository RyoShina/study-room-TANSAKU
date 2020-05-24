const env = process.env.NODE_ENV || "development";

// 開発用　config
const development = {
  ENV: env,
  MONGODB_CONN: "mongodb://localhost:27018/study-room",
};

// 本番用　config
const production = {
  ENV: env,
  MONGODB_CONN: "mongodb://localhost:27017/study-room",
};

const config = {
  development,
  production
};

exports.default = config[env];
