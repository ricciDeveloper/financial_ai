/// <reference types="../../../../node_modules/.vue-global-types/vue_3.5_0_0_0.d.ts" />
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useQuasar } from 'quasar';
const $q = useQuasar();
const gastos = ref([]);
const loading = ref(true);
const submitting = ref(false);
const editMode = ref(false);
const editingId = ref(null);
const categoriasHover = ['Lazer & Entretenimento', 'Moradia', 'Alimentação', 'Saúde', 'Educação', 'Transporte', 'Salário', 'Serviços', 'Outros'];
const form = ref({
    tipo: 'gasto',
    descricao: '',
    valor: null,
    diaVencimento: null,
    categoria: ''
});
const fetchGastos = async () => {
    loading.value = true;
    try {
        const res = await axios.get('/api/gastos-fixos');
        gastos.value = res.data.data;
    }
    catch (error) {
        if (error)
            console.error(error);
    }
    finally {
        loading.value = false;
    }
};
const prepararEdicao = (gasto) => {
    editMode.value = true;
    editingId.value = gasto.id;
    form.value = {
        tipo: gasto.tipo,
        descricao: gasto.descricao,
        valor: gasto.valor,
        diaVencimento: gasto.diaVencimento,
        categoria: gasto.categoria
    };
    window.scrollTo({ top: 0, behavior: 'smooth' });
};
const cancelEdit = () => {
    editMode.value = false;
    editingId.value = null;
    form.value = { tipo: 'gasto', descricao: '', valor: null, diaVencimento: null, categoria: '' };
};
const salvarGasto = async () => {
    submitting.value = true;
    try {
        if (editMode.value && editingId.value) {
            const res = await axios.put(`/api/gastos-fixos/${editingId.value}`, form.value);
            const index = gastos.value.findIndex(g => g.id === editingId.value);
            if (index !== -1)
                gastos.value[index] = res.data.data;
            $q.notify({ type: 'positive', message: 'Gasto atualizado!' });
        }
        else {
            const res = await axios.post('/api/gastos-fixos', form.value);
            gastos.value.push(res.data.data);
            $q.notify({ type: 'positive', message: 'Gasto cadastrado com sucesso!' });
        }
        cancelEdit();
    }
    catch (error) {
        $q.notify({ type: 'negative', message: 'Erro ao salvar gasto fixo.' });
    }
    finally {
        submitting.value = false;
    }
};
const deletarGasto = async (id) => {
    $q.dialog({
        title: 'Atenção',
        message: 'Deseja realmente excluir esse gasto recorrente?',
        cancel: true,
        persistent: true
    }).onOk(async () => {
        try {
            await axios.delete(`/api/gastos-fixos/${id}`);
            gastos.value = gastos.value.filter(g => g.id !== id);
            $q.notify({ type: 'info', message: 'Excluído com sucesso.' });
        }
        catch {
            $q.notify({ type: 'negative', message: 'Falha ao excluir.' });
        }
    });
};
onMounted(fetchGastos);
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['modern-list-card']} */ ;
/** @type {__VLS_StyleScopedClasses['modern-list-card']} */ ;
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
__VLS_asFunctionalElement(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({
    ...{ class: "text-h4 text-weight-bold q-mb-xl" },
    ...{ class: (__VLS_ctx.$q.dark.isActive ? 'text-white' : 'text-dark') },
});
const __VLS_5 = {}.QCard;
/** @type {[typeof __VLS_components.QCard, typeof __VLS_components.qCard, typeof __VLS_components.QCard, typeof __VLS_components.qCard, ]} */ ;
// @ts-ignore
const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({
    ...{ class: "modern-card q-mb-xl" },
    ...{ class: ([__VLS_ctx.$q.dark.isActive ? 'bg-grey-10' : 'bg-white']) },
}));
const __VLS_7 = __VLS_6({
    ...{ class: "modern-card q-mb-xl" },
    ...{ class: ([__VLS_ctx.$q.dark.isActive ? 'bg-grey-10' : 'bg-white']) },
}, ...__VLS_functionalComponentArgsRest(__VLS_6));
__VLS_8.slots.default;
const __VLS_9 = {}.QCardSection;
/** @type {[typeof __VLS_components.QCardSection, typeof __VLS_components.qCardSection, typeof __VLS_components.QCardSection, typeof __VLS_components.qCardSection, ]} */ ;
// @ts-ignore
const __VLS_10 = __VLS_asFunctionalComponent(__VLS_9, new __VLS_9({
    ...{ class: "q-pa-lg" },
}));
const __VLS_11 = __VLS_10({
    ...{ class: "q-pa-lg" },
}, ...__VLS_functionalComponentArgsRest(__VLS_10));
__VLS_12.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "row items-center justify-between q-mb-md" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "text-h6" },
});
(__VLS_ctx.editMode ? 'Editar Lançamento Fixo' : 'Adicionar Novo Lançamento Fixo');
if (__VLS_ctx.editMode) {
    const __VLS_13 = {}.QBtn;
    /** @type {[typeof __VLS_components.QBtn, typeof __VLS_components.qBtn, ]} */ ;
    // @ts-ignore
    const __VLS_14 = __VLS_asFunctionalComponent(__VLS_13, new __VLS_13({
        ...{ 'onClick': {} },
        flat: true,
        color: "grey",
        label: "Cancelar",
    }));
    const __VLS_15 = __VLS_14({
        ...{ 'onClick': {} },
        flat: true,
        color: "grey",
        label: "Cancelar",
    }, ...__VLS_functionalComponentArgsRest(__VLS_14));
    let __VLS_17;
    let __VLS_18;
    let __VLS_19;
    const __VLS_20 = {
        onClick: (__VLS_ctx.cancelEdit)
    };
    var __VLS_16;
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "q-mb-md" },
});
const __VLS_21 = {}.QBtnToggle;
/** @type {[typeof __VLS_components.QBtnToggle, typeof __VLS_components.qBtnToggle, ]} */ ;
// @ts-ignore
const __VLS_22 = __VLS_asFunctionalComponent(__VLS_21, new __VLS_21({
    modelValue: (__VLS_ctx.form.tipo),
    rounded: true,
    unelevated: true,
    toggleColor: "primary",
    color: "grey-3",
    textColor: "grey-8",
    ...{ class: (__VLS_ctx.$q.dark.isActive ? 'bg-grey-9 text-grey-4' : '') },
    options: ([
        { label: 'Despesa (Saída)', value: 'gasto' },
        { label: 'Receita (Entrada)', value: 'entrada' }
    ]),
    ...{ class: "shadow-1" },
}));
const __VLS_23 = __VLS_22({
    modelValue: (__VLS_ctx.form.tipo),
    rounded: true,
    unelevated: true,
    toggleColor: "primary",
    color: "grey-3",
    textColor: "grey-8",
    ...{ class: (__VLS_ctx.$q.dark.isActive ? 'bg-grey-9 text-grey-4' : '') },
    options: ([
        { label: 'Despesa (Saída)', value: 'gasto' },
        { label: 'Receita (Entrada)', value: 'entrada' }
    ]),
    ...{ class: "shadow-1" },
}, ...__VLS_functionalComponentArgsRest(__VLS_22));
const __VLS_25 = {}.QForm;
/** @type {[typeof __VLS_components.QForm, typeof __VLS_components.qForm, typeof __VLS_components.QForm, typeof __VLS_components.qForm, ]} */ ;
// @ts-ignore
const __VLS_26 = __VLS_asFunctionalComponent(__VLS_25, new __VLS_25({
    ...{ 'onSubmit': {} },
    ...{ class: "row q-col-gutter-md" },
}));
const __VLS_27 = __VLS_26({
    ...{ 'onSubmit': {} },
    ...{ class: "row q-col-gutter-md" },
}, ...__VLS_functionalComponentArgsRest(__VLS_26));
let __VLS_29;
let __VLS_30;
let __VLS_31;
const __VLS_32 = {
    onSubmit: (__VLS_ctx.salvarGasto)
};
__VLS_28.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "col-12 col-sm-6" },
});
const __VLS_33 = {}.QInput;
/** @type {[typeof __VLS_components.QInput, typeof __VLS_components.qInput, ]} */ ;
// @ts-ignore
const __VLS_34 = __VLS_asFunctionalComponent(__VLS_33, new __VLS_33({
    modelValue: (__VLS_ctx.form.descricao),
    outlined: true,
    label: "Descrição",
    placeholder: "Ex: Netflix",
    rules: ([val => !!val || 'Obrigatório']),
}));
const __VLS_35 = __VLS_34({
    modelValue: (__VLS_ctx.form.descricao),
    outlined: true,
    label: "Descrição",
    placeholder: "Ex: Netflix",
    rules: ([val => !!val || 'Obrigatório']),
}, ...__VLS_functionalComponentArgsRest(__VLS_34));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "col-12 col-sm-6" },
});
const __VLS_37 = {}.QInput;
/** @type {[typeof __VLS_components.QInput, typeof __VLS_components.qInput, ]} */ ;
// @ts-ignore
const __VLS_38 = __VLS_asFunctionalComponent(__VLS_37, new __VLS_37({
    modelValue: (__VLS_ctx.form.valor),
    modelModifiers: { number: true, },
    type: "number",
    outlined: true,
    label: "Valor (R$)",
    placeholder: "Ex: 39.90",
    rules: ([val => val > 0 || 'Valor inválido']),
}));
const __VLS_39 = __VLS_38({
    modelValue: (__VLS_ctx.form.valor),
    modelModifiers: { number: true, },
    type: "number",
    outlined: true,
    label: "Valor (R$)",
    placeholder: "Ex: 39.90",
    rules: ([val => val > 0 || 'Valor inválido']),
}, ...__VLS_functionalComponentArgsRest(__VLS_38));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "col-12 col-sm-6" },
});
const __VLS_41 = {}.QSelect;
/** @type {[typeof __VLS_components.QSelect, typeof __VLS_components.qSelect, ]} */ ;
// @ts-ignore
const __VLS_42 = __VLS_asFunctionalComponent(__VLS_41, new __VLS_41({
    modelValue: (__VLS_ctx.form.categoria),
    outlined: true,
    options: (__VLS_ctx.categoriasHover),
    label: "Categoria",
    rules: ([val => !!val || 'Obrigatório']),
}));
const __VLS_43 = __VLS_42({
    modelValue: (__VLS_ctx.form.categoria),
    outlined: true,
    options: (__VLS_ctx.categoriasHover),
    label: "Categoria",
    rules: ([val => !!val || 'Obrigatório']),
}, ...__VLS_functionalComponentArgsRest(__VLS_42));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "col-12 col-sm-6" },
});
const __VLS_45 = {}.QInput;
/** @type {[typeof __VLS_components.QInput, typeof __VLS_components.qInput, ]} */ ;
// @ts-ignore
const __VLS_46 = __VLS_asFunctionalComponent(__VLS_45, new __VLS_45({
    modelValue: (__VLS_ctx.form.diaVencimento),
    modelModifiers: { number: true, },
    type: "number",
    outlined: true,
    label: "Dia do Pagamento",
    placeholder: "Ex: 10",
    rules: ([val => (val > 0 && val <= 31) || 'Dia inválido']),
}));
const __VLS_47 = __VLS_46({
    modelValue: (__VLS_ctx.form.diaVencimento),
    modelModifiers: { number: true, },
    type: "number",
    outlined: true,
    label: "Dia do Pagamento",
    placeholder: "Ex: 10",
    rules: ([val => (val > 0 && val <= 31) || 'Dia inválido']),
}, ...__VLS_functionalComponentArgsRest(__VLS_46));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "col-12 flex justify-end" },
});
const __VLS_49 = {}.QBtn;
/** @type {[typeof __VLS_components.QBtn, typeof __VLS_components.qBtn, ]} */ ;
// @ts-ignore
const __VLS_50 = __VLS_asFunctionalComponent(__VLS_49, new __VLS_49({
    type: "submit",
    color: (__VLS_ctx.form.tipo === 'gasto' ? 'negative' : 'positive'),
    label: (__VLS_ctx.editMode ? 'Salvar Alterações' : 'Cadastrar'),
    icon: (__VLS_ctx.editMode ? 'save' : 'add'),
    loading: (__VLS_ctx.submitting),
    ...{ class: "q-px-lg rounded-borders" },
    unelevated: true,
}));
const __VLS_51 = __VLS_50({
    type: "submit",
    color: (__VLS_ctx.form.tipo === 'gasto' ? 'negative' : 'positive'),
    label: (__VLS_ctx.editMode ? 'Salvar Alterações' : 'Cadastrar'),
    icon: (__VLS_ctx.editMode ? 'save' : 'add'),
    loading: (__VLS_ctx.submitting),
    ...{ class: "q-px-lg rounded-borders" },
    unelevated: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_50));
var __VLS_28;
var __VLS_12;
var __VLS_8;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "text-h6 q-mb-md" },
});
if (__VLS_ctx.loading) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "flex flex-center q-mt-md" },
    });
    const __VLS_53 = {}.QSpinnerTail;
    /** @type {[typeof __VLS_components.QSpinnerTail, typeof __VLS_components.qSpinnerTail, ]} */ ;
    // @ts-ignore
    const __VLS_54 = __VLS_asFunctionalComponent(__VLS_53, new __VLS_53({
        color: "primary",
        size: "3em",
    }));
    const __VLS_55 = __VLS_54({
        color: "primary",
        size: "3em",
    }, ...__VLS_functionalComponentArgsRest(__VLS_54));
}
else {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "column q-gutter-sm" },
    });
    const __VLS_57 = {}.TransitionGroup;
    /** @type {[typeof __VLS_components.TransitionGroup, typeof __VLS_components.transitionGroup, typeof __VLS_components.TransitionGroup, typeof __VLS_components.transitionGroup, ]} */ ;
    // @ts-ignore
    const __VLS_58 = __VLS_asFunctionalComponent(__VLS_57, new __VLS_57({
        name: "list",
        tag: "div",
    }));
    const __VLS_59 = __VLS_58({
        name: "list",
        tag: "div",
    }, ...__VLS_functionalComponentArgsRest(__VLS_58));
    __VLS_60.slots.default;
    for (const [gasto] of __VLS_getVForSourceType((__VLS_ctx.gastos))) {
        const __VLS_61 = {}.QCard;
        /** @type {[typeof __VLS_components.QCard, typeof __VLS_components.qCard, typeof __VLS_components.QCard, typeof __VLS_components.qCard, ]} */ ;
        // @ts-ignore
        const __VLS_62 = __VLS_asFunctionalComponent(__VLS_61, new __VLS_61({
            key: (gasto.id),
            ...{ class: "modern-list-card" },
            ...{ class: ([__VLS_ctx.$q.dark.isActive ? 'bg-grey-9' : 'bg-white', 'q-mb-sm']) },
        }));
        const __VLS_63 = __VLS_62({
            key: (gasto.id),
            ...{ class: "modern-list-card" },
            ...{ class: ([__VLS_ctx.$q.dark.isActive ? 'bg-grey-9' : 'bg-white', 'q-mb-sm']) },
        }, ...__VLS_functionalComponentArgsRest(__VLS_62));
        __VLS_64.slots.default;
        const __VLS_65 = {}.QCardSection;
        /** @type {[typeof __VLS_components.QCardSection, typeof __VLS_components.qCardSection, typeof __VLS_components.QCardSection, typeof __VLS_components.qCardSection, ]} */ ;
        // @ts-ignore
        const __VLS_66 = __VLS_asFunctionalComponent(__VLS_65, new __VLS_65({
            ...{ class: "row items-center justify-between q-py-sm" },
        }));
        const __VLS_67 = __VLS_66({
            ...{ class: "row items-center justify-between q-py-sm" },
        }, ...__VLS_functionalComponentArgsRest(__VLS_66));
        __VLS_68.slots.default;
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: "row items-center" },
            ...{ style: {} },
        });
        const __VLS_69 = {}.QAvatar;
        /** @type {[typeof __VLS_components.QAvatar, typeof __VLS_components.qAvatar, typeof __VLS_components.QAvatar, typeof __VLS_components.qAvatar, ]} */ ;
        // @ts-ignore
        const __VLS_70 = __VLS_asFunctionalComponent(__VLS_69, new __VLS_69({
            color: (gasto.tipo === 'gasto' ? 'red-1' : 'green-1'),
            textColor: (gasto.tipo === 'gasto' ? 'negative' : 'positive'),
            size: "42px",
            ...{ class: "q-mr-md" },
            ...{ style: {} },
        }));
        const __VLS_71 = __VLS_70({
            color: (gasto.tipo === 'gasto' ? 'red-1' : 'green-1'),
            textColor: (gasto.tipo === 'gasto' ? 'negative' : 'positive'),
            size: "42px",
            ...{ class: "q-mr-md" },
            ...{ style: {} },
        }, ...__VLS_functionalComponentArgsRest(__VLS_70));
        __VLS_72.slots.default;
        const __VLS_73 = {}.QIcon;
        /** @type {[typeof __VLS_components.QIcon, typeof __VLS_components.qIcon, ]} */ ;
        // @ts-ignore
        const __VLS_74 = __VLS_asFunctionalComponent(__VLS_73, new __VLS_73({
            name: (gasto.tipo === 'gasto' ? 'south_west' : 'north_east'),
            size: "20px",
        }));
        const __VLS_75 = __VLS_74({
            name: (gasto.tipo === 'gasto' ? 'south_west' : 'north_east'),
            size: "20px",
        }, ...__VLS_functionalComponentArgsRest(__VLS_74));
        var __VLS_72;
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: "text-subtitle1 text-weight-bold" },
        });
        (gasto.descricao);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: "text-caption text-grey-5" },
        });
        (gasto.categoria);
        (gasto.diaVencimento);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: "row items-center" },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: "text-subtitle1 text-weight-bold q-mr-md" },
            ...{ class: (gasto.tipo === 'gasto' ? 'text-negative' : 'text-positive') },
        });
        (gasto.tipo === 'gasto' ? '- ' : '+ ');
        (gasto.valor.toFixed(2));
        const __VLS_77 = {}.QBtn;
        /** @type {[typeof __VLS_components.QBtn, typeof __VLS_components.qBtn, ]} */ ;
        // @ts-ignore
        const __VLS_78 = __VLS_asFunctionalComponent(__VLS_77, new __VLS_77({
            ...{ 'onClick': {} },
            flat: true,
            round: true,
            color: "primary",
            icon: "edit",
            size: "sm",
            ...{ class: "q-mr-sm" },
        }));
        const __VLS_79 = __VLS_78({
            ...{ 'onClick': {} },
            flat: true,
            round: true,
            color: "primary",
            icon: "edit",
            size: "sm",
            ...{ class: "q-mr-sm" },
        }, ...__VLS_functionalComponentArgsRest(__VLS_78));
        let __VLS_81;
        let __VLS_82;
        let __VLS_83;
        const __VLS_84 = {
            onClick: (...[$event]) => {
                if (!!(__VLS_ctx.loading))
                    return;
                __VLS_ctx.prepararEdicao(gasto);
            }
        };
        var __VLS_80;
        const __VLS_85 = {}.QBtn;
        /** @type {[typeof __VLS_components.QBtn, typeof __VLS_components.qBtn, ]} */ ;
        // @ts-ignore
        const __VLS_86 = __VLS_asFunctionalComponent(__VLS_85, new __VLS_85({
            ...{ 'onClick': {} },
            flat: true,
            round: true,
            color: (gasto.tipo === 'gasto' ? 'negative' : 'grey'),
            icon: "delete",
            size: "sm",
        }));
        const __VLS_87 = __VLS_86({
            ...{ 'onClick': {} },
            flat: true,
            round: true,
            color: (gasto.tipo === 'gasto' ? 'negative' : 'grey'),
            icon: "delete",
            size: "sm",
        }, ...__VLS_functionalComponentArgsRest(__VLS_86));
        let __VLS_89;
        let __VLS_90;
        let __VLS_91;
        const __VLS_92 = {
            onClick: (...[$event]) => {
                if (!!(__VLS_ctx.loading))
                    return;
                __VLS_ctx.deletarGasto(gasto.id);
            }
        };
        var __VLS_88;
        var __VLS_68;
        var __VLS_64;
    }
    var __VLS_60;
    if (!__VLS_ctx.gastos.length) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: "text-center q-mt-xl text-grey-5" },
        });
        const __VLS_93 = {}.QIcon;
        /** @type {[typeof __VLS_components.QIcon, typeof __VLS_components.qIcon, ]} */ ;
        // @ts-ignore
        const __VLS_94 = __VLS_asFunctionalComponent(__VLS_93, new __VLS_93({
            name: "event_available",
            size: "4em",
        }));
        const __VLS_95 = __VLS_94({
            name: "event_available",
            size: "4em",
        }, ...__VLS_functionalComponentArgsRest(__VLS_94));
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: "text-h6 q-mt-sm" },
        });
    }
}
var __VLS_3;
/** @type {__VLS_StyleScopedClasses['q-pa-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['text-h4']} */ ;
/** @type {__VLS_StyleScopedClasses['text-weight-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['q-mb-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['modern-card']} */ ;
/** @type {__VLS_StyleScopedClasses['q-mb-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['q-pa-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-between']} */ ;
/** @type {__VLS_StyleScopedClasses['q-mb-md']} */ ;
/** @type {__VLS_StyleScopedClasses['text-h6']} */ ;
/** @type {__VLS_StyleScopedClasses['q-mb-md']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow-1']} */ ;
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['q-col-gutter-md']} */ ;
/** @type {__VLS_StyleScopedClasses['col-12']} */ ;
/** @type {__VLS_StyleScopedClasses['col-sm-6']} */ ;
/** @type {__VLS_StyleScopedClasses['col-12']} */ ;
/** @type {__VLS_StyleScopedClasses['col-sm-6']} */ ;
/** @type {__VLS_StyleScopedClasses['col-12']} */ ;
/** @type {__VLS_StyleScopedClasses['col-sm-6']} */ ;
/** @type {__VLS_StyleScopedClasses['col-12']} */ ;
/** @type {__VLS_StyleScopedClasses['col-sm-6']} */ ;
/** @type {__VLS_StyleScopedClasses['col-12']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-end']} */ ;
/** @type {__VLS_StyleScopedClasses['q-px-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-borders']} */ ;
/** @type {__VLS_StyleScopedClasses['text-h6']} */ ;
/** @type {__VLS_StyleScopedClasses['q-mb-md']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-center']} */ ;
/** @type {__VLS_StyleScopedClasses['q-mt-md']} */ ;
/** @type {__VLS_StyleScopedClasses['column']} */ ;
/** @type {__VLS_StyleScopedClasses['q-gutter-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['modern-list-card']} */ ;
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-between']} */ ;
/** @type {__VLS_StyleScopedClasses['q-py-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['q-mr-md']} */ ;
/** @type {__VLS_StyleScopedClasses['text-subtitle1']} */ ;
/** @type {__VLS_StyleScopedClasses['text-weight-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-caption']} */ ;
/** @type {__VLS_StyleScopedClasses['text-grey-5']} */ ;
/** @type {__VLS_StyleScopedClasses['row']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['text-subtitle1']} */ ;
/** @type {__VLS_StyleScopedClasses['text-weight-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['q-mr-md']} */ ;
/** @type {__VLS_StyleScopedClasses['q-mr-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['q-mt-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['text-grey-5']} */ ;
/** @type {__VLS_StyleScopedClasses['text-h6']} */ ;
/** @type {__VLS_StyleScopedClasses['q-mt-sm']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            $q: $q,
            gastos: gastos,
            loading: loading,
            submitting: submitting,
            editMode: editMode,
            categoriasHover: categoriasHover,
            form: form,
            prepararEdicao: prepararEdicao,
            cancelEdit: cancelEdit,
            salvarGasto: salvarGasto,
            deletarGasto: deletarGasto,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=GastosFixos.vue.js.map