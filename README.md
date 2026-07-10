# @gic Registry

Public [shadcn-compatible](https://ui.shadcn.com/docs/registry) registry for
shared GIC product-app primitives and flows.

Registry artifacts are served from `public/r/{name}.json`. Consumers configure:

```json
{
  "registries": {
    "@gic": {
      "url": "https://raw.githubusercontent.com/General-Intelligence-Company/gic-registry/main/public/r/{name}.json"
    }
  }
}
```

Then install with:

```bash
bunx shadcn@latest add @gic/billing
```

## Published items

- `@gic/ui-base`
- `@gic/auth`
- `@gic/billing`
- `@gic/hello` (pipeline smoke item)

## Publishing

The canonical item manifests and generated product-template sources live in
the private `superoptimizers` repository. Publish reviewed
`packages/gic-registry/__generated__/r/*.json` artifacts here and verify the
anonymous raw GitHub URL before updating consumer pins.
