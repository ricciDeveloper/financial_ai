/// <reference types="../../../../node_modules/.vue-global-types/vue_3.5_0_0_0.d.ts" />
import { ref, nextTick } from 'vue';
import axios from 'axios';
import { useQuasar } from 'quasar';
import ChatMessage from '../components/ChatMessage.vue';
const $q = useQuasar();
const inputMsg = ref('');
const loading = ref(false);
const scrollAreaRef = ref(null);
const messages = ref([
    {
        id: Date.now().toString(),
        role: 'system',
        content: 'Olá! Sou seu assistente financeiro. Me conte o que você gastou ou ganhou hoje. Ex: "Gastei 45 reais no almoço no débito" ou "Recebi 5000 de salário".',
        timestamp: new Date().toISOString()
    }
]);
const scrollToBottom = () => {
    nextTick(() => {
        if (scrollAreaRef.value) {
            scrollAreaRef.value.setScrollPosition('vertical', 999999, 300);
        }
    });
};
const sendMessage = async () => {
    const text = inputMsg.value.trim();
    if (!text)
        return;
    const userMsg = {
        id: Date.now().toString(),
        role: 'user',
        content: text,
        timestamp: new Date().toISOString()
    };
    messages.value.push(userMsg);
    inputMsg.value = '';
    scrollToBottom();
    loading.value = true;
    try {
        const { data } = await axios.post('/api/chat', { message: text });
        const lancamento = data.data;
        let answerText = '';
        if (lancamento.tipo === 'gasto') {
            answerText = `✅ Gasto registrado: ${lancamento.descricao} no valor de R$ ${lancamento.valor.toFixed(2)} (${lancamento.categoria}).`;
        }
        else {
            answerText = `🤑 Entrada registrada: R$ ${lancamento.valor.toFixed(2)} como ${lancamento.descricao} (${lancamento.categoria}).`;
        }
        const aiMsg = {
            id: Date.now().toString(),
            role: 'system',
            content: answerText,
            timestamp: new Date().toISOString()
        };
        messages.value.push(aiMsg);
    }
    catch (error) {
        if (error.response?.data?.error) {
            console.error(error.response.data.error);
        }
        $q.notify({
            type: 'negative',
            message: 'Falha ao processar a mensagem. Tente novamente.',
            position: 'top',
            actions: [{ icon: 'close', color: 'white' }]
        });
        messages.value.push({
            id: Date.now().toString(),
            role: 'system',
            content: 'Desculpe, tive um problema ao tentar entender ou salvar sua informação. Tem certeza que ela foi clara?',
            timestamp: new Date().toISOString()
        });
    }
    finally {
        loading.value = false;
        scrollToBottom();
    }
};
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['modern-input']} */ ;
/** @type {__VLS_StyleScopedClasses['q-field__control']} */ ;
/** @type {__VLS_StyleScopedClasses['modern-input']} */ ;
/** @type {__VLS_StyleScopedClasses['q-field__control']} */ ;
/** @type {__VLS_StyleScopedClasses['hover-scale']} */ ;
// CSS variable injection 
// CSS variable injection end 
const __VLS_0 = {}.QPage;
/** @type {[typeof __VLS_components.QPage, typeof __VLS_components.qPage, typeof __VLS_components.QPage, typeof __VLS_components.qPage, ]} */ ;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    ...{ class: "column no-wrap" },
    ...{ style: {} },
}));
const __VLS_2 = __VLS_1({
    ...{ class: "column no-wrap" },
    ...{ style: {} },
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_4 = {};
__VLS_3.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "col chat-container items-center justify-center column q-pa-md overflow-hidden relative-position" },
    ...{ class: (__VLS_ctx.$q.dark.isActive ? 'bg-dark' : 'bg-grey-1') },
});
const __VLS_5 = {}.QScrollArea;
/** @type {[typeof __VLS_components.QScrollArea, typeof __VLS_components.qScrollArea, typeof __VLS_components.QScrollArea, typeof __VLS_components.qScrollArea, ]} */ ;
// @ts-ignore
const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({
    ...{ class: "full-width full-height scroll-area" },
    ref: "scrollAreaRef",
}));
const __VLS_7 = __VLS_6({
    ...{ class: "full-width full-height scroll-area" },
    ref: "scrollAreaRef",
}, ...__VLS_functionalComponentArgsRest(__VLS_6));
/** @type {typeof __VLS_ctx.scrollAreaRef} */ ;
var __VLS_9 = {};
__VLS_8.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "q-py-md" },
});
for (const [msg] of __VLS_getVForSourceType((__VLS_ctx.messages))) {
    /** @type {[typeof ChatMessage, ]} */ ;
    // @ts-ignore
    const __VLS_11 = __VLS_asFunctionalComponent(ChatMessage, new ChatMessage({
        key: (msg.id),
        name: (msg.role === 'user' ? 'Você' : 'Assistente AI'),
        text: (msg.content),
        sent: (msg.role === 'user'),
        timestamp: (msg.timestamp),
    }));
    const __VLS_12 = __VLS_11({
        key: (msg.id),
        name: (msg.role === 'user' ? 'Você' : 'Assistente AI'),
        text: (msg.content),
        sent: (msg.role === 'user'),
        timestamp: (msg.timestamp),
    }, ...__VLS_functionalComponentArgsRest(__VLS_11));
}
if (__VLS_ctx.loading) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "q-pa-md flex justify-center" },
    });
    const __VLS_14 = {}.QSpinnerDots;
    /** @type {[typeof __VLS_components.QSpinnerDots, typeof __VLS_components.qSpinnerDots, ]} */ ;
    // @ts-ignore
    const __VLS_15 = __VLS_asFunctionalComponent(__VLS_14, new __VLS_14({
        color: "primary",
        size: "2em",
    }));
    const __VLS_16 = __VLS_15({
        color: "primary",
        size: "2em",
    }, ...__VLS_functionalComponentArgsRest(__VLS_15));
}
var __VLS_8;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "q-pa-md border-top" },
    ...{ class: (__VLS_ctx.$q.dark.isActive ? 'bg-dark-page border-dark' : 'bg-white border-light') },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ style: {} },
});
const __VLS_18 = {}.QInput;
/** @type {[typeof __VLS_components.QInput, typeof __VLS_components.qInput, typeof __VLS_components.QInput, typeof __VLS_components.qInput, ]} */ ;
// @ts-ignore
const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({
    ...{ 'onKeyup': {} },
    modelValue: (__VLS_ctx.inputMsg),
    rounded: true,
    outlined: true,
    placeholder: "Descreva seu gasto ou entrada...",
    disable: (__VLS_ctx.loading),
    ...{ class: "modern-input" },
    bgColor: (__VLS_ctx.$q.dark.isActive ? 'grey-10' : 'grey-2'),
}));
const __VLS_20 = __VLS_19({
    ...{ 'onKeyup': {} },
    modelValue: (__VLS_ctx.inputMsg),
    rounded: true,
    outlined: true,
    placeholder: "Descreva seu gasto ou entrada...",
    disable: (__VLS_ctx.loading),
    ...{ class: "modern-input" },
    bgColor: (__VLS_ctx.$q.dark.isActive ? 'grey-10' : 'grey-2'),
}, ...__VLS_functionalComponentArgsRest(__VLS_19));
let __VLS_22;
let __VLS_23;
let __VLS_24;
const __VLS_25 = {
    onKeyup: (__VLS_ctx.sendMessage)
};
__VLS_21.slots.default;
{
    const { append: __VLS_thisSlot } = __VLS_21.slots;
    const __VLS_26 = {}.QBtn;
    /** @type {[typeof __VLS_components.QBtn, typeof __VLS_components.qBtn, ]} */ ;
    // @ts-ignore
    const __VLS_27 = __VLS_asFunctionalComponent(__VLS_26, new __VLS_26({
        ...{ 'onClick': {} },
        round: true,
        dense: true,
        flat: true,
        icon: "send",
        color: "primary",
        disable: (__VLS_ctx.loading || !__VLS_ctx.inputMsg.trim()),
        ...{ class: "transition-transform hover-scale" },
    }));
    const __VLS_28 = __VLS_27({
        ...{ 'onClick': {} },
        round: true,
        dense: true,
        flat: true,
        icon: "send",
        color: "primary",
        disable: (__VLS_ctx.loading || !__VLS_ctx.inputMsg.trim()),
        ...{ class: "transition-transform hover-scale" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_27));
    let __VLS_30;
    let __VLS_31;
    let __VLS_32;
    const __VLS_33 = {
        onClick: (__VLS_ctx.sendMessage)
    };
    var __VLS_29;
}
var __VLS_21;
var __VLS_3;
/** @type {__VLS_StyleScopedClasses['column']} */ ;
/** @type {__VLS_StyleScopedClasses['no-wrap']} */ ;
/** @type {__VLS_StyleScopedClasses['col']} */ ;
/** @type {__VLS_StyleScopedClasses['chat-container']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['column']} */ ;
/** @type {__VLS_StyleScopedClasses['q-pa-md']} */ ;
/** @type {__VLS_StyleScopedClasses['overflow-hidden']} */ ;
/** @type {__VLS_StyleScopedClasses['relative-position']} */ ;
/** @type {__VLS_StyleScopedClasses['full-width']} */ ;
/** @type {__VLS_StyleScopedClasses['full-height']} */ ;
/** @type {__VLS_StyleScopedClasses['scroll-area']} */ ;
/** @type {__VLS_StyleScopedClasses['q-py-md']} */ ;
/** @type {__VLS_StyleScopedClasses['q-pa-md']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['q-pa-md']} */ ;
/** @type {__VLS_StyleScopedClasses['border-top']} */ ;
/** @type {__VLS_StyleScopedClasses['modern-input']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-transform']} */ ;
/** @type {__VLS_StyleScopedClasses['hover-scale']} */ ;
// @ts-ignore
var __VLS_10 = __VLS_9;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            ChatMessage: ChatMessage,
            $q: $q,
            inputMsg: inputMsg,
            loading: loading,
            scrollAreaRef: scrollAreaRef,
            messages: messages,
            sendMessage: sendMessage,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=Chat.vue.js.map