<template>
	<div class="finish">
		<h1 class="finish-title">Nice try!</h1>
	    <div class="finish-info">
	      	<h2 class="finish-info-title">Your score: <span class="value">{{myScore}}</span></h2>
	      	<h2 class="finish-info-title">Best score: <span class="value best">{{bestScore}}</span></h2>
	    </div>
	    <router-link to="/game" custom><Button class="primary">Try Again</Button></router-link> 
	    <router-link to="/" custom><Button class="secondary">Back to the rules</Button></router-link> 
	</div>
</template>

<script>
	import Button from '@/components/Button';

	export default {
		components: {
			Button
		},

		data() {
			return {
				myScore: localStorage.getItem('myScore'),
				bestScore: localStorage.getItem('bestScore')
			}
		},
	}
</script>

<style  lang="scss" scoped>
	.finish {
	    display: flex;
	    flex-direction: column;
	    align-items: center;
	    justify-content: center;
	    background: linear-gradient(0deg, rgba(254,255,0,0.5) 40%, rgba(0,74,255,0.5) 100%);
	    min-height: 100%;
	    &-title {
	      	font-size: 4vw;
	      	margin: 0 0 2vw;
	    }
	    &-info {
	      	background: rgba(255,255,255,0.4);
	      	border: 2px dashed #000;
	      	border-radius: 1vw;
	      	padding: 3vw;
	      	margin: 0 0 2vw;
	      	&-title {
	        	font-size: 2vw;
	        	margin: 0 0 1vw;
	        	&:last-of-type {
	        		margin: 0;
	        	}
	      	}
	      	.value {
	      		color: #009469;
	      	}
	    }
	    .button {
		    min-width: 13vw;
		    margin: 0 0 1vw;
	    }
  	}
</style>