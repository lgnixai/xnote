import "reflect-metadata";

import { useEffect, useRef } from 'react';
import { create } from 'aixui';

import extensions from './extensions';

import './styles/globals.scss';

const instance = create({
    extensions: extensions,
    defaultLocale: 'zh-CN',
});


const App = () => {
    const container = useRef<HTMLDivElement>(null);
    useEffect(() => {
        // @ts-ignore
        instance.render( container.current );
        return () => {
            instance.dispose();
        };
    }, []);    // @ts-ignore
    return (
        <div ref={container} />
    );
};
export default App;
