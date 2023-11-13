This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## TODO

### Client TODO

- [ ] Figure out image click UX (opens a modal with large image or goes the source details page?)
- [ ] Make Pexel images clickable.
- [ ] Fix bug with search input updating gallery on every click/key press.
- [ ] Get 'Rerun' in Search History working again.
- [ ] Adapt code for multi-tenant use (search.photos and search.graphics)
- [ ] Add `About` page content
- [ ] Add `Contact` page content
- [ ] Add `Privacy Policy` page content
- [ ] Add `Terms of Service` page content
- [ ] Add a `Login` page
- [ ] Add a `Signup` page
- [x] Add a `404` page
- [ ] Add a `500` page
- [ ] Add a `503` page
- [x] Limit results to 10 per source
- [ ] Add a `Loading...` component
- [x] Fix theme and accent colors
- [ ] Create background image for for home page photos
- [ ] Create background image for for home page graphics
- [ ] Create favicon for photos and graphics sites
- [x] Add a `robots.txt` file
- [ ] Add a `sitemap.xml` file
- [x] Add a `humans.txt` file
- [ ] Optimize pages for SEO
- [ ] Add Google Analytics
- [ ] Add Google Tag Manager
- [ ] Add unit tests

### Server TODO

- [ ] Investigate using Next.js API routes for backend
- [ ] Add backend for tracking user favorites
- [ ] Add backend for tracking user search history (!!!)

### Future TODO

- [ ] Add bookmarks/favorites feature
- [ ] Redo design for gallery details
- [ ] Fix 'rerun' bug in search form
- [ ] Fix gallery layout bug where images are clipped
- [ ] Consider making gallery layout vertical
- [ ] Add backend for user accounts


## Dev Notes

### Initial process used to create this project

Create a new app using App Router, Tailwind CSS, TypeScript, and ESLint:

```bash
npx create-next-app@latest
```

NOTE: Next.js now ships with TypeScript, ESLint, and Tailwind CSS configuration by default.

### Fetch

NOTE: I'm currently using NPM packages for fetching data. I'm not sure if I'll stick with this approach or use Next.js's built-in data fetching methods eventually.


## Next JS Learnings

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

Also check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

### App Router vs Pages Router

We recommend starting new applications with the `App Router` to leverage React's latest features

All components inside the `App Router` are Server Components by default.

Client Components is how components in the `Pages Router` have always worked. Client Components are primarily rendered on the client, but with Next.js, they can also be pre-rendered on the server and hydrated on the client.

We recommend using Server Components (default in the app directory) until you have a use case for a Client Component.

Next.js uses file-system routing, which means how you structure your files determines the routes in your application.

Server component use cases:

- Fetch data
- Access backend resources (directly)
- Keep sensitive information on the server (access tokens, API keys, etc)
- Keep large dependencies on the server / Reduce client-side JavaScript

Client component use cases:

- Add interactivity and event listeners (onClick(), onChange(), etc)
- Use State and Lifecycle Effects (useState(), useReducer(), useEffect(), etc)
- Use browser-only APIs
- Use custom hooks that depend on state, effects, or browser-only APIs
- Use React Class components


Try to move Client Component to Leaves

For example, you may have a Layout that has static elements (e.g. logo, links, etc) and an interactive search bar that uses state.

Instead of making the whole layout a Client Component, move the interactive logic to a Client Component (e.g. `<SearchBar />`) and keep your layout as a Server Component. This means you don't have to send all the component Javascript of the layout to the client.

NOTE: There is a restriction around importing a Server Component into a Client Component, as this approach would require an additional server round trip.

Instead, when designing Client Components you can use React props to mark "slots" for Server Components.

The Server Component will be rendered on the server, and when the Client Component is rendered on the client, the "slot" will be filled in with the rendered result of the Server Component.

### [Data Fetching](https://nextjs.org/docs/getting-started/react-essentials#data-fetching)

Although it's possible to fetch data in Client Components, we recommend fetching data in Server Components unless you have a specific reason for fetching data on the client. Moving data fetching to the server leads to better performance and user experience.

### [Context](https://nextjs.org/docs/getting-started/react-essentials#context)

### [Rounting](https://nextjs.org/docs/app/building-your-application/routing)

> Good to know: The App Router takes priority over the Pages Router. Routes across directories should not resolve to the same URL path and will cause a build-time error to prevent a conflict.

Next.js uses a file-system based router where

**Folders** are used to define routes. A route is a single path of nested folders, following the file-system hierarchy from the **root folder** down to a final **leaf folder** that includes a `page.js` file.

### [Component Hierarchy](https://nextjs.org/docs/app/building-your-application/routing#component-hierarchy)

The React components defined in special files of a route segment are rendered in a specific hierarchy:

- `layout.js`
- `template.js`
- `error.js` (React error boundary)
- `loading.js` (React suspense boundary)
- `not-found.js` (React error boundary)
- `page.js` or nested `layout.js`

```react
<Layout>
  <Template>
    <ErrorBoundary fallback={<Error />}>
      <Suspense fallback={<Loading />}>
        <ErrorBoundary fallback={<NotFound />}>
          <Page />
        </ErrorBoundary>
      </Suspense>
    </ErrorBoundary>
  </Template>
</Layout>
```

In a nested route, the components of a segment will be nested inside the components of its parent segment.

```react
<!-- /dashboard -->
<Layout>
  <ErrorBoundary fallback={<Error />}>
    <Suspense fallback={<Loading />}>
      <!-- /dashboard/settings -->
      <Layout>
        <ErrorBoundary fallback={<Error />}>
          <Suspense fallback={<Loading />}>
            <Page />
          </Suspense>
        </ErrorBoundary>
      </Layout>
    </Suspense>
  </ErrorBoundary>
</Layout>

```

### Make some notes about using TypeScript

DOCS: [TypeScript](https://nextjs.org/docs/app/building-your-application/configuring/typescript)

### Make some notes about using ESLint

DOCS: [ESLint](https://nextjs.org/docs/app/building-your-application/configuring/eslint)

### Make some notes about using Environment Variables

DOCS: [Environment Variables](https://nextjs.org/docs/app/building-your-application/configuring/environment-variables)


### Using module aliasing

DOCS: [Absolute Imports and Module Path Aliases](https://nextjs.org/docs/app/building-your-application/configuring/absolute-imports-and-module-aliases)

### Consider Using MDX

DOCS: [MDX](https://nextjs.org/docs/app/building-your-application/configuring/mdx)

### Note CLI commands / processes used

[Next.js CLI](https://nextjs.org/docs/app/api-reference/next-cli)
