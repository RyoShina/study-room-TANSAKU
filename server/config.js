const env = process.env.NODE_ENV || "development";

const development = {
  ENV: env,
  MONGODB_CONN: "",
};

const production = {
  ENV: env,
  MONGODB_CONN: "",
};

const config = {
  development,
  production
};

exports.default = config[env];
