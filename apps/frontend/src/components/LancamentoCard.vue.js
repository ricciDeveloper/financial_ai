/// <reference types="../../../../node_modules/.vue-global-types/vue_3.5_0_0_0.d.ts" />
import { computed } from 'vue';
import { useQuasar } from 'quasar';
const $q = useQuasar();
const props = defineProps();
const isGasto = computed(() => props.lancamento.tipo === 'gasto');
const formattedDate = computed(() => {
    return new Date(props.lancamento.data).toLocaleDateString([], { day: '2-digit', month: 'short' });
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['modern-lancamento-card']} */ ;
/** @type {__VLS_StyleScopedClasses['modern-lancamento-card']} */ ;
/** @type {__VLS_StyleScopedClasses['body--dark']} */ ;
/** @type {__VLS_StyleScopedClasses['modern-lancamento-card']} */ ;
/** @type {__VLS_StyleScopedClasses['body--dark']} */ ;
/** @type {__VLS_StyleScopedClasses['card-avatar']} */ ;
/** @type {__VLS_StyleScopedClasses['body--dark']} */ ;
/** @type {__VLS_StyleScopedClasses['card-avatar']} */ ;
// CSS variable injection 
// CSS variable injection end 
const __VLS_0 = {}.QCard;
/** @type {[typeof __VLS_components.QCard, typeof __VLS_components.qCard, typeof __VLS_components.QCard, typeof __VLS_components.qCard, ]} */ ;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    ...{ class: "modern-lancamento-card" },
    ...{ class: ([__VLS_ctx.$q.dark.isActive ? 'bg-grey-10' : 'bg-white', 'q-mb-sm']) },
}));
const __VLS_2 = __VLS_1({
    ...{ class: "modern-lancamento-card" },
    ...{ class: ([__VLS_ctx.$q.dark.isActive ? 'bg-grey-10' : 'bg-white', 'q-mb-sm']) },
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_4 = {};
__VLS_3.slots.default;
const __VLS_5 = {}.QCardSection;
/** @type {[typeof __VLS_components.QCardSection, typeof __VLS_components.qCardSection, typeof __VLS_components.QCardSection, typeof __VLS_components.qCardSection, ]} */ ;
// @ts-ignore
const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({
    ...{ class: "q-py-md q-px-lg" },
}));
const __VLS_7 = __VLS_6({
    ...{ class: "q-py-md q-px-lg" },
}, ...__VLS_functionalComponentArgsRest(__VLS_6));
__VLS_8.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "row items-center no-wrap" },
});
const __VLS_9 = {}.QAvatar;
/** @type {[typeof __VLS_components.QAvatar, typeof __VLS_components.qAvatar, typeof __VLS_components.QAvatar, typeof __VLS_components.qAvatar, ]} */ ;
// @ts-ignore
const __VLS_10 = __VLS_asFunctionalComponent(__VLS_9, new __VLS_9({
    color: (__VLS_ctx.isGasto ? 'red-1' : 'green-1'),
    textColor: (__VLS_ctx.isGasto ? 'negative' : 'positive'),
    size: "46px",
    ...{ class: "q-mr-md card-avatar" },
}));
const __VLS_11 = __VLS_10({
    color: (__VLS_ctx.isGasto ? 'red-1' : 'green-1'),
    textColor: (__VLS_ctx.isGasto ? 'negative' : 'positive'),
    size: "46px",
    ...{ class: "q-mr-md card-avatar" },
}, ...__VLS_functionalComponentArgsRest(__VLS_10));
__VLS_12.slots.default;
const __VLS_13 = {}.QIcon;
/** @type {[typeof __VLS_components.QIcon, typeof __VLS_components.qIcon, ]} */ ;
// @ts-ignore
const __VLS_14 = __VLS_asFunctionalComponent(__VLS_13, new __VLS_13({
    name: (__VLS_ctx.isGasto ? 'south_west' : 'north_east'),
    size: "22px",
}));
const __VLS_15 = __VLS_14({
    name: (__VLS_ctx.isGasto ? 'south_west' : 'north_east'),
    size: "22px",
}, ...__VLS_functionalComponentArgsRest(__VLS_14));
var __VLS_12;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "col" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "text-subtitle1 text-weight-bold" },
    ...{ class: (__VLS_ctx.$q.dark.isActive ? 'text-white' : 'text-dark') },
    ...{ style: {} },
});
(__VLS_ctx.lancamento.descricao);
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "text-caption q-mt-xs" },
    ...{ class: (__VLS_ctx.$q.dark.isActive ? 'text-grey-5' : 'text-grey-7') },
});
(__VLS_ctx.formattedDate);
(__VLS_ctx.lancamento.categoria || 'Não informada');
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "col-auto text-right" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "text-subtitle1 text-weight-bold" },
    ...{ class: (__VLS_ctx.isGasto ? 'text-negative' : 'text-positive') },
});
(__VLS_ctx.isGasto ? '- ' : '+ ');
(__VLS_ctx.lancamento.valor.toFixed(2));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "text-caption text-uppercase q-mt-xs" },
    ...{ class: (__VLS_ctx.$q.dark.isActive ? 'text-grey-6' : 'text-grey-5') },
    ...{ style: {} },
});
if (__VLS_ctx.lancamento.formaPagamento) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    (__VLS_ctx.lancamento.formaPagamento.replace('_', ' '));
}
else if (__VLS_ctx.lancamento.origemEntrada) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    (__VLS_ctx.lancamento.origemEntrada.replace('_', ' '));
}
else {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
}
var __VLS_8;
var __VLS_3;
/** @type {__VLS_StyleScopedClasses['modern-lancamento-card']} */ ;
/** @type {__VLS_StyleScopedClasses['q-py-md']} */ ;
/** @type {__VLS_StyleScopedClasses['q-px-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['no-wrap']} */ ;
/** @type {__VLS_StyleScopedClasses['q-mr-md']} */ ;
/** @type {__VLS_StyleScopedClasses['card-avatar']} */ ;
/** @type {__VLS_StyleScopedClasses['col']} */ ;
/** @type {__VLS_StyleScopedClasses['text-subtitle1']} */ ;
/** @type {__VLS_StyleScopedClasses['text-weight-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-caption']} */ ;
/** @type {__VLS_StyleScopedClasses['q-mt-xs']} */ ;
/** @type {__VLS_StyleScopedClasses['col-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['text-right']} */ ;
/** @type {__VLS_StyleScopedClasses['text-subtitle1']} */ ;
/** @type {__VLS_StyleScopedClasses['text-weight-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-caption']} */ ;
/** @type {__VLS_StyleScopedClasses['text-uppercase']} */ ;
/** @type {__VLS_StyleScopedClasses['q-mt-xs']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            $q: $q,
            isGasto: isGasto,
            formattedDate: formattedDate,
        };
    },
    __typeProps: {},
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeProps: {},
});
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=LancamentoCard.vue.js.map