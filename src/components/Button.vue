<template>
	<button :disabled="disabled" :type="type" class="button" v-on="clickListeners">
        <slot></slot>
    </button>
</template>

<script>
	export default {
    name: 'Button',

    props: {
        disabled: {
            type: Boolean,
            default: false,
        },

        type: {
            type: String,
            default: 'button',
        },

    },

    computed: {
        clickListeners: function() {
            return {
                ...this.$listeners,
            };
        },
    },
};
</script>

<style lang="scss">
	button {
	    color: #fff;
	    font-size: 1.4vw;
	    text-align: center;
	    text-decoration: none;
	    min-width: 7vw;
	    padding: 0.5vw 1vw;
	    margin-left: 1vw;
	    border: none;
		border-radius: 0.35vw;
	    cursor: pointer;
	    &.primary {
	    	background-color: #009469;
	    	box-shadow: 0 3px #317a58;
	    	&:hover {
		    	background-color: #317a58;
		    }
	    }
	    &.secondary {
	    	background-color: #cb2323;
	    	box-shadow: 0 3px #810606;
	    	&:hover {
		    	background-color: #810606;
		    }
	    }
	}
</style>