<template>
  <div>
    <v-app>

      <LayoutHeader></LayoutHeader>

      <LayoutSidebar></LayoutSidebar>

      <v-main>
        <div class="ma-5" style="text-align: center">
          <slot/>
        </div>
      </v-main>

    </v-app>
  </div>
</template>
