module.exports = (controller) => (req, res) => {
  const httpReq = {
    body: req.body,
    url: req.url,
    params: req.params,
    method: req.method,
    path: req.path,
    headers: {
      'Content-Type': req.get('Content-Type'),
      Referrer: req.get('referer'),
      'User-Agent': req.get('User-Agent'),
    },
  };
  controller(httpReq)
    .then((httpRes) => {
      if (httpRes.headers) {
        res.set(httpRes.headers);
      }
      res.type('json');
      res.status(httpRes.statusCode).send(httpRes.body).end();
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ error: 'Network error' }).end();
    });
};
