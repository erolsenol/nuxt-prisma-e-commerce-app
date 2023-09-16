// composables/useEventBus.ts
import mitt from 'mitt'

interface Product {
    id: number
}

type ApplicationEvents = {
    // translates to: 
    // user:registered -> event name
    // User -> type as payload
    'qweasd': Product
};

export const useEventBus = () => {
    const emitter = mitt<ApplicationEvents>()

    return {
        event: emitter.emit, // Will emit an event
        listen: emitter.on // Will register a listener for an event
    }
}
