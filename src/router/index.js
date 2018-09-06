import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Minor from '@/components/minor/minor'
import Fotografie from '@/components/minor/Fotografie'
import Film from '@/components/minor/Film'
import Dummy from '@/components/minor/Dummy'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/minor', component: Minor,
            children: [
                {
                    path: 'fotografie',
                    name: 'Fotografie ',
                    component: Fotografie
                },
                {
                    path: 'film',
                    name: 'Film',
                    component: Film
                },
                {
                    path: 'dummy',
                    name: 'Dummy',
                    component: Dummy
                },
            ]
        }
        // {
        //     path: '/minor/', component: minor,
        //     children: [
        //         {
        //             path: 'fotografie',
        //             name: 'Fotografie ',
        //             component: Fotografie
        //         }]
        // }
    ]
})
