

export default {
    name: 'daybook',
    component: () => import(/* webpackChunkName: "daybook" */ '@/modules/daybook/layouts/DayBookLayout.vue' ),
    children: [
        {
            path: '',
            name:'no-entry',
            component: () => import(/* webpackChunkName: "daybook-entry-no" */ '@/modules/daybook/view/NoEntrySelected.vue' )

        },

        {
            path: ':id',
            name:'entry',
            component: () => import(/* webpackChunkName: "EntryView" */ '@/modules/daybook/view/EntryView.vue' )

        }
    ]
}