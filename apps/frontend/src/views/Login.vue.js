/// <reference types="../../../../node_modules/.vue-global-types/vue_3.5_0_0_0.d.ts" />
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useQuasar } from 'quasar';
import { supabase } from '../services/supabase';
const email = ref('');
const password = ref('');
const loading = ref(false);
const router = useRouter();
const $q = useQuasar();
const handleLogin = async () => {
    loading.value = true;
    try {
        const { error } = await supabase.auth.signInWithPassword({
            email: email.value,
            password: password.value,
        });
        if (error)
            throw error;
        $q.notify({ type: 'positive', message: 'Login realizado com sucesso!' });
        router.push('/dashboard');
    }
    catch (error) {
        let msg = error.message;
        if (msg === 'Invalid login credentials')
            msg = 'Credenciais inválidas';
        $q.notify({ type: 'negative', message: msg });
    }
    finally {
        loading.value = false;
    }
};
const handleSignup = async () => {
    loading.value = true;
    try {
        const { error } = await supabase.auth.signUp({
            email: email.value,
            password: password.value,
        });
        if (error)
            throw error;
        $q.notify({ type: 'positive', message: 'Conta criada! Verifique seu email ou tente logar.' });
    }
    catch (error) {
        $q.notify({ type: 'negative', message: error.message });
    }
    finally {
        loading.value = false;
    }
};
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "login-container q-pa-md flex flex-center" },
});
const __VLS_0 = {}.QCard;
/** @type {[typeof __VLS_components.QCard, typeof __VLS_components.qCard, typeof __VLS_components.QCard, typeof __VLS_components.qCard, ]} */ ;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    ...{ class: "login-card" },
    bordered: true,
}));
const __VLS_2 = __VLS_1({
    ...{ class: "login-card" },
    bordered: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
__VLS_3.slots.default;
const __VLS_4 = {}.QCardSection;
/** @type {[typeof __VLS_components.QCardSection, typeof __VLS_components.qCardSection, typeof __VLS_components.QCardSection, typeof __VLS_components.qCardSection, ]} */ ;
// @ts-ignore
const __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4({
    ...{ class: "bg-primary text-white" },
}));
const __VLS_6 = __VLS_5({
    ...{ class: "bg-primary text-white" },
}, ...__VLS_functionalComponentArgsRest(__VLS_5));
__VLS_7.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "text-h6" },
});
var __VLS_7;
const __VLS_8 = {}.QCardSection;
/** @type {[typeof __VLS_components.QCardSection, typeof __VLS_components.qCardSection, typeof __VLS_components.QCardSection, typeof __VLS_components.qCardSection, ]} */ ;
// @ts-ignore
const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({}));
const __VLS_10 = __VLS_9({}, ...__VLS_functionalComponentArgsRest(__VLS_9));
__VLS_11.slots.default;
const __VLS_12 = {}.QForm;
/** @type {[typeof __VLS_components.QForm, typeof __VLS_components.qForm, typeof __VLS_components.QForm, typeof __VLS_components.qForm, ]} */ ;
// @ts-ignore
const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({
    ...{ 'onSubmit': {} },
    ...{ class: "q-gutter-md" },
}));
const __VLS_14 = __VLS_13({
    ...{ 'onSubmit': {} },
    ...{ class: "q-gutter-md" },
}, ...__VLS_functionalComponentArgsRest(__VLS_13));
let __VLS_16;
let __VLS_17;
let __VLS_18;
const __VLS_19 = {
    onSubmit: (__VLS_ctx.handleLogin)
};
__VLS_15.slots.default;
const __VLS_20 = {}.QInput;
/** @type {[typeof __VLS_components.QInput, typeof __VLS_components.qInput, ]} */ ;
// @ts-ignore
const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({
    filled: true,
    modelValue: (__VLS_ctx.email),
    label: "Email",
    type: "email",
    lazyRules: true,
    rules: ([val => val && val.length > 0 || 'Por favor digite seu email']),
}));
const __VLS_22 = __VLS_21({
    filled: true,
    modelValue: (__VLS_ctx.email),
    label: "Email",
    type: "email",
    lazyRules: true,
    rules: ([val => val && val.length > 0 || 'Por favor digite seu email']),
}, ...__VLS_functionalComponentArgsRest(__VLS_21));
const __VLS_24 = {}.QInput;
/** @type {[typeof __VLS_components.QInput, typeof __VLS_components.qInput, ]} */ ;
// @ts-ignore
const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({
    filled: true,
    modelValue: (__VLS_ctx.password),
    label: "Senha",
    type: "password",
    lazyRules: true,
    rules: ([val => val && val.length > 0 || 'Por favor digite sua senha']),
}));
const __VLS_26 = __VLS_25({
    filled: true,
    modelValue: (__VLS_ctx.password),
    label: "Senha",
    type: "password",
    lazyRules: true,
    rules: ([val => val && val.length > 0 || 'Por favor digite sua senha']),
}, ...__VLS_functionalComponentArgsRest(__VLS_25));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "row justify-between items-center q-mt-md" },
});
const __VLS_28 = {}.QBtn;
/** @type {[typeof __VLS_components.QBtn, typeof __VLS_components.qBtn, ]} */ ;
// @ts-ignore
const __VLS_29 = __VLS_asFunctionalComponent(__VLS_28, new __VLS_28({
    ...{ 'onClick': {} },
    flat: true,
    color: "primary",
    label: "Criar Conta",
}));
const __VLS_30 = __VLS_29({
    ...{ 'onClick': {} },
    flat: true,
    color: "primary",
    label: "Criar Conta",
}, ...__VLS_functionalComponentArgsRest(__VLS_29));
let __VLS_32;
let __VLS_33;
let __VLS_34;
const __VLS_35 = {
    onClick: (__VLS_ctx.handleSignup)
};
var __VLS_31;
const __VLS_36 = {}.QBtn;
/** @type {[typeof __VLS_components.QBtn, typeof __VLS_components.qBtn, ]} */ ;
// @ts-ignore
const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({
    unelevated: true,
    color: "primary",
    type: "submit",
    label: "Entrar",
    loading: (__VLS_ctx.loading),
}));
const __VLS_38 = __VLS_37({
    unelevated: true,
    color: "primary",
    type: "submit",
    label: "Entrar",
    loading: (__VLS_ctx.loading),
}, ...__VLS_functionalComponentArgsRest(__VLS_37));
var __VLS_15;
var __VLS_11;
var __VLS_3;
/** @type {__VLS_StyleScopedClasses['login-container']} */ ;
/** @type {__VLS_StyleScopedClasses['q-pa-md']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-center']} */ ;
/** @type {__VLS_StyleScopedClasses['login-card']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['text-h6']} */ ;
/** @type {__VLS_StyleScopedClasses['q-gutter-md']} */ ;
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-between']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['q-mt-md']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            email: email,
            password: password,
            loading: loading,
            handleLogin: handleLogin,
            handleSignup: handleSignup,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=Login.vue.js.map