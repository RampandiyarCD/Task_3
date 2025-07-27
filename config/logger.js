import winston from "winston";


export const infoFilter = winston.format((info, opts) => {
  return info.level === "info" ? info : false;
});

export const logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json(),
    winston.format.prettyPrint()
  ),

  defaultMeta: { service: "user-service" },
  transports: [
    new winston.transports.File({
      filename: "err.log",
      level: "error",
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json(),
        winston.format.prettyPrint()
      ),
    }),
    new winston.transports.File({
      filename: "info.log",
      level: "info",
      format: winston.format.combine(
        infoFilter(),
        winston.format.timestamp(),
        winston.format.json(),
        winston.format.prettyPrint()
      ),
    }),
    new winston.transports.File({ filename: "combined.log" }),
  ],
});
