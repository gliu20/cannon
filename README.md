[![Netlify Status](https://api.netlify.com/api/v1/badges/e1321f71-2d04-43dc-91e8-d86f418bfd5a/deploy-status)](https://app.netlify.com/sites/cannon-testing/deploys)


# Documentation

## Tech stack
- Frontend - Gatsby
  - Depends on gatsby-source-wordpress to connect to wordpress
- CMS/Backend - Wordpress
  - Depends on Wordpress plugins to communicate data back to gatsby
    - WPGraphQL
    - WPGatsby
- Hosting - Netlify

## Domains
`cannon-wp.skule.ca` is just for hosting wordpress. The graphql backend is at `https://cannon-wp.skule.ca/graphql` and the Wordpress admin page is `https://cannon-wp.skule.ca/wp-admin/`.

`cannon.skule.ca` is the actual website. It is basically an alias to `cannon.netlify.app`. The DNS settings are managed by EngSoc so contact webmaster@skule.ca if changes to the records are necessary. Right now, the `dig` (it just gets DNS information) command outputs
```
www.cannon.skule.ca.	300	IN	CNAME	cannon.netlify.app.
cannon.netlify.app.	20	IN	A	34.196.254.27
cannon.netlify.app.	20	IN	A	52.203.36.44
```

## Build commands
- `gatsby develop`
- `gatsby build`
- `gatsby serve`
- `gatsby clean`


## Gatsby resources

- [Documentation](https://www.gatsbyjs.com/docs/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)
- [Tutorials](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)
- [Guides](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)
- [API Reference](https://www.gatsbyjs.com/docs/api-reference/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)
- [Plugin Library](https://www.gatsbyjs.com/plugins?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)
- [Cheat Sheet](https://www.gatsbyjs.com/docs/cheat-sheet/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)
