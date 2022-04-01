<template>
  <div class="courses">
    <courses-header></courses-header>
    <courses-content></courses-content>
    <layout-footer></layout-footer>
  </div>
</template>

<script>
import LayoutFooter from '@/components/LayoutFooter'
import CoursesHeader from '@/views/courses/components/CoursesHeader'
import CoursesContent from '@/views/courses/components/CoursesContent'

export default {
  name: 'Courses',
  components: {
    LayoutFooter,
    CoursesHeader,
    CoursesContent
  }
}
</script>

<style lang="scss" scoped>

</style>
