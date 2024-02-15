'use client';

import type { EventName } from '@lit/react';
import { createComponent as createComponentWrapper, Options } from '@lit/react';
import React from 'react';
import { defineCustomElement as defineMyComponent, MyComponent as MyComponentElement } from "ui/components/my-component.js";

const createComponent = <T extends HTMLElement, E extends Record<string, EventName | string>>({ defineCustomElement, ...options }: Options<T, E> & { defineCustomElement: () => void }) => {
    if (typeof defineCustomElement !== 'undefined') {
        defineCustomElement();
    }
    return createComponentWrapper<T, E>(options);
};

type MyComponentEvents = NonNullable<unknown>;

export default createComponent<MyComponentElement, MyComponentEvents>({
    tagName: 'my-component',
    elementClass: MyComponentElement,
    react: React,
    events: {} as MyComponentEvents,
    defineCustomElement: defineMyComponent
});
