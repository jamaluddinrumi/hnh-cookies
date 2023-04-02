<script setup lang="ts">
const props = defineProps<{
  modelValue?: boolean;
}>();
</script>

<template>
  <Head>
    <Title> HNH Cookies - Delicious Made Better </Title>
    <Meta property="og:title" content="HNH Cookies - Delicious Made Better" />
    <Meta property="og:type" content="food" />
    <Meta property="og:url" content="https://hnh-cookies.pages.dev/" />
    <Meta property="og:image" content="/cookies-time.webp" />
    <Meta property="og:site_name" content="HNH Cookies" />
    <Meta property="og:locale" content="id_ID" />
    <Meta
      property="og:description"
      content="Cookies Time! Choco Chips Cookies, Baton Cookies, Choctart semua ada di sini! Yuk!"
    />
  </Head>
  <img src="/cookies-time.webp" class="w-full" alt="" />
  <div class="container mx-auto px-4">
    <article class="prose mx-auto mt-8 mb-12 lg:mb-16 prose-h1:text-2xl">
      <h1>Maecenas sed diam eget risus varius blandit sit amet non magna.</h1>
      <p>
        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
      </p>
      <p>
        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
        Donec id elit non mi porta gravida at eget metus. Praesent commodo
        cursus magna, vel scelerisque nisl consectetur et. Cras justo odio,
        dapibus ac facilisis in, egestas eget quam. Maecenas faucibus mollis
        interdum. Etiam porta sem malesuada magna mollis euismod. Cum sociis
        natoque penatibus et magnis dis parturient montes, nascetur ridiculus
        mus.
      </p>
      <p>
        Nulla vitae elit libero, a pharetra augue. Donec ullamcorper nulla non
        metus auctor fringilla. Integer posuere erat a ante venenatis dapibus
        posuere velit aliquet. Morbi leo risus, porta ac consectetur ac,
        vestibulum at eros.
      </p>
    </article>
    <Product>
      <template #title> Adipiscing Nullam </template>
      <template #price>40k</template>
      <template #description>
        Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec
        ullamcorper nulla non metus auctor fringilla. Praesent commodo cursus
        magna, vel scelerisque nisl consectetur et. Maecenas sed diam eget risus
        varius blandit sit amet non magna. Morbi leo risus, porta ac consectetur
        ac, vestibulum at eros. Cum sociis natoque penatibus et magnis dis
        parturient montes, nascetur ridiculus mus.
      </template>
      <template #description2>
        Donec id elit non mi porta gravida at eget metus. Curabitur blandit
        tempus porttitor. Maecenas faucibus mollis interdum. Cum sociis natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi
        leo risus, porta ac consectetur ac, vestibulum at eros.
      </template>
      <template #photo>
        <img src="/products/cokelat.jpg" alt="Adipiscing Nullam" />
      </template>
    </Product>
    <Product :flip-order="true">
      <template #title> Fringilla Cras </template>
      <template #price>40k</template>
      <template #description>
        Cras mattis consectetur purus sit amet fermentum. Vivamus sagittis lacus
        vel augue laoreet rutrum faucibus dolor auctor. Cras justo odio, dapibus
        ac facilisis in, egestas eget quam. Maecenas faucibus mollis interdum.
        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
      </template>
      <template #description2>
        Sed posuere consectetur est at lobortis. Curabitur blandit tempus
        porttitor. Cras justo odio, dapibus ac facilisis in, egestas eget quam.
        Etiam porta sem malesuada magna mollis euismod. Nulla vitae elit libero,
        a pharetra augue. Sed posuere consectetur est at lobortis.
      </template>
      <template #photo>
        <img src="/products/tempe.jpg" alt="Pellentesque Vestibulum" />
      </template>
    </Product>
    <Product>
      <template #title> Malesuada Lorem </template>
      <template #price>40k</template>
      <template #description>
        Aenean lacinia bibendum nulla sed consectetur. Sed posuere consectetur
        est at lobortis. Nullam id dolor id nibh ultricies vehicula ut id elit.
        Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
      </template>
      <template #description2>
        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
        Etiam porta sem malesuada magna mollis euismod. Cum sociis natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        Vestibulum id ligula porta felis euismod semper. Duis mollis, est non
        commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec
        elit.
      </template>
      <template #photo>
        <img src="/products/cokelat.jpg" alt="Malesuada Lorem" />
      </template>
    </Product>
  </div>
</template>
