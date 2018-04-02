<template>
  <div>
    <top></top>
    <activity></activity>
  </div>
</template>

<script>
import top from './top'
import activity from './activity'

export default {
  name: 'my',
  components: { top, activity }
}
</script>