/// <reference types="../../../../node_modules/.vue-global-types/vue_3.5_0_0_0.d.ts" />
import { ref, computed, onMounted } from 'vue';
import axios from 'axios';
import { useQuasar } from 'quasar';
import ResumoFinanceiroCard from '../components/ResumoFinanceiro.vue';
import VueApexCharts from 'vue3-apexcharts';
const $q = useQuasar();
const resumo = ref(null);
const loading = ref(true);
const error = ref('');
// Para controlar os filtros date
const dateObj = new Date();
const dates = ref({
    start: new Date(dateObj.getFullYear(), dateObj.getMonth(), 1).toISOString().split('T')[0],
    end: new Date(dateObj.getFullYear(), dateObj.getMonth() + 1, 0).toISOString().split('T')[0]
});
// Configurações Globais ApexCharts
const isDark = computed(() => $q.dark.isActive);
// Configuração do Gráfico de Linha (Fluxo de Caixa)
const linhaSeries = computed(() => [
    {
        name: 'Saldo do Dia',
        data: resumo.value?.fluxoDeCaixa.map(i => i.totalDia) || []
    }
]);
const linhaChartOptions = computed(() => ({
    chart: {
        type: 'area',
        toolbar: { show: false },
        background: 'transparent'
    },
    theme: { mode: isDark.value ? 'dark' : 'light' },
    colors: ['#1976D2'],
    fill: {
        type: 'gradient',
        gradient: { shadeIntensity: 1, opacityFrom: 0.7, opacityTo: 0.2, stops: [0, 90, 100] }
    },
    dataLabels: { enabled: false },
    stroke: { curve: 'smooth', width: 2 },
    xaxis: {
        categories: resumo.value?.fluxoDeCaixa.map(i => {
            const parts = i.data.split('-');
            return `${parts[2]}/${parts[1]}`;
        }) || [],
    },
    yaxis: {
        labels: {
            formatter: (val) => `R$ ${val.toFixed(0)}`
        }
    }
}));
// Configuração Pie - Gastos
const gastosPieSeries = computed(() => {
    return resumo.value ? Object.values(resumo.value.gastosPorCategoria) : [];
});
const gastosPieOptions = computed(() => ({
    chart: { type: 'donut', background: 'transparent' },
    theme: { mode: isDark.value ? 'dark' : 'light' },
    labels: resumo.value ? Object.keys(resumo.value.gastosPorCategoria) : [],
    colors: ['#EF5350', '#EC407A', '#AB47BC', '#7E57C2', '#FFCA28', '#FF7043'],
    plotOptions: {
        pie: { donut: { size: '65%' } }
    },
    dataLabels: { enabled: false },
    legend: { position: 'bottom' }
}));
const entradasPieSeries = computed(() => {
    return resumo.value ? Object.values(resumo.value.entradasPorCategoria) : [];
});
const entradasPieOptions = computed(() => ({
    chart: { type: 'donut', background: 'transparent' },
    theme: { mode: isDark.value ? 'dark' : 'light' },
    labels: resumo.value ? Object.keys(resumo.value.entradasPorCategoria) : [],
    colors: ['#66BB6A', '#26A69A', '#29B6F6', '#26C6DA', '#9CCC65', '#D4E157'],
    plotOptions: {
        pie: { donut: { size: '65%' } }
    },
    dataLabels: { enabled: false },
    legend: { position: 'bottom' }
}));
const fetchResumo = async () => {
    loading.value = true;
    error.value = '';
    try {
        const response = await axios.get('/api/resumo', {
            params: {
                startDate: new Date(dates.value.start).toISOString(),
                endDate: new Date(dates.value.end + 'T23:59:59').toISOString()
            }
        });
        resumo.value = response.data.data;
    }
    catch (e) {
        error.value = 'Houve um erro ao carregar o dashboard.';
        console.error(e);
    }
    finally {
        loading.value = false;
    }
};
onMounted(() => {
    fetchResumo();
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['modern-card']} */ ;
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
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "row items-center q-gutter-md" },
});
const __VLS_5 = {}.QInput;
/** @type {[typeof __VLS_components.QInput, typeof __VLS_components.qInput, ]} */ ;
// @ts-ignore
const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({
    modelValue: (__VLS_ctx.dates.start),
    outlined: true,
    dense: true,
    type: "date",
    ...{ class: "bg-white rounded-borders" },
    dark: (__VLS_ctx.$q.dark.isActive),
    label: "Início",
}));
const __VLS_7 = __VLS_6({
    modelValue: (__VLS_ctx.dates.start),
    outlined: true,
    dense: true,
    type: "date",
    ...{ class: "bg-white rounded-borders" },
    dark: (__VLS_ctx.$q.dark.isActive),
    label: "Início",
}, ...__VLS_functionalComponentArgsRest(__VLS_6));
const __VLS_9 = {}.QInput;
/** @type {[typeof __VLS_components.QInput, typeof __VLS_components.qInput, ]} */ ;
// @ts-ignore
const __VLS_10 = __VLS_asFunctionalComponent(__VLS_9, new __VLS_9({
    modelValue: (__VLS_ctx.dates.end),
    outlined: true,
    dense: true,
    type: "date",
    ...{ class: "bg-white rounded-borders" },
    dark: (__VLS_ctx.$q.dark.isActive),
    label: "Fim",
}));
const __VLS_11 = __VLS_10({
    modelValue: (__VLS_ctx.dates.end),
    outlined: true,
    dense: true,
    type: "date",
    ...{ class: "bg-white rounded-borders" },
    dark: (__VLS_ctx.$q.dark.isActive),
    label: "Fim",
}, ...__VLS_functionalComponentArgsRest(__VLS_10));
const __VLS_13 = {}.QBtn;
/** @type {[typeof __VLS_components.QBtn, typeof __VLS_components.qBtn, ]} */ ;
// @ts-ignore
const __VLS_14 = __VLS_asFunctionalComponent(__VLS_13, new __VLS_13({
    ...{ 'onClick': {} },
    outline: true,
    rounded: true,
    color: "primary",
    icon: "refresh",
    label: "Atualizar",
    loading: (__VLS_ctx.loading),
}));
const __VLS_15 = __VLS_14({
    ...{ 'onClick': {} },
    outline: true,
    rounded: true,
    color: "primary",
    icon: "refresh",
    label: "Atualizar",
    loading: (__VLS_ctx.loading),
}, ...__VLS_functionalComponentArgsRest(__VLS_14));
let __VLS_17;
let __VLS_18;
let __VLS_19;
const __VLS_20 = {
    onClick: (__VLS_ctx.fetchResumo)
};
var __VLS_16;
if (__VLS_ctx.loading) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "flex flex-center q-mt-xl" },
    });
    const __VLS_21 = {}.QSpinnerTail;
    /** @type {[typeof __VLS_components.QSpinnerTail, typeof __VLS_components.qSpinnerTail, ]} */ ;
    // @ts-ignore
    const __VLS_22 = __VLS_asFunctionalComponent(__VLS_21, new __VLS_21({
        color: "primary",
        size: "3em",
    }));
    const __VLS_23 = __VLS_22({
        color: "primary",
        size: "3em",
    }, ...__VLS_functionalComponentArgsRest(__VLS_22));
}
else if (__VLS_ctx.error) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "q-mt-xl" },
    });
    const __VLS_25 = {}.QBanner;
    /** @type {[typeof __VLS_components.QBanner, typeof __VLS_components.qBanner, typeof __VLS_components.QBanner, typeof __VLS_components.qBanner, ]} */ ;
    // @ts-ignore
    const __VLS_26 = __VLS_asFunctionalComponent(__VLS_25, new __VLS_25({
        ...{ class: (__VLS_ctx.$q.dark.isActive ? 'bg-red-9' : 'bg-red-1') },
        ...{ class: "text-negative rounded-borders shadow-1" },
    }));
    const __VLS_27 = __VLS_26({
        ...{ class: (__VLS_ctx.$q.dark.isActive ? 'bg-red-9' : 'bg-red-1') },
        ...{ class: "text-negative rounded-borders shadow-1" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_26));
    __VLS_28.slots.default;
    {
        const { avatar: __VLS_thisSlot } = __VLS_28.slots;
        const __VLS_29 = {}.QIcon;
        /** @type {[typeof __VLS_components.QIcon, typeof __VLS_components.qIcon, ]} */ ;
        // @ts-ignore
        const __VLS_30 = __VLS_asFunctionalComponent(__VLS_29, new __VLS_29({
            name: "error_outline",
            color: "negative",
        }));
        const __VLS_31 = __VLS_30({
            name: "error_outline",
            color: "negative",
        }, ...__VLS_functionalComponentArgsRest(__VLS_30));
    }
    (__VLS_ctx.error);
    var __VLS_28;
}
else if (__VLS_ctx.resumo) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    /** @type {[typeof ResumoFinanceiroCard, ]} */ ;
    // @ts-ignore
    const __VLS_33 = __VLS_asFunctionalComponent(ResumoFinanceiroCard, new ResumoFinanceiroCard({
        resumo: (__VLS_ctx.resumo),
        ...{ class: "q-mb-xl" },
    }));
    const __VLS_34 = __VLS_33({
        resumo: (__VLS_ctx.resumo),
        ...{ class: "q-mb-xl" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_33));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "row q-col-gutter-lg" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "col-12" },
    });
    const __VLS_36 = {}.QCard;
    /** @type {[typeof __VLS_components.QCard, typeof __VLS_components.qCard, typeof __VLS_components.QCard, typeof __VLS_components.qCard, ]} */ ;
    // @ts-ignore
    const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({
        ...{ class: "modern-card q-pa-md" },
        ...{ class: ([__VLS_ctx.$q.dark.isActive ? 'bg-grey-10' : 'bg-white']) },
    }));
    const __VLS_38 = __VLS_37({
        ...{ class: "modern-card q-pa-md" },
        ...{ class: ([__VLS_ctx.$q.dark.isActive ? 'bg-grey-10' : 'bg-white']) },
    }, ...__VLS_functionalComponentArgsRest(__VLS_37));
    __VLS_39.slots.default;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "text-h6 q-mb-md" },
    });
    const __VLS_40 = {}.VueApexCharts;
    /** @type {[typeof __VLS_components.VueApexCharts, typeof __VLS_components.vueApexCharts, ]} */ ;
    // @ts-ignore
    const __VLS_41 = __VLS_asFunctionalComponent(__VLS_40, new __VLS_40({
        type: "area",
        height: "300",
        options: (__VLS_ctx.linhaChartOptions),
        series: (__VLS_ctx.linhaSeries),
    }));
    const __VLS_42 = __VLS_41({
        type: "area",
        height: "300",
        options: (__VLS_ctx.linhaChartOptions),
        series: (__VLS_ctx.linhaSeries),
    }, ...__VLS_functionalComponentArgsRest(__VLS_41));
    var __VLS_39;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "col-12 col-md-6" },
    });
    const __VLS_44 = {}.QCard;
    /** @type {[typeof __VLS_components.QCard, typeof __VLS_components.qCard, typeof __VLS_components.QCard, typeof __VLS_components.qCard, ]} */ ;
    // @ts-ignore
    const __VLS_45 = __VLS_asFunctionalComponent(__VLS_44, new __VLS_44({
        ...{ class: "modern-card q-pa-md" },
        ...{ class: ([__VLS_ctx.$q.dark.isActive ? 'bg-grey-10' : 'bg-white']) },
    }));
    const __VLS_46 = __VLS_45({
        ...{ class: "modern-card q-pa-md" },
        ...{ class: ([__VLS_ctx.$q.dark.isActive ? 'bg-grey-10' : 'bg-white']) },
    }, ...__VLS_functionalComponentArgsRest(__VLS_45));
    __VLS_47.slots.default;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "text-h6 q-mb-md" },
    });
    if (__VLS_ctx.gastosPieSeries.length) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        const __VLS_48 = {}.VueApexCharts;
        /** @type {[typeof __VLS_components.VueApexCharts, typeof __VLS_components.vueApexCharts, ]} */ ;
        // @ts-ignore
        const __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48({
            type: "donut",
            height: "280",
            options: (__VLS_ctx.gastosPieOptions),
            series: (__VLS_ctx.gastosPieSeries),
        }));
        const __VLS_50 = __VLS_49({
            type: "donut",
            height: "280",
            options: (__VLS_ctx.gastosPieOptions),
            series: (__VLS_ctx.gastosPieSeries),
        }, ...__VLS_functionalComponentArgsRest(__VLS_49));
    }
    else {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: "text-center text-grey-5 q-py-lg" },
        });
    }
    var __VLS_47;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "col-12 col-md-6" },
    });
    const __VLS_52 = {}.QCard;
    /** @type {[typeof __VLS_components.QCard, typeof __VLS_components.qCard, typeof __VLS_components.QCard, typeof __VLS_components.qCard, ]} */ ;
    // @ts-ignore
    const __VLS_53 = __VLS_asFunctionalComponent(__VLS_52, new __VLS_52({
        ...{ class: "modern-card q-pa-md" },
        ...{ class: ([__VLS_ctx.$q.dark.isActive ? 'bg-grey-10' : 'bg-white']) },
    }));
    const __VLS_54 = __VLS_53({
        ...{ class: "modern-card q-pa-md" },
        ...{ class: ([__VLS_ctx.$q.dark.isActive ? 'bg-grey-10' : 'bg-white']) },
    }, ...__VLS_functionalComponentArgsRest(__VLS_53));
    __VLS_55.slots.default;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "text-h6 q-mb-md" },
    });
    if (__VLS_ctx.entradasPieSeries.length) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        const __VLS_56 = {}.VueApexCharts;
        /** @type {[typeof __VLS_components.VueApexCharts, typeof __VLS_components.vueApexCharts, ]} */ ;
        // @ts-ignore
        const __VLS_57 = __VLS_asFunctionalComponent(__VLS_56, new __VLS_56({
            type: "donut",
            height: "280",
            options: (__VLS_ctx.entradasPieOptions),
            series: (__VLS_ctx.entradasPieSeries),
        }));
        const __VLS_58 = __VLS_57({
            type: "donut",
            height: "280",
            options: (__VLS_ctx.entradasPieOptions),
            series: (__VLS_ctx.entradasPieSeries),
        }, ...__VLS_functionalComponentArgsRest(__VLS_57));
    }
    else {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: "text-center text-grey-5 q-py-lg" },
        });
    }
    var __VLS_55;
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
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['q-gutter-md']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-white']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-borders']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-white']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-borders']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-center']} */ ;
/** @type {__VLS_StyleScopedClasses['q-mt-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['q-mt-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['text-negative']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-borders']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow-1']} */ ;
/** @type {__VLS_StyleScopedClasses['q-mb-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['q-col-gutter-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['col-12']} */ ;
/** @type {__VLS_StyleScopedClasses['modern-card']} */ ;
/** @type {__VLS_StyleScopedClasses['q-pa-md']} */ ;
/** @type {__VLS_StyleScopedClasses['text-h6']} */ ;
/** @type {__VLS_StyleScopedClasses['q-mb-md']} */ ;
/** @type {__VLS_StyleScopedClasses['col-12']} */ ;
/** @type {__VLS_StyleScopedClasses['col-md-6']} */ ;
/** @type {__VLS_StyleScopedClasses['modern-card']} */ ;
/** @type {__VLS_StyleScopedClasses['q-pa-md']} */ ;
/** @type {__VLS_StyleScopedClasses['text-h6']} */ ;
/** @type {__VLS_StyleScopedClasses['q-mb-md']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['text-grey-5']} */ ;
/** @type {__VLS_StyleScopedClasses['q-py-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['col-12']} */ ;
/** @type {__VLS_StyleScopedClasses['col-md-6']} */ ;
/** @type {__VLS_StyleScopedClasses['modern-card']} */ ;
/** @type {__VLS_StyleScopedClasses['q-pa-md']} */ ;
/** @type {__VLS_StyleScopedClasses['text-h6']} */ ;
/** @type {__VLS_StyleScopedClasses['q-mb-md']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['text-grey-5']} */ ;
/** @type {__VLS_StyleScopedClasses['q-py-lg']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            ResumoFinanceiroCard: ResumoFinanceiroCard,
            VueApexCharts: VueApexCharts,
            $q: $q,
            resumo: resumo,
            loading: loading,
            error: error,
            dates: dates,
            linhaSeries: linhaSeries,
            linhaChartOptions: linhaChartOptions,
            gastosPieSeries: gastosPieSeries,
            gastosPieOptions: gastosPieOptions,
            entradasPieSeries: entradasPieSeries,
            entradasPieOptions: entradasPieOptions,
            fetchResumo: fetchResumo,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=Dashboard.vue.js.map