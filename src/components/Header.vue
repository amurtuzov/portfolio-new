<template>
	<header>
		<nav>
			<ul>
				<li><router-link to="/">About me</router-link></li>
				<li><router-link to="/Projects">Projects</router-link></li>
				<li><router-link to="/Contacts">Contacts</router-link></li>
			</ul>
		</nav>
	</header>
</template>

<script>


export default {
  data () {
    return {
    }
  },
}
	
</script>


<style lang="scss">
	@mixin list {
		list-style: none;
		display: flex;
		flex-direction: column;
	}
	nav ul {
		@include list;
		background-color: black;
		&::after {
    		position: absolute;
    		top: 50%;
    		right: 0;
    		background-color: cyan;
    		content: "";
    		width: 199px;
    		height: 1px;
    		color: plum;
  		}
	}
</style>