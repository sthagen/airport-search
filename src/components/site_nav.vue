<template>
  <header class="w-full text-sm">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div class="flex flex-nowrap h-full px-8 mx-auto border-b border-solid border-brand-gray-1">
        <a href="/" class="flex items-center h-full text-xl">{{ site }}</a>
        <nav class="h-full ml-12">
          <ul class="flex h-full p-0 m-0 list-none">
            <li v-for="section in sections" :key="section.url" class="h-full ml-9">
              <a :href="section.url" class="flex items-center h-full py-2.5">{{ section.name }}</a>
            </li>
          </ul>
        </nav>
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
