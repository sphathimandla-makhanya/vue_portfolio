<template>
    <div>
      <div class="float-buttons">
        <a class="badge" @click="openZoom('https://i.ibb.co/FKR891V/SCRUM-2.png')">
          <img id="badge" src="https://i.ibb.co/FKR891V/SCRUM-2.png" alt="">
          <span class="hover-text">Click me</span>
        </a>
        <a class="badge" @click="openZoom('https://i.ibb.co/8NLcwzM/operating-systems-basics.png')">
          <img id="badge" src="https://i.ibb.co/8NLcwzM/operating-systems-basics.png" alt="">
          <span class="hover-text">Click me</span>
        </a>
        <a class="badge" @click="openZoom('https://i.ibb.co/QPVBHJX/network-technician-career-path.png')">
          <img id="badge" src="https://i.ibb.co/QPVBHJX/network-technician-career-path.png" alt="">
          <span class="hover-text">Click me</span>
        </a>
      </div>
      <div v-if="isZoomed" class="zoom-modal" @click="closeZoom">
        <img :src="zoomedImage" class="zoomed-img" />
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'StickyButtons',
    data() {
      return {
        isZoomed: false,
        zoomedImage: ''
      };
    },
    methods: {
      openZoom(imgSrc) {
        this.zoomedImage = imgSrc;
        this.isZoomed = true;
      },
      closeZoom() {
        this.isZoomed = false;
        this.zoomedImage = '';
      }
    }
  };
  </script>
  
  <style scoped>
  .float-buttons {
    position: fixed;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  
  .badge {
    position: relative;
    cursor: pointer;
  }
  
  .badge img {
    transition: transform 0.3s ease-in-out;
  }
  
  #badge{
    width: 45px;
    height: 45px;
  }
  .hover-text {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 5px 10px;
    border-radius: 5px;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }
  
  .badge:hover .hover-text {
    opacity: 1;
  }
  
  .zoom-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  
  .zoomed-img {
    width: 250px;
    height: 250px;
    transition: transform 0.3s ease-in-out;
  }
  </style>
  