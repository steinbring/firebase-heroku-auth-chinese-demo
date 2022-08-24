<template>
  <div class="vue-tempalte">
    <!-- Navigation -->
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <div class="container">
        <a class="navbar-brand" href="/" target="_blank">
           Menu
        </a>
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/login">Sign in</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/">Sign up</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <!-- Main -->
    <div class="App">
      <div class="vertical-center">
        <div class="inner-block">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>