<template>
    <div class="container">
        <ActionsPanel />
        <PlayField />
    </div>
</template>

<script>
    import ActionsPanel from '@/components/ActionsPanel'
    import PlayField from '@/components/PlayField'

	export default {
        components: {
            ActionsPanel, 
            PlayField
        },
	}
</script>

<style lang="scss">
    .container {
        display: flex;
        flex-direction: column;
        height: 100vh;
        overflow: hidden;
        background: linear-gradient(0deg, rgba(254,255,0,0.5) 40%, rgba(0,74,255,0.5) 100%);
    }
    *:focus {
        outline: none;
    }
</style>
