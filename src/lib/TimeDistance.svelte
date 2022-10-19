<script>
  import { formatDistance, lightFormat } from 'date-fns'
  import { now } from './heartbeat'

  let classes = ''

  export { classes as class }
  export let timestamp

  $: formatted = formatDistance(timestamp, $now)
</script>

<span class={classes} title={lightFormat(timestamp, 'yyyy/MM/dd h:mm a')}>
  {#if timestamp > $now}in{/if}
  {formatted}
  {#if timestamp < $now}ago{/if}
</span>
