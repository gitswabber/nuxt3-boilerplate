<template>
  <div>
    <v-app>

      <LayoutHeader></LayoutHeader>

      <LayoutSidebar></LayoutSidebar>

      <v-main>
        <div class="main ma-5">
          <slot/>
        </div>
      </v-main>

    </v-app>
  </div>
</template>

<style>
.main {
  /*text-align: center;*/
}
</style>
