import dtv from "dotenv";
dtv.config();

export const env = {
  server: {
    port: process.env.PORT,
    db: process.env.PERS,
  },
};
