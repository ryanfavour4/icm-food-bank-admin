import React from "react";

export default function PlateFood({ className }: { className?: string }) {
    return (
        <>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 32 32"
                className={className}
            >
                <g fill="currentColor">
                    <path d="M6.82 20.575v3.834A12.48 12.48 0 0 0 16.5 29c4.324 0 8.136-2.196 10.38-5.533v-5.374C26.112 23.136 21.757 27 16.5 27c-4.354 0-8.089-2.65-9.68-6.425m18.21-10.199V8.654a3.3 3.3 0 0 1 .184-1.116A12.46 12.46 0 0 0 16.5 4a12.45 12.45 0 0 0-7.976 2.875l.005.061l.001.027v2.7A10.48 10.48 0 0 1 16.5 6c3.514 0 6.624 1.726 8.53 4.376"></path>
                    <path d="M24.5 16.5a8 8 0 1 1-16 0a8 8 0 0 1 16 0m-8 7a7 7 0 1 0 0-14a7 7 0 0 0 0 14M29.99 7.94c0-.9-.73-1.63-1.63-1.63c-1.3 0-2.34 1.05-2.33 2.34v5.55c0 1.253.726 2.375 1.85 2.883V25.7c0 .52.42.94.94.94h.23c.52 0 .94-.42.94-.94zM6.82 6.31a.68.68 0 0 0-.68.68v2.69c0 .2-.16.35-.35.35c-.2 0-.35-.16-.35-.35V7.02c0-.37-.29-.7-.66-.71c-.39-.01-.71.3-.71.68v2.69c0 .2-.16.35-.35.35c-.2 0-.35-.16-.35-.35V7.02c0-.37-.29-.7-.66-.71c-.39-.01-.71.3-.71.68v4.58c0 .902.437 1.707 1.109 2.209c.601.339.601 1.891.601 1.891v10.02c0 .52.42.94.94.94h.23c.52 0 .94-.42.94-.94V15.67s0-1.491.601-1.891A2.76 2.76 0 0 0 7.53 11.57V6.99a.72.72 0 0 0-.71-.68"></path>
                </g>
            </svg>
        </>
    );
}
