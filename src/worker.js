const CANONICAL_HOST = 'azwax.ing';

const PATH_REDIRECTS = {
  '/index.html': '/',
  '/index': '/',
  '/index/': '/',
  '/404.html': '/404/',
  '/404': '/404/',
};

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    let redirect = false;

    if (url.hostname !== CANONICAL_HOST || url.protocol !== 'https:') {
      url.protocol = 'https:';
      url.hostname = CANONICAL_HOST;
      redirect = true;
    }

    const normalized = PATH_REDIRECTS[url.pathname];
    if (normalized !== undefined) {
      url.pathname = normalized;
      redirect = true;
    }

    if (redirect) {
      return Response.redirect(url.toString(), 301);
    }

    const response = await env.ASSETS.fetch(request);

    if (response.status === 404) {
      const headers = new Headers(response.headers);
      headers.set('X-Robots-Tag', 'noindex');
      return new Response(response.body, {
        status: 404,
        headers,
      });
    }

    return response;
  },
};
