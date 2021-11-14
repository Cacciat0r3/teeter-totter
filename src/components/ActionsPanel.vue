<template>
	<header class="header">
		<div class="header-info">
			Score: <span class="count">{{score}}</span>
		</div>
		<div class="header-buttons">
			<Button class="primary" @click="playButton()" ref="playButton">Play</Button>
			<Button class="secondary" @click="restartButton()">Clear</Button>
		</div>
	</header>
</template>

<script>
	import { mapGetters, mapMutations, mapActions } from 'vuex';
	import Button from '@/components/Button';

	export default {
		components: {
			Button
		},

		computed: {
			...mapGetters(['isPaused','gameOver', 'fallingItem','fallingItems', 'gameTimeout', 'score']),
		},

        watch: {
            gameOver(){
            	if(this.gameOver) {
            		localStorage.setItem('myScore', JSON.stringify(this.score));
            		if(this.score > localStorage.getItem('bestScore') || !localStorage.getItem('bestScore')) {
						localStorage.setItem('bestScore', JSON.stringify(this.score));
            		}
            		this.$router.push('finish');
            		this.RESET_GAME();
            	}
            }
        },
        
		methods: {
			...mapMutations(['START_GAME', 'CONTINUE_GAME', 'RESET_GAME', 'PAUSE_GAME', 'CREATE_FALLING_ITEM', 'PUSH_FALLING_ITEM']),
			...mapActions(['startGame']),

			playButton() {
				if(this.$refs.playButton.$el.innerHTML === 'Play') {
					this.$refs.playButton.$el.innerHTML = 'Pause';
					this.startGame();
					return;
				}
				if(this.isPaused) {
					this.$refs.playButton.$el.innerHTML = 'Pause';
					this.CONTINUE_GAME();
				} else {
					this.$refs.playButton.$el.innerHTML = 'Continue';
					this.PAUSE_GAME();
				}
			}, 

			restartButton() {
				this.$refs.playButton.$el.innerHTML = 'Play';
				this.RESET_GAME();
			}, 
		}
	}
</script>

<style lang="scss">
	.header {
		display: flex;
		align-items: center;
		background: #fff;
		border-bottom: 1px solid #000;
		padding: 1vw 3vw;
		&-info {
			font-size: 1.4vw;
			color: #222;
			.count {
				color: #009469;
			}
		}
		&-buttons {
			margin-left: auto;
		}
	}
</style>