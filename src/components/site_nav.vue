<template>
  <header class="w-full text-sm">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div class="flex flex-nowrap h-full px-8 mx-auto border-b border-solid border-brand-gray-1">
        <a href="/" class="flex items-center h-full text-xl">{{ site }}</a>
        <ul class="flex items-center h-full">
          <li v-for="section in sections" :key="section.url" class="flex items-center h-full ml-8">
            <a :href="section.url">{{ section.name }}</a>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'SiteNav',
  data() {
    return {
      site: 'Airport Search',
      sections: [
        { name: 'Countries', url: '/#c' },
        { name: 'Regions', url: '/#r' },
        { name: 'Codes', url: '/#i' },
      ],
    }
  },
}
</script>
