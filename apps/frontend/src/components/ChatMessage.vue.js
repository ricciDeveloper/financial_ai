/// <reference types="../../../../node_modules/.vue-global-types/vue_3.5_0_0_0.d.ts" />
import { computed } from 'vue';
import { useQuasar } from 'quasar';
const $q = useQuasar();
const props = defineProps();
const formattedTime = computed(() => {
    if (!props.timestamp)
        return '';
    const date = new Date(props.timestamp);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "q-pa-sm row justify-center" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ style: {} },
});
const __VLS_0 = {}.QChatMessage;
/** @type {[typeof __VLS_components.QChatMessage, typeof __VLS_components.qChatMessage, typeof __VLS_components.QChatMessage, typeof __VLS_components.qChatMessage, ]} */ ;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    name: (__VLS_ctx.name),
    text: ([__VLS_ctx.text]),
    sent: (__VLS_ctx.sent),
    bgColor: (__VLS_ctx.sent ? 'primary' : (__VLS_ctx.$q.dark.isActive ? 'grey-9' : 'white')),
    textColor: (__VLS_ctx.sent ? 'white' : (__VLS_ctx.$q.dark.isActive ? 'white' : 'dark')),
    ...{ class: "modern-chat-bubble" },
}));
const __VLS_2 = __VLS_1({
    name: (__VLS_ctx.name),
    text: ([__VLS_ctx.text]),
    sent: (__VLS_ctx.sent),
    bgColor: (__VLS_ctx.sent ? 'primary' : (__VLS_ctx.$q.dark.isActive ? 'grey-9' : 'white')),
    textColor: (__VLS_ctx.sent ? 'white' : (__VLS_ctx.$q.dark.isActive ? 'white' : 'dark')),
    ...{ class: "modern-chat-bubble" },
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
__VLS_3.slots.default;
{
    const { stamp: __VLS_thisSlot } = __VLS_3.slots;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: "text-caption q-mt-xs block" },
        ...{ class: (__VLS_ctx.sent ? 'text-blue-2' : 'text-grey-5') },
    });
    (__VLS_ctx.formattedTime);
}
var __VLS_3;
/** @type {__VLS_StyleScopedClasses['q-pa-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['modern-chat-bubble']} */ ;
/** @type {__VLS_StyleScopedClasses['text-caption']} */ ;
/** @type {__VLS_StyleScopedClasses['q-mt-xs']} */ ;
/** @type {__VLS_StyleScopedClasses['block']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            $q: $q,
            formattedTime: formattedTime,
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
//# sourceMappingURL=ChatMessage.vue.js.map