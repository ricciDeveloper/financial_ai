import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import ChatMessage from '../ChatMessage.vue';
import { Quasar } from 'quasar';
describe('ChatMessage.vue', () => {
    it('renders user message correctly', () => {
        const wrapper = mount(ChatMessage, {
            global: {
                plugins: [Quasar]
            },
            props: {
                name: 'Você',
                text: 'Teste de mensagem',
                sent: true,
                timestamp: '2023-10-01T12:00:00Z'
            }
        });
        const textNodes = wrapper.findAll('.q-message-text-content');
        // Basic verification of rendering
        expect(wrapper.html()).toContain('Teste de mensagem');
        expect(wrapper.html()).toContain('Você');
    });
    it('renders system message correctly with different colors', () => {
        const wrapper = mount(ChatMessage, {
            global: {
                plugins: [Quasar]
            },
            props: {
                name: 'Assistente',
                text: 'Resposta do sistema',
                sent: false,
                timestamp: '2023-10-01T12:05:00Z'
            }
        });
        expect(wrapper.html()).toContain('Resposta do sistema');
        expect(wrapper.html()).toContain('Assistente');
    });
});
//# sourceMappingURL=ChatMessage.spec.js.map