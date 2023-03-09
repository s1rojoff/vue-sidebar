<script setup>
import { ref } from "vue";

const isExpended = ref(localStorage.getItem('isExpanded') === 'true');
function toggleMenu() {
  isExpended.value = !isExpended.value;
  localStorage.setItem('isExpanded', isExpended.value)
}
const menus = [
  {
    icon: "home",
    name: "Home",
    route: '/'
  },
  {
    icon: "description",
    name: "About",
    route: 'about'
  },
  {
    icon: "group",
    name: "Team",
    route: 'team'
  },
  {
    icon: "email",
    name: "Contact",
    route: 'contact'
  },
];
</script>
<template>
  <aside :class="`${isExpended && 'is-expended'}`">
    <div class="logo">
      <img src="../assets/vue.svg" alt="Vue" />
    </div>

    <div class="menu-toggle-wrap">
      <button class="menu-toggle" @click="toggleMenu">
        <span class="material-icons">keyboard_double_arrow_right</span>
      </button>
    </div>

    <h3>Menu</h3>
    <div class="menu">
      <router-link
        v-for="(menu, index) in menus"
        :key="index"
        :to="menu.route"
        class="button"
      >
        <span class="material-icons">{{ menu.icon }}</span>
        <span class="text">{{ menu.name }}</span>
      </router-link>
    </div>

    <div class="flex"></div>

    <div class="menu">
      <router-link
        to="settings"
        class="button"
      >
        <span class="material-icons">settings</span>
        <span class="text">settings</span>
      </router-link>
    </div>
  </aside>
</template>
<style scoped lang="scss">
aside {
  display: flex;
  flex-direction: column;
  background: var(--dark);
  color: var(--light);
  width: calc(2rem + 32px);
  min-height: 100vh;
  overflow: hidden;
  padding: 1rem;
  transition: 0.4s ease-out;


  .flex{
    flex: 1 1 0;
  }
  .logo {
    margin-bottom: 1rem;
    img {
      width: 2rem;
    }
  }
  .menu-toggle-wrap {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 1rem;

    position: relative;
    top: 0;
    transition: 0.2s ease-out;

    .menu-toggle {
      transition: 0.2s ease-out;

      .material-icons {
        color: var(--light);
        font-size: 2rem;
        transition: 0.2s ease-out;
      }
      &:hover {
        .material-icons {
          color: var(--primary);
          transform: translateX(0.5rem);
        }
      }
    }
  }

  h3,
  .button .text {
    opacity: 0;
    transition: 0.3s ease-out;
  }
  h3{
    color: var(--grey);
    font-size: 0.875rem;
    text-transform: uppercase;
    margin-bottom: 0.5rem;
  }
  .menu {
    margin: 0 -1rem;

    .button {
      display: flex;
      align-items: center;
      text-decoration: none;

      padding: 0.5rem 1rem;
      transition: 0.2s ease-out;

      .material-icons {
        font-size: 2rem;
        color: var(--light);
        transition: 0.2s ease-out;
      }
      .text {
        color: var(--light);
        transition: 0.2s ease-out;
      }
      &:hover, &.router-link-exact-active {
        background: var(--dark-alt);
        .material-icons,
        .text {
          color: var(--primary);
        }
      }
      &.router-link-exact-active{
        border-right: 5px solid var(--primary);
      }
    }
  }
  &.is-expended {
    width: var(--sidebar-width);

    h3,
    .button .text {
      opacity: 1;
    }
    .button{
      .material-icons{
        margin-right: 1rem;
      }
    }

    .menu-toggle-wrap {
      top: -3rem;
      .menu-toggle {
        transform: rotate(-180deg);
      }
    }
  }
  @media (max-width: 768px) {
    position: fixed;
    z-index: 99;
  }
}
</style>
