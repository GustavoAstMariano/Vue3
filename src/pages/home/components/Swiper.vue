<template>
  <div class="mt-[-4rem] min-h-screen text-primary-content hero">
    <!--  <div class="hero min-h-screen from-primary to-secondary" style="background-image: url(https://img.js.design/assets/Resources/background/home-bg-2.png);"> -->
    <div class="place-items-center from-primary to-base-100 bg-gradient-to-bl hero-overlay" />
    <div class="col-12 col-sm-9 col-md-8 col-lg-7 col-xl-6 text-center">
      <div class="col-12">
        <h1 class="mb-5 text-5xl font-bold">
          {{ $t(`Top 10 Playlists no Brasil`) }}
        </h1>
        <!-- :autoplay="{
            delay: 2500,
            disableOnInteraction: false,
          }"  -->
        <swiper style="height: 200px;" 
          :style="{
            '--swiper-navigation-color': 'theme',
            '--swiper-pagination-color': '#169196',
            '--swiper-theme-color': '#169196',
          }"
         
          :rewind="true" :modules="modules" :slides-per-view="3" :space-between="0" :navigation="true"
          :pagination="{ clickable: true }" :scrollbar="{ draggable: true }" @swiper="onSwiper"
          @slideChange="onSlideChange" @autoplayTimeLeft="onAutoplayTimeLeft" class="mySwiper">
          <swiper-slide>
            <div class="row mx-1" style="width: -webkit-fill-available"> 
              <div class="col-2"></div>
              <div class="col-8">
               <img src="../../../assets/lançamentos-sertanejo-da-semana.png" class="img-fluid" alt="Sertanejo 2024">
              </div>
              <div class="col-2"></div>
              <div class="col-12 font-bold text-truncate" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Tooltip on top">
               {{ 'LANÇAMENTOS SERTANEJO DA SEMANA' }}
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="row mx-1" style="width: -webkit-fill-available"> 
              <div class="col-2"></div>
              <div class="col-8">
                <img src="../../../assets/DogBeat-boiadera.png" class="img-fluid" alt="Sertanejo 2024">
              </div>
              <div class="col-2"></div>
              <div class="col-12 font-bold text-truncate">
               {{ 'DogBeat - Pegador de Boiadera' }}
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="row mx-1" style="width: -webkit-fill-available"> 
              <div class="col-2"></div>
              <div class="col-8">
                <img src="../../../assets/cabare.png" class="img-fluid" alt="Pop 2024">
              </div>
              <div class="col-2"></div>
              <div class="col-12 font-bold text-truncate">
               {{ 'CABARÉ SERTANEJO - BRUNO E MARRONE | LEONARDO | CLÁSSICOS SERTANEJOS' }}
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="row mx-1" style="width: -webkit-fill-available"> 
              <div class="col-2"></div>
              <div class="col-8">
                <img src="../../../assets/brenno-e-matheus.png" class="img-fluid" alt="Rock 2024">
              </div>
              <div class="col-2"></div>
              <div class="col-12 font-bold text-truncate">
               {{ 'BRENNO E MATHEUS - MAIORES SUCESSOS' }}
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="row mx-1" style="width: -webkit-fill-available"> 
              <div class="col-2"></div>
              <div class="col-8">
                <img src="../../../assets/lançamentos-da-semana.png" class="img-fluid" alt="Pagode 2024">
              </div>
              <div class="col-2"></div>
              <div class="col-12 font-bold text-truncate">
               {{ 'SERTANEJO ACÚSTICO - AS MAIS PEDIDAS DO ANO | 2024' }}
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="row mx-1" style="width: -webkit-fill-available"> 
              <div class="col-2"></div>
              <div class="col-8">
                <img src="../../../assets/louvor-e-adoracao.png" class="img-fluid" alt="Lançamentos 2024">
              </div>
              <div class="col-2"></div>
              <div class="col-12 font-bold text-truncate">
               {{ 'LOUVOR E ADORAÇÃO - MÚSICA GOSPEL | AS MAIS TOCADAS - 2024' }}
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="row mx-1" style="width: -webkit-fill-available"> 
              <div class="col-2"></div>
              <div class="col-8">
                <img src="../../../assets/musicas-para-academia.png" class="img-fluid" alt="Samba 2024">
              </div>
              <div class="col-2"></div>
              <div class="col-12 font-bold text-truncate">
               {{ 'MÚSICAS PARA ACADEMIA 2024 - AS MELHORES PARA TREINAR' }}
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="row mx-1" style="width: -webkit-fill-available"> 
              <div class="col-2"></div>
              <div class="col-8">
                <img src="../../../assets/top-50-leonardo.png" class="img-fluid" alt="Mix Eletronica 2024">
              </div>
              <div class="col-2"></div>
              <div class="col-12 font-bold text-truncate">
               {{ 'TOP 50 LEONARDO - AS MELHORES' }}
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="row mx-1" style="width: -webkit-fill-available"> 
              <div class="col-2"></div>
              <div class="col-8">
                <img src="../../../assets/top-50-melhores.png" class="img-fluid" alt="Mid Edm 2024">
              </div>
              <div class="col-2"></div>
              <div class="col-12 font-bold text-truncate">
               {{ 'Top 50 Brasil - O Melhor do Sertanejo' }}
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="row mx-1" style="width: -webkit-fill-available"> 
              <div class="col-2"></div>
              <div class="col-8">
                <img src="../../../assets/turma-do-agro.png" class="img-fluid" alt="Mix House 2024">
              </div>
              <div class="col-2"></div>
              <div class="col-12 font-bold text-truncate">
               {{ 'TURMA DO AGRO - AS MELHORES DA BRUTAIADA' }}
              </div>
            </div>
          </swiper-slide>
          <template #container-end>
            <div class="autoplay-progress">
              <svg viewBox="0 0 48 48" ref="progressCircle">
                <circle cx="24" cy="24" r="20"></circle>
              </svg>
              <span class="text-base-content" ref="progressContent"></span>
            </div>
          </template>
        </swiper>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from 'vue';

// import Swiper core and required modules
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// Import Swiper styles
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    const progressCircle = ref(null);
    const progressContent = ref(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
      progressCircle.value.style.setProperty('--progress', progress - 1);
      progressContent.value.textContent = `${Math.ceil(time / 1000)}s`;
      progressContent.value.style.setProperty('color', '#169196');
    };
    return {
      onSwiper,
      onSlideChange,
      onAutoplayTimeLeft,
      progressCircle,
      progressContent,
      modules: [Autoplay, Navigation, Pagination, Scrollbar, A11y],
    };
  },
};
</script>
<style>
.swiper {
  width: 100%;
  height: 100%;
}
.swiper-wrapper {
  position: absolute !important;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: none;
  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.autoplay-progress {
  position: absolute;
  right: 16px;
  bottom: 16px;
  z-index: 10;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: var(--swiper-theme-color);
}

.autoplay-progress svg {
  --progress: 0;
  position: absolute;
  left: 0;
  top: 0px;
  z-index: 10;
  width: 100%;
  height: 100%;
  stroke-width: 4px;
  stroke: var(--swiper-theme-color);
  fill: none;
  stroke-dashoffset: calc(125.6 * (1 - var(--progress)));
  stroke-dasharray: 125.6;
  transform: rotate(-90deg);
}
</style>