import React from "react";

export default function EventCalender({ className }: { className?: string }) {
    return (
        <>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                className={className}
            >
                <path
                    fill="currentColor"
                    d="M14.885 18q-.877 0-1.496-.62t-.62-1.495t.62-1.497t1.496-.619t1.496.62t.619 1.496t-.62 1.496t-1.495.619m-9.27 3q-.69 0-1.152-.462T4 19.385V6.615q0-.69.463-1.152T5.616 5h1.769V3.308q0-.233.153-.386t.385-.153t.386.153t.153.386V5h7.154V3.27q0-.214.143-.358t.357-.143t.356.143t.144.357V5h1.769q.69 0 1.153.463T20 6.616v12.769q0 .69-.462 1.153T18.384 21zm0-1h12.77q.23 0 .423-.192t.192-.424v-8.768H5v8.769q0 .23.192.423t.423.192M5 9.615h14v-3q0-.23-.192-.423T18.384 6H5.616q-.231 0-.424.192T5 6.616zm0 0V6z"
                ></path>
            </svg>
        </>
    );
}
