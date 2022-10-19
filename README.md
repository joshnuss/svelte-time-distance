# Time Distance

Display time distances in a human readable format.

- Based on [date-fns](https://date-fns.org)
- Updates every 60 seconds

[View demo](https://svelte.dev/repl/d7ed264a460a4948acdc95b85cd53a3a?version=3.52.0)

## Usage

Install package:

```sh
pnpm i -D svelte-time-distance
```

Add to your UI:

```html
<!-- Example.svelte -->
<script>
  import { TimeDistance } from 'svelte-time-distance'

  let timestamp = new Date()
</script>

<TimeDistance {timestamp} class="jumbo" />
```

## License

MIT
