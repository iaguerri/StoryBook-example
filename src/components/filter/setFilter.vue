<template>
    <div>
        <h1>{{title}}</h1>
        <input
            :placeholder="placeHolder"
            @input="emitFilter"
        />
    </div>
</template>

<script>
    export default {
        props: {
            title: {
                type: String,
                default: 'Configurador de cadena filtradora'
            },
            placeHolder: {
                type: String,
                default: 'Escriba la cadena filtradora'
            },
        },
        methods: {
            emitFilter(e) {
                this.$emit('updateFilter', e.target.value);
            }
        },
        
    }
</script>

<style lang="scss" scoped>

</style>