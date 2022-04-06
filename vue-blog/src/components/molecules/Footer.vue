<script setup>
const year = new Date().getFullYear()
</script>

<template>
  <div class="column">
    <div></div>

    <div class="item">
      <div class="column align-items-center">
        <div>
          <h4>
            Feito com 💚 por
            <a href="https://instagram.com/opedro.fontes" target="_blank"
              ><span class="bold">@opedro.fontes</span></a
            >
            - Todos os direitos reservados
          </h4>
        </div>
        <div>
          <h4>© Copyright - {{ year }}</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
}
</script>

<style scoped></style>
