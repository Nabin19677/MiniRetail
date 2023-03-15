const defaultConfig = {
  PORT: process.env.PORT || 9000,
};

const devConfig = {
  JWT_SECRET: "4lGG4tEtbDvRcoqHoFgNe4vX9ee5f9bz34T1ZDMMcl5nZ3F7NYpdx7WAlHZX",
  SALT_ROUND: 10,
};

const testConfig = {
  JWT_SECRET: "4lGG4tEtbDvRcoqHoFgNe4vX9ee5f9bz34T1ZDMMcl5nZ3F7NYpdx7WAlHZX",
  SALT_ROUND: 10,
};

const prodConfig = {
  JWT_SECRET: "4lGG4tEtbDvRcoqHoFgNe4vX9ee5f9bz34T1ZDMMcl5nZ3F7NYpdx7WAlHZX",
  SALT_ROUND: 10,
};

function envConfig(env) {
  switch (env) {
    case "development":
      return devConfig;
    case "test":
      return testConfig;
    case "production":
      return prodConfig;
  }
}

export default { ...defaultConfig, ...envConfig(process.env.NODE_ENV) };
