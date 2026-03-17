/// <reference types="../../../../node_modules/.vue-global-types/vue_3.5_0_0_0.d.ts" />
import { ref, computed, onMounted } from 'vue';
import axios from 'axios';
import { useQuasar } from 'quasar';
import LancamentoCard from '../components/LancamentoCard.vue';
const $q = useQuasar();
const lancamentos = ref([]);
const loading = ref(true);
const error = ref('');
const filtroAtivo = ref('todos');
const lancamentosFiltrados = computed(() => {
    if (filtroAtivo.value === 'todos')
        return lancamentos.value;
    return lancamentos.value.filter(l => l.tipo === filtroAtivo.value);
});
onMounted(async () => {
    try {
        const response = await axios.get('/api/lancamentos');
        lancamentos.value = response.data.data;
    }
    catch (e) {
        error.value = 'Erro ao carregar os lançamentos';
        console.error(e);
    }
    finally {
        loading.value = false;
    }
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
const __VLS_0 = {}.QPage;
/** @type {[typeof __VLS_components.QPage, typeof __VLS_components.qPage, typeof __VLS_components.QPage, typeof __VLS_components.qPage, ]} */ ;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    ...{ class: "q-pa-lg" },
    ...{ class: (__VLS_ctx.$q.dark.isActive ? 'bg-dark' : 'bg-grey-1') },
}));
const __VLS_2 = __VLS_1({
    ...{ class: "q-pa-lg" },
    ...{ class: (__VLS_ctx.$q.dark.isActive ? 'bg-dark' : 'bg-grey-1') },
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_4 = {};
__VLS_3.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ style: {} },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "row items-center justify-between q-mb-xl" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({
    ...{ class: "text-h4 text-weight-bold q-ma-none" },
    ...{ class: (__VLS_ctx.$q.dark.isActive ? 'text-white' : 'text-dark') },
});
const __VLS_5 = {}.QBtnToggle;
/** @type {[typeof __VLS_components.QBtnToggle, typeof __VLS_components.qBtnToggle, ]} */ ;
// @ts-ignore
const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({
    modelValue: (__VLS_ctx.filtroAtivo),
    rounded: true,
    unelevated: true,
    toggleColor: "primary",
    color: "grey-3",
    textColor: "grey-8",
    ...{ class: (__VLS_ctx.$q.dark.isActive ? 'bg-grey-9 text-grey-4' : '') },
    options: ([
        { label: 'Todos', value: 'todos' },
        { label: 'Entradas', value: 'entrada' },
        { label: 'Gastos', value: 'gasto' }
    ]),
    ...{ class: "shadow-1" },
}));
const __VLS_7 = __VLS_6({
    modelValue: (__VLS_ctx.filtroAtivo),
    rounded: true,
    unelevated: true,
    toggleColor: "primary",
    color: "grey-3",
    textColor: "grey-8",
    ...{ class: (__VLS_ctx.$q.dark.isActive ? 'bg-grey-9 text-grey-4' : '') },
    options: ([
        { label: 'Todos', value: 'todos' },
        { label: 'Entradas', value: 'entrada' },
        { label: 'Gastos', value: 'gasto' }
    ]),
    ...{ class: "shadow-1" },
}, ...__VLS_functionalComponentArgsRest(__VLS_6));
if (__VLS_ctx.loading) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "flex flex-center q-mt-xl" },
    });
    const __VLS_9 = {}.QSpinnerTail;
    /** @type {[typeof __VLS_components.QSpinnerTail, typeof __VLS_components.qSpinnerTail, ]} */ ;
    // @ts-ignore
    const __VLS_10 = __VLS_asFunctionalComponent(__VLS_9, new __VLS_9({
        color: "primary",
        size: "3em",
    }));
    const __VLS_11 = __VLS_10({
        color: "primary",
        size: "3em",
    }, ...__VLS_functionalComponentArgsRest(__VLS_10));
}
else if (__VLS_ctx.error) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "q-mt-xl" },
    });
    const __VLS_13 = {}.QBanner;
    /** @type {[typeof __VLS_components.QBanner, typeof __VLS_components.qBanner, typeof __VLS_components.QBanner, typeof __VLS_components.qBanner, ]} */ ;
    // @ts-ignore
    const __VLS_14 = __VLS_asFunctionalComponent(__VLS_13, new __VLS_13({
        ...{ class: (__VLS_ctx.$q.dark.isActive ? 'bg-red-9' : 'bg-red-1') },
        ...{ class: "text-negative rounded-borders shadow-1" },
    }));
    const __VLS_15 = __VLS_14({
        ...{ class: (__VLS_ctx.$q.dark.isActive ? 'bg-red-9' : 'bg-red-1') },
        ...{ class: "text-negative rounded-borders shadow-1" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_14));
    __VLS_16.slots.default;
    {
        const { avatar: __VLS_thisSlot } = __VLS_16.slots;
        const __VLS_17 = {}.QIcon;
        /** @type {[typeof __VLS_components.QIcon, typeof __VLS_components.qIcon, ]} */ ;
        // @ts-ignore
        const __VLS_18 = __VLS_asFunctionalComponent(__VLS_17, new __VLS_17({
            name: "error_outline",
            color: "negative",
        }));
        const __VLS_19 = __VLS_18({
            name: "error_outline",
            color: "negative",
        }, ...__VLS_functionalComponentArgsRest(__VLS_18));
    }
    (__VLS_ctx.error);
    var __VLS_16;
}
else {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "column" },
    });
    const __VLS_21 = {}.TransitionGroup;
    /** @type {[typeof __VLS_components.TransitionGroup, typeof __VLS_components.transitionGroup, typeof __VLS_components.TransitionGroup, typeof __VLS_components.transitionGroup, ]} */ ;
    // @ts-ignore
    const __VLS_22 = __VLS_asFunctionalComponent(__VLS_21, new __VLS_21({
        name: "list",
        tag: "div",
    }));
    const __VLS_23 = __VLS_22({
        name: "list",
        tag: "div",
    }, ...__VLS_functionalComponentArgsRest(__VLS_22));
    __VLS_24.slots.default;
    for (const [l] of __VLS_getVForSourceType((__VLS_ctx.lancamentosFiltrados))) {
        /** @type {[typeof LancamentoCard, ]} */ ;
        // @ts-ignore
        const __VLS_25 = __VLS_asFunctionalComponent(LancamentoCard, new LancamentoCard({
            key: (l.id),
            lancamento: (l),
        }));
        const __VLS_26 = __VLS_25({
            key: (l.id),
            lancamento: (l),
        }, ...__VLS_functionalComponentArgsRest(__VLS_25));
    }
    var __VLS_24;
    if (!__VLS_ctx.lancamentosFiltrados.length) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: "text-center q-mt-xl" },
        });
        const __VLS_28 = {}.QIcon;
        /** @type {[typeof __VLS_components.QIcon, typeof __VLS_components.qIcon, ]} */ ;
        // @ts-ignore
        const __VLS_29 = __VLS_asFunctionalComponent(__VLS_28, new __VLS_28({
            name: "inbox",
            size: "4em",
            color: "grey-4",
        }));
        const __VLS_30 = __VLS_29({
            name: "inbox",
            size: "4em",
            color: "grey-4",
        }, ...__VLS_functionalComponentArgsRest(__VLS_29));
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: "text-h6 text-grey-5 q-mt-sm" },
        });
    }
}
var __VLS_3;
/** @type {__VLS_StyleScopedClasses['q-pa-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-between']} */ ;
/** @type {__VLS_StyleScopedClasses['q-mb-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['text-h4']} */ ;
/** @type {__VLS_StyleScopedClasses['text-weight-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['q-ma-none']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow-1']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-center']} */ ;
/** @type {__VLS_StyleScopedClasses['q-mt-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['q-mt-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['text-negative']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-borders']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow-1']} */ ;
/** @type {__VLS_StyleScopedClasses['column']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['q-mt-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['text-h6']} */ ;
/** @type {__VLS_StyleScopedClasses['text-grey-5']} */ ;
/** @type {__VLS_StyleScopedClasses['q-mt-sm']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            LancamentoCard: LancamentoCard,
            $q: $q,
            loading: loading,
            error: error,
            filtroAtivo: filtroAtivo,
            lancamentosFiltrados: lancamentosFiltrados,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=Lancamentos.vue.js.map