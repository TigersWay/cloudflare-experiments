import { AutoRouter } from "itty-router";

const router = AutoRouter();

const withMeta = (request) => {
  request.meta = {
    country: request.cf?.country,
    region: request.cf?.region,
    colo: request.cf?.colo,
    ip: request.headers.get("cf-connecting-ip"),
  };
};

router.get("/healthCheck", withMeta, (request) => ({
  success: "OK",
  meta: request.meta,
}));

export default { ...router };
