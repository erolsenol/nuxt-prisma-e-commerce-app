import sites from "../../data/sites";

interface response {
  data?: Object;
  error?: String;
  status: Boolean;
}

export default defineEventHandler(async (event) => {
  let response: response = {
    status: false,
  };

  const body = await readBody(event);

  if (!body.id) {
    const site = await sites.create(body);
    if (site && site.id) {
      response.data = site;
      response.status = true;
    } else {
      response.error = "site_info_not_created";
    }
  } else {
    const oldSite = await sites.get(body.id);
    if (oldSite && oldSite.id) {
      const update = await sites.update(oldSite.id, { ...oldSite, ...body });
      if (update && update.id) {
        response.data = update;
        response.status = true;
      } else {
        response.error = "site_info_update_error";
      }
    } else {
      response.error = "site_info_get_error";
    }
  }

  return response;
});
