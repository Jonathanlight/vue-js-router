import Vue from 'vue';
import VueRouter from 'vue-router';
import Comp1 from './views/Comp1'
import Comp2 from './views/Comp2'
import Comp3 from './views/Comp3'
import CompA from './views/CompA'

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: Comp1,
      /*components: {
        left: Comp1,
        right: Comp3
      }*/
    },
    {
      path: '/pageb',
      name: 'pageb',
      component: () => import( /* webpackChunkName: "view-compB" */ './views/CompB') //Le lazy loading
    },
    {
      path: '/a',
      component: CompA,
      meta: {
        auth: true
      },
      children: [
        { path: '', component: Comp3 },
      ]
    },
    {
      path: '/user/:id',
      name: 'user',
      component: Comp2,
      beforeEnter: (to, from, next) => {
        console.log({
          type: 'beforeEnter : ',
          to,
          from
        })
        next();
      },
      //props: true,
    },
    /*{
      path: '/a',
      name: 'route_a',
      alias: '/b'
      //redirect: '/b'
    },
    {
      path: '/b',
      name: 'route_b',
      component: Comp3
    },*/
    {
      path: '**',
      name: 'page error',
      component: Comp3
    }
  ],
  scrollBehavior(to, from, savePosition) {
    console.log(to, from, savePosition)
    return {
      x: 0,
      y: 0
    }
  }
});

//Pas de redirection dans le beforeEach pour eviter une boucle
// infinit
router.beforeEach((to, from, next) => {
  console.log({
    type: 'beforeEach : ',
    to,
    from
  })
  next();
})

router.beforeResolve((to, from, next) => {
  console.log({
    type: 'beforeResolve : ',
    to,
    from
  })
  next();
})

router.afterEach((to, from) => {
  console.log({
    type: 'afterEach : ',
    to,
    from
  })
})

export default router;
