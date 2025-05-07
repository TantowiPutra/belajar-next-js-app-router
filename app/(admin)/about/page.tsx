"use client"

import { dataStore } from "@/store/datastore";
export default function About() {
    const { count, inc } = dataStore();

    return (
        <div>
            Test About Me
            <p>{`Count: ${count}`}</p>
            <button onClick={() => inc()}>Count ++</button>
        </div>
    );
}