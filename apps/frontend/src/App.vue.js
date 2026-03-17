/// <reference types="../../../node_modules/.vue-global-types/vue_3.5_0_0_0.d.ts" />
import { ref, watch, onMounted } from 'vue';
import { useQuasar } from 'quasar';
const $q = useQuasar();
const leftDrawerOpen = ref(false);
function toggleLeftDrawer() {
    leftDrawerOpen.value = !leftDrawerOpen.value;
}
// Persist dark mode state based on quasar settings if needed
onMounted(() => {
    const savedDark = localStorage.getItem('darkMode');
    if (savedDark !== null) {
        $q.dark.set(savedDark === 'true');
    }
    else {
        $q.dark.set('auto');
    }
});
watch(() => $q.dark.isActive, (val) => {
    localStorage.setItem('darkMode', String(val));
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
const __VLS_0 = {}.QLayout;
/** @type {[typeof __VLS_components.QLayout, typeof __VLS_components.qLayout, typeof __VLS_components.QLayout, typeof __VLS_components.qLayout, ]} */ ;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    view: "lHh Lpr lFf",
}));
const __VLS_2 = __VLS_1({
    view: "lHh Lpr lFf",
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_4 = {};
__VLS_3.slots.default;
const __VLS_5 = {}.QHeader;
/** @type {[typeof __VLS_components.QHeader, typeof __VLS_components.qHeader, typeof __VLS_components.QHeader, typeof __VLS_components.qHeader, ]} */ ;
// @ts-ignore
const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({
    ...{ class: (['modern-header', __VLS_ctx.$q.dark.isActive ? 'bg-dark' : 'bg-white text-dark']) },
    elevated: true,
}));
const __VLS_7 = __VLS_6({
    ...{ class: (['modern-header', __VLS_ctx.$q.dark.isActive ? 'bg-dark' : 'bg-white text-dark']) },
    elevated: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_6));
__VLS_8.slots.default;
const __VLS_9 = {}.QToolbar;
/** @type {[typeof __VLS_components.QToolbar, typeof __VLS_components.qToolbar, typeof __VLS_components.QToolbar, typeof __VLS_components.qToolbar, ]} */ ;
// @ts-ignore
const __VLS_10 = __VLS_asFunctionalComponent(__VLS_9, new __VLS_9({
    ...{ class: "q-px-lg q-py-sm" },
}));
const __VLS_11 = __VLS_10({
    ...{ class: "q-px-lg q-py-sm" },
}, ...__VLS_functionalComponentArgsRest(__VLS_10));
__VLS_12.slots.default;
const __VLS_13 = {}.QBtn;
/** @type {[typeof __VLS_components.QBtn, typeof __VLS_components.qBtn, ]} */ ;
// @ts-ignore
const __VLS_14 = __VLS_asFunctionalComponent(__VLS_13, new __VLS_13({
    ...{ 'onClick': {} },
    flat: true,
    round: true,
    dense: true,
    icon: "menu",
    ...{ class: "q-mr-sm" },
}));
const __VLS_15 = __VLS_14({
    ...{ 'onClick': {} },
    flat: true,
    round: true,
    dense: true,
    icon: "menu",
    ...{ class: "q-mr-sm" },
}, ...__VLS_functionalComponentArgsRest(__VLS_14));
let __VLS_17;
let __VLS_18;
let __VLS_19;
const __VLS_20 = {
    onClick: (__VLS_ctx.toggleLeftDrawer)
};
var __VLS_16;
const __VLS_21 = {}.QAvatar;
/** @type {[typeof __VLS_components.QAvatar, typeof __VLS_components.qAvatar, typeof __VLS_components.QAvatar, typeof __VLS_components.qAvatar, ]} */ ;
// @ts-ignore
const __VLS_22 = __VLS_asFunctionalComponent(__VLS_21, new __VLS_21({
    size: "32px",
    ...{ class: "q-mr-sm bg-primary text-white shadow-3" },
}));
const __VLS_23 = __VLS_22({
    size: "32px",
    ...{ class: "q-mr-sm bg-primary text-white shadow-3" },
}, ...__VLS_functionalComponentArgsRest(__VLS_22));
__VLS_24.slots.default;
const __VLS_25 = {}.QIcon;
/** @type {[typeof __VLS_components.QIcon, typeof __VLS_components.qIcon, ]} */ ;
// @ts-ignore
const __VLS_26 = __VLS_asFunctionalComponent(__VLS_25, new __VLS_25({
    name: "account_balance_wallet",
}));
const __VLS_27 = __VLS_26({
    name: "account_balance_wallet",
}, ...__VLS_functionalComponentArgsRest(__VLS_26));
var __VLS_24;
const __VLS_29 = {}.QToolbarTitle;
/** @type {[typeof __VLS_components.QToolbarTitle, typeof __VLS_components.qToolbarTitle, typeof __VLS_components.QToolbarTitle, typeof __VLS_components.qToolbarTitle, ]} */ ;
// @ts-ignore
const __VLS_30 = __VLS_asFunctionalComponent(__VLS_29, new __VLS_29({
    ...{ class: "text-weight-bold text-h6" },
    ...{ style: {} },
}));
const __VLS_31 = __VLS_30({
    ...{ class: "text-weight-bold text-h6" },
    ...{ style: {} },
}, ...__VLS_functionalComponentArgsRest(__VLS_30));
__VLS_32.slots.default;
var __VLS_32;
const __VLS_33 = {}.QSpace;
/** @type {[typeof __VLS_components.QSpace, typeof __VLS_components.qSpace, ]} */ ;
// @ts-ignore
const __VLS_34 = __VLS_asFunctionalComponent(__VLS_33, new __VLS_33({}));
const __VLS_35 = __VLS_34({}, ...__VLS_functionalComponentArgsRest(__VLS_34));
const __VLS_37 = {}.QBtn;
/** @type {[typeof __VLS_components.QBtn, typeof __VLS_components.qBtn, ]} */ ;
// @ts-ignore
const __VLS_38 = __VLS_asFunctionalComponent(__VLS_37, new __VLS_37({
    ...{ 'onClick': {} },
    flat: true,
    round: true,
    icon: (__VLS_ctx.$q.dark.isActive ? 'wb_sunny' : 'nights_stay'),
    ...{ class: "hover-effect transition-transform" },
}));
const __VLS_39 = __VLS_38({
    ...{ 'onClick': {} },
    flat: true,
    round: true,
    icon: (__VLS_ctx.$q.dark.isActive ? 'wb_sunny' : 'nights_stay'),
    ...{ class: "hover-effect transition-transform" },
}, ...__VLS_functionalComponentArgsRest(__VLS_38));
let __VLS_41;
let __VLS_42;
let __VLS_43;
const __VLS_44 = {
    onClick: (...[$event]) => {
        __VLS_ctx.$q.dark.toggle();
    }
};
var __VLS_40;
var __VLS_12;
var __VLS_8;
const __VLS_45 = {}.QDrawer;
/** @type {[typeof __VLS_components.QDrawer, typeof __VLS_components.qDrawer, typeof __VLS_components.QDrawer, typeof __VLS_components.qDrawer, ]} */ ;
// @ts-ignore
const __VLS_46 = __VLS_asFunctionalComponent(__VLS_45, new __VLS_45({
    showIfAbove: true,
    modelValue: (__VLS_ctx.leftDrawerOpen),
    side: "left",
    behavior: "default",
    ...{ class: ([__VLS_ctx.$q.dark.isActive ? 'bg-dark-page border-right-dark' : 'bg-grey-1 border-right-light']) },
    width: (260),
}));
const __VLS_47 = __VLS_46({
    showIfAbove: true,
    modelValue: (__VLS_ctx.leftDrawerOpen),
    side: "left",
    behavior: "default",
    ...{ class: ([__VLS_ctx.$q.dark.isActive ? 'bg-dark-page border-right-dark' : 'bg-grey-1 border-right-light']) },
    width: (260),
}, ...__VLS_functionalComponentArgsRest(__VLS_46));
__VLS_48.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "q-pa-md text-caption text-weight-bold text-uppercase text-grey-6 q-mt-sm q-mb-xs" },
});
const __VLS_49 = {}.QList;
/** @type {[typeof __VLS_components.QList, typeof __VLS_components.qList, typeof __VLS_components.QList, typeof __VLS_components.qList, ]} */ ;
// @ts-ignore
const __VLS_50 = __VLS_asFunctionalComponent(__VLS_49, new __VLS_49({
    ...{ class: "q-px-sm" },
}));
const __VLS_51 = __VLS_50({
    ...{ class: "q-px-sm" },
}, ...__VLS_functionalComponentArgsRest(__VLS_50));
__VLS_52.slots.default;
const __VLS_53 = {}.QItem;
/** @type {[typeof __VLS_components.QItem, typeof __VLS_components.qItem, typeof __VLS_components.QItem, typeof __VLS_components.qItem, ]} */ ;
// @ts-ignore
const __VLS_54 = __VLS_asFunctionalComponent(__VLS_53, new __VLS_53({
    clickable: true,
    to: "/chat",
    exact: true,
    activeClass: "modern-active-item",
    ...{ class: "border-radius-item q-mb-sm transition-ease" },
}));
const __VLS_55 = __VLS_54({
    clickable: true,
    to: "/chat",
    exact: true,
    activeClass: "modern-active-item",
    ...{ class: "border-radius-item q-mb-sm transition-ease" },
}, ...__VLS_functionalComponentArgsRest(__VLS_54));
__VLS_asFunctionalDirective(__VLS_directives.vRipple)(null, { ...__VLS_directiveBindingRestFields, }, null, null);
__VLS_56.slots.default;
const __VLS_57 = {}.QItemSection;
/** @type {[typeof __VLS_components.QItemSection, typeof __VLS_components.qItemSection, typeof __VLS_components.QItemSection, typeof __VLS_components.qItemSection, ]} */ ;
// @ts-ignore
const __VLS_58 = __VLS_asFunctionalComponent(__VLS_57, new __VLS_57({
    avatar: true,
}));
const __VLS_59 = __VLS_58({
    avatar: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_58));
__VLS_60.slots.default;
const __VLS_61 = {}.QIcon;
/** @type {[typeof __VLS_components.QIcon, typeof __VLS_components.qIcon, ]} */ ;
// @ts-ignore
const __VLS_62 = __VLS_asFunctionalComponent(__VLS_61, new __VLS_61({
    name: "forum",
    size: "sm",
}));
const __VLS_63 = __VLS_62({
    name: "forum",
    size: "sm",
}, ...__VLS_functionalComponentArgsRest(__VLS_62));
var __VLS_60;
const __VLS_65 = {}.QItemSection;
/** @type {[typeof __VLS_components.QItemSection, typeof __VLS_components.qItemSection, typeof __VLS_components.QItemSection, typeof __VLS_components.qItemSection, ]} */ ;
// @ts-ignore
const __VLS_66 = __VLS_asFunctionalComponent(__VLS_65, new __VLS_65({
    ...{ class: "text-weight-medium" },
}));
const __VLS_67 = __VLS_66({
    ...{ class: "text-weight-medium" },
}, ...__VLS_functionalComponentArgsRest(__VLS_66));
__VLS_68.slots.default;
var __VLS_68;
var __VLS_56;
const __VLS_69 = {}.QItem;
/** @type {[typeof __VLS_components.QItem, typeof __VLS_components.qItem, typeof __VLS_components.QItem, typeof __VLS_components.qItem, ]} */ ;
// @ts-ignore
const __VLS_70 = __VLS_asFunctionalComponent(__VLS_69, new __VLS_69({
    clickable: true,
    to: "/dashboard",
    exact: true,
    activeClass: "modern-active-item",
    ...{ class: "border-radius-item q-mb-sm transition-ease" },
}));
const __VLS_71 = __VLS_70({
    clickable: true,
    to: "/dashboard",
    exact: true,
    activeClass: "modern-active-item",
    ...{ class: "border-radius-item q-mb-sm transition-ease" },
}, ...__VLS_functionalComponentArgsRest(__VLS_70));
__VLS_asFunctionalDirective(__VLS_directives.vRipple)(null, { ...__VLS_directiveBindingRestFields, }, null, null);
__VLS_72.slots.default;
const __VLS_73 = {}.QItemSection;
/** @type {[typeof __VLS_components.QItemSection, typeof __VLS_components.qItemSection, typeof __VLS_components.QItemSection, typeof __VLS_components.qItemSection, ]} */ ;
// @ts-ignore
const __VLS_74 = __VLS_asFunctionalComponent(__VLS_73, new __VLS_73({
    avatar: true,
}));
const __VLS_75 = __VLS_74({
    avatar: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_74));
__VLS_76.slots.default;
const __VLS_77 = {}.QIcon;
/** @type {[typeof __VLS_components.QIcon, typeof __VLS_components.qIcon, ]} */ ;
// @ts-ignore
const __VLS_78 = __VLS_asFunctionalComponent(__VLS_77, new __VLS_77({
    name: "space_dashboard",
    size: "sm",
}));
const __VLS_79 = __VLS_78({
    name: "space_dashboard",
    size: "sm",
}, ...__VLS_functionalComponentArgsRest(__VLS_78));
var __VLS_76;
const __VLS_81 = {}.QItemSection;
/** @type {[typeof __VLS_components.QItemSection, typeof __VLS_components.qItemSection, typeof __VLS_components.QItemSection, typeof __VLS_components.qItemSection, ]} */ ;
// @ts-ignore
const __VLS_82 = __VLS_asFunctionalComponent(__VLS_81, new __VLS_81({
    ...{ class: "text-weight-medium" },
}));
const __VLS_83 = __VLS_82({
    ...{ class: "text-weight-medium" },
}, ...__VLS_functionalComponentArgsRest(__VLS_82));
__VLS_84.slots.default;
var __VLS_84;
var __VLS_72;
const __VLS_85 = {}.QItem;
/** @type {[typeof __VLS_components.QItem, typeof __VLS_components.qItem, typeof __VLS_components.QItem, typeof __VLS_components.qItem, ]} */ ;
// @ts-ignore
const __VLS_86 = __VLS_asFunctionalComponent(__VLS_85, new __VLS_85({
    clickable: true,
    to: "/lancamentos",
    exact: true,
    activeClass: "modern-active-item",
    ...{ class: "border-radius-item q-mb-sm transition-ease" },
}));
const __VLS_87 = __VLS_86({
    clickable: true,
    to: "/lancamentos",
    exact: true,
    activeClass: "modern-active-item",
    ...{ class: "border-radius-item q-mb-sm transition-ease" },
}, ...__VLS_functionalComponentArgsRest(__VLS_86));
__VLS_asFunctionalDirective(__VLS_directives.vRipple)(null, { ...__VLS_directiveBindingRestFields, }, null, null);
__VLS_88.slots.default;
const __VLS_89 = {}.QItemSection;
/** @type {[typeof __VLS_components.QItemSection, typeof __VLS_components.qItemSection, typeof __VLS_components.QItemSection, typeof __VLS_components.qItemSection, ]} */ ;
// @ts-ignore
const __VLS_90 = __VLS_asFunctionalComponent(__VLS_89, new __VLS_89({
    avatar: true,
}));
const __VLS_91 = __VLS_90({
    avatar: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_90));
__VLS_92.slots.default;
const __VLS_93 = {}.QIcon;
/** @type {[typeof __VLS_components.QIcon, typeof __VLS_components.qIcon, ]} */ ;
// @ts-ignore
const __VLS_94 = __VLS_asFunctionalComponent(__VLS_93, new __VLS_93({
    name: "receipt_long",
    size: "sm",
}));
const __VLS_95 = __VLS_94({
    name: "receipt_long",
    size: "sm",
}, ...__VLS_functionalComponentArgsRest(__VLS_94));
var __VLS_92;
const __VLS_97 = {}.QItemSection;
/** @type {[typeof __VLS_components.QItemSection, typeof __VLS_components.qItemSection, typeof __VLS_components.QItemSection, typeof __VLS_components.qItemSection, ]} */ ;
// @ts-ignore
const __VLS_98 = __VLS_asFunctionalComponent(__VLS_97, new __VLS_97({
    ...{ class: "text-weight-medium" },
}));
const __VLS_99 = __VLS_98({
    ...{ class: "text-weight-medium" },
}, ...__VLS_functionalComponentArgsRest(__VLS_98));
__VLS_100.slots.default;
var __VLS_100;
var __VLS_88;
const __VLS_101 = {}.QItem;
/** @type {[typeof __VLS_components.QItem, typeof __VLS_components.qItem, typeof __VLS_components.QItem, typeof __VLS_components.qItem, ]} */ ;
// @ts-ignore
const __VLS_102 = __VLS_asFunctionalComponent(__VLS_101, new __VLS_101({
    clickable: true,
    to: "/gastos-fixos",
    exact: true,
    activeClass: "modern-active-item",
    ...{ class: "border-radius-item q-mb-sm transition-ease" },
}));
const __VLS_103 = __VLS_102({
    clickable: true,
    to: "/gastos-fixos",
    exact: true,
    activeClass: "modern-active-item",
    ...{ class: "border-radius-item q-mb-sm transition-ease" },
}, ...__VLS_functionalComponentArgsRest(__VLS_102));
__VLS_asFunctionalDirective(__VLS_directives.vRipple)(null, { ...__VLS_directiveBindingRestFields, }, null, null);
__VLS_104.slots.default;
const __VLS_105 = {}.QItemSection;
/** @type {[typeof __VLS_components.QItemSection, typeof __VLS_components.qItemSection, typeof __VLS_components.QItemSection, typeof __VLS_components.qItemSection, ]} */ ;
// @ts-ignore
const __VLS_106 = __VLS_asFunctionalComponent(__VLS_105, new __VLS_105({
    avatar: true,
}));
const __VLS_107 = __VLS_106({
    avatar: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_106));
__VLS_108.slots.default;
const __VLS_109 = {}.QIcon;
/** @type {[typeof __VLS_components.QIcon, typeof __VLS_components.qIcon, ]} */ ;
// @ts-ignore
const __VLS_110 = __VLS_asFunctionalComponent(__VLS_109, new __VLS_109({
    name: "event_repeat",
    size: "sm",
}));
const __VLS_111 = __VLS_110({
    name: "event_repeat",
    size: "sm",
}, ...__VLS_functionalComponentArgsRest(__VLS_110));
var __VLS_108;
const __VLS_113 = {}.QItemSection;
/** @type {[typeof __VLS_components.QItemSection, typeof __VLS_components.qItemSection, typeof __VLS_components.QItemSection, typeof __VLS_components.qItemSection, ]} */ ;
// @ts-ignore
const __VLS_114 = __VLS_asFunctionalComponent(__VLS_113, new __VLS_113({
    ...{ class: "text-weight-medium" },
}));
const __VLS_115 = __VLS_114({
    ...{ class: "text-weight-medium" },
}, ...__VLS_functionalComponentArgsRest(__VLS_114));
__VLS_116.slots.default;
var __VLS_116;
var __VLS_104;
var __VLS_52;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "absolute-bottom q-pa-md text-center text-caption text-grey-5" },
});
var __VLS_48;
const __VLS_117 = {}.QPageContainer;
/** @type {[typeof __VLS_components.QPageContainer, typeof __VLS_components.qPageContainer, typeof __VLS_components.QPageContainer, typeof __VLS_components.qPageContainer, ]} */ ;
// @ts-ignore
const __VLS_118 = __VLS_asFunctionalComponent(__VLS_117, new __VLS_117({
    ...{ class: (__VLS_ctx.$q.dark.isActive ? 'bg-dark' : 'bg-grey-2') },
    ...{ class: "transition-bg" },
}));
const __VLS_119 = __VLS_118({
    ...{ class: (__VLS_ctx.$q.dark.isActive ? 'bg-dark' : 'bg-grey-2') },
    ...{ class: "transition-bg" },
}, ...__VLS_functionalComponentArgsRest(__VLS_118));
__VLS_120.slots.default;
const __VLS_121 = {}.RouterView;
/** @type {[typeof __VLS_components.RouterView, typeof __VLS_components.routerView, typeof __VLS_components.RouterView, typeof __VLS_components.routerView, ]} */ ;
// @ts-ignore
const __VLS_122 = __VLS_asFunctionalComponent(__VLS_121, new __VLS_121({}));
const __VLS_123 = __VLS_122({}, ...__VLS_functionalComponentArgsRest(__VLS_122));
{
    const { default: __VLS_thisSlot } = __VLS_124.slots;
    const [{ Component }] = __VLS_getSlotParams(__VLS_thisSlot);
    const __VLS_125 = {}.transition;
    /** @type {[typeof __VLS_components.Transition, typeof __VLS_components.transition, typeof __VLS_components.Transition, typeof __VLS_components.transition, ]} */ ;
    // @ts-ignore
    const __VLS_126 = __VLS_asFunctionalComponent(__VLS_125, new __VLS_125({
        name: "fade",
        mode: "out-in",
    }));
    const __VLS_127 = __VLS_126({
        name: "fade",
        mode: "out-in",
    }, ...__VLS_functionalComponentArgsRest(__VLS_126));
    __VLS_128.slots.default;
    const __VLS_129 = ((Component));
    // @ts-ignore
    const __VLS_130 = __VLS_asFunctionalComponent(__VLS_129, new __VLS_129({}));
    const __VLS_131 = __VLS_130({}, ...__VLS_functionalComponentArgsRest(__VLS_130));
    var __VLS_128;
    __VLS_124.slots['' /* empty slot name completion */];
}
var __VLS_124;
var __VLS_120;
var __VLS_3;
/** @type {__VLS_StyleScopedClasses['q-px-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['q-py-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['q-mr-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['q-mr-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow-3']} */ ;
/** @type {__VLS_StyleScopedClasses['text-weight-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-h6']} */ ;
/** @type {__VLS_StyleScopedClasses['hover-effect']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-transform']} */ ;
/** @type {__VLS_StyleScopedClasses['q-pa-md']} */ ;
/** @type {__VLS_StyleScopedClasses['text-caption']} */ ;
/** @type {__VLS_StyleScopedClasses['text-weight-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-uppercase']} */ ;
/** @type {__VLS_StyleScopedClasses['text-grey-6']} */ ;
/** @type {__VLS_StyleScopedClasses['q-mt-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['q-mb-xs']} */ ;
/** @type {__VLS_StyleScopedClasses['q-px-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['border-radius-item']} */ ;
/** @type {__VLS_StyleScopedClasses['q-mb-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-ease']} */ ;
/** @type {__VLS_StyleScopedClasses['text-weight-medium']} */ ;
/** @type {__VLS_StyleScopedClasses['border-radius-item']} */ ;
/** @type {__VLS_StyleScopedClasses['q-mb-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-ease']} */ ;
/** @type {__VLS_StyleScopedClasses['text-weight-medium']} */ ;
/** @type {__VLS_StyleScopedClasses['border-radius-item']} */ ;
/** @type {__VLS_StyleScopedClasses['q-mb-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-ease']} */ ;
/** @type {__VLS_StyleScopedClasses['text-weight-medium']} */ ;
/** @type {__VLS_StyleScopedClasses['border-radius-item']} */ ;
/** @type {__VLS_StyleScopedClasses['q-mb-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-ease']} */ ;
/** @type {__VLS_StyleScopedClasses['text-weight-medium']} */ ;
/** @type {__VLS_StyleScopedClasses['absolute-bottom']} */ ;
/** @type {__VLS_StyleScopedClasses['q-pa-md']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['text-caption']} */ ;
/** @type {__VLS_StyleScopedClasses['text-grey-5']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-bg']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            $q: $q,
            leftDrawerOpen: leftDrawerOpen,
            toggleLeftDrawer: toggleLeftDrawer,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=App.vue.js.map