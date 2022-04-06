<script setup>
import LogoPDAV from '../shared/LogoPDAV.vue'
</script>

<template>
    <div class="column full-width">
        <div>
            <div class="row justify-center">
                <div class="item">
                    <LogoPDAV />
                </div>
            </div>
        </div>

        <div>
            <nav>
                <div class="row">
                    <NavItem label="Home" />
                    <NavItem label="Sobre" />
                    <NavItem label="Recursos" />
                </div>
            </nav>
        </div>
    </div>
</template>

<script>
const NavItem = {
    props: ['label'],
    template: `<div class="item">
    <h4>{{ this.label }}</h4>
  </div>`,
}

export default {
    name: 'NavBar',
    components: {
        NavItem,
    },
}
</script>

<style scoped>
.column,
.row {
    display: flex;
    flex-wrap: wrap;
}
.column > .item,
.row > .item {
    margin: 1rem;
}
.column {
    flex-direction: column;
}
.row {
    flex-direction: row;
}
.justify-center {
    justify-content: center;
}
.align-items-center {
    align-items: center;
}
</style>
