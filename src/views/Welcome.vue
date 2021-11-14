<template>
	<div class="welcome">
		<h1 class="welcome-title">Welcome to Teeter Totter</h1>
	    <div class="welcome-info">
	      	<h2 class="welcome-info-title">Main Rules: </h2>
	      	<p class="welcome-info-description">
	        	You need to stand in balance teeter totter.
	        	<ul class="welcome-info-list">
		          	<li>At the right side of teeter totter, there will be randomly placing objects with random weights.</li>
		          	<li>On the left side, there will be nothing but there will be objects falling from top to bottom.</li>
		          	<li>According to weight on the sides, teeter totter will be bending towards to heavy side.</li>
		          	<li>You will be managing those object’s placement by arrow keys to keep teeter totter on balance.</li>
	        	</ul>
	      	</p>
	    </div>
	    <router-link to="/game" custom><Button class="primary">Start Game</Button></router-link> 
	</div>
</template>

<script>
	import Button from '@/components/Button';

	export default {
		components: {
			Button
		},
	}
</script>

<style  lang="scss" scoped>
	.welcome {
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
	      	width: 60%;
	      	margin: 0 0 2vw;
	      	&-title {
	        	font-size: 2vw;
	        	margin: 0 0 1vw;
	      	}
	      	&-description {
	        	font-size: 1.4vw;
	        	margin: 0;
	      	}
	      	&-list {
	      		margin-bottom: 0;
	      		font-size: 1.2vw;
	      	}
	    }
  	}
</style>
