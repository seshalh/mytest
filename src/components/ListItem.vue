<template>
<div class="movie_card">
  <div class="info_section">
    <div class="movie_header">
      <img class="locandina" :src="imageUrl+item.poster_path"/>
      <h1>{{item.title}}</h1>
      <h4>{{item.release_date}}</h4>
      <p class="minutes">Rating : {{item.vote_average}}</p>
    </div>
    <div class="movie_desc" v-if="showMore">
      <p class="text">
        {{item.overview}}  
      </p>
    </div>
  </div> 
  <div class="blur_back bright_back" :style="{ 'background-image': 'url(' + imageUrl+item.backdrop_path + ')' }"></div>
</div>



 
</template>

<script>
	export default {
		name: "listitem",
		props:{
			item: Object,
			showMore: Boolean
		},
		data: () => ({
		   imageUrl: 'https://image.tmdb.org/t/p/w342',
	    })
	}
</script>
<style type="scss" scoped>
	.movie_card {
	  position: relative;
	  display: block;
	  width: 80%;
	  height: max-content;
	  margin: 40px auto;
	  overflow: hidden;
	  border-radius: 10px;
	  -webkit-transition: all 0.4s;
	  transition: all 0.4s;
	  box-shadow:0 0 0 1px rgba(0,0,0,.04), 0 4px 8px 0 rgba(0,0,0,.20);
}

.movie_card .info_section {
  position: relative;
  width: 100%;
  height: 100%;
  background-blend-mode: multiply;
  z-index: 2;
  border-radius: 10px;
}
.movie_card .info_section .movie_header {
  position: relative;
  padding: 25px;
  height: 40%;
}
.movie_card .info_section .movie_header h1 {
  color: black;
  font-weight: 400;
  font-size: 1rem;
}
.movie_card .info_section .movie_header h4 {
  color: #555;
  font-weight: 400;
}
.movie_card .info_section .movie_header .minutes {
  display: inline-block;
  margin-top: 15px;
  color: #555;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.05);
}
.movie_card .info_section .movie_header .type {
  display: inline-block;
  color: #959595;
  margin-left: 10px;
}
.movie_card .info_section .movie_header .locandina {
  position: relative;
  float: left;
  margin-right: 20px;
  height: 120px;
  box-shadow: 0 0 20px -10px rgba(0, 0, 0, 0.5);
}
.movie_card .info_section .movie_desc {
  padding: 25px;
  height: 50%;
}
.movie_card .info_section .movie_desc .text {
  color: #545454;
}
.movie_card .info_section .movie_social {
  height: 10%;
  padding-left: 15px;
  padding-bottom: 20px;
}
.movie_card .info_section .movie_social ul {
  list-style: none;
  padding: 0;
}
.movie_card .info_section .movie_social ul li {
  display: inline-block;
  color: rgba(0, 0, 0, 0.3);
  -webkit-transition: color 0.3s;
  transition: color 0.3s;
  -webkit-transition-delay: 0.15s;
          transition-delay: 0.15s;
  margin: 0 10px;
}

.movie_card .blur_back {
  position: absolute;
  top: 0;
  z-index: 1;
  height: 100%;
  right: 0;
  background-size: cover;
  border-radius: 11px;
}

@media screen and (min-width: 768px) {
  .movie_header {
    width: 65%;
  }

  .movie_desc {
    width: 50%;
  }

  .info_section {
    background: -webkit-gradient(linear, left top, right top, color-stop(50%, #e5e6e6), to(transparent));
    background: linear-gradient(to right, #e5e6e6 50%, transparent 100%);
  }

  .blur_back {
    width: 80%;
    background-position: -100% 10% !important;
  }
}
@media screen and (max-width: 768px) {
  .movie_card {
    width: 95%;
    height: auto;
  }

  .blur_back {
    width: 100%;
    background-position: 50% 50% !important;
  }

  .movie_header {
    width: 100%;
    margin-top: 85px;
  }

  .movie_desc {
    width: 100%;
  }

  .info_section {
    background: -webkit-gradient(linear, left bottom, left top, color-stop(50%, #e5e6e6), to(transparent));
    /* background: linear-gradient(to top, #e5e6e6 50%, transparent 100%); */
    display: inline-grid;
  }
}
 

</style>