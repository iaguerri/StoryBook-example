<template>
    <div>
        <h1 
            :style="`color:${color}`"
        >{{title}}</h1>
        <input
            :size="size"
            :placeholder="placeHolder"
            :maxlength="maxLength"
            @input="setResult"
            />
        <h2>{{result}}</h2>

    </div>
</template>

<script>
    /**
     * Este componente filtra una cadena de texto en base al props de filterString
     * @param e String La cadena de texto introducida por el usuario
     */
    export default {
        props: {
            /**
             * Hola, soy un tamaño
             */
            size: {
                type: Number,
                default: 16
            },
            placeHolder: {
                type: String,
                default: 'Escriba algo para filtrar'
            },
            maxLength: {
                type: Number,
                default: 16
            },
            title: {
                type: String,
                default: 'Filtrador'
            },
            filterString: {
                type: String,
                default: ''
            },
            /**
             * Define el color de la fuente del titulo
             */
            color: {
                type: String,
                default: '#000'
            }
        },
        data() {
            return {
                result: ''
            }
        },
        methods: {
            setResult(e) {
                const inputString = e.target.value;
                const inputArray = inputString.split(this.filterString);
                this.result = inputArray.join('');
            }
        },
        
    }
</script>

<style lang="scss" scoped>

</style>