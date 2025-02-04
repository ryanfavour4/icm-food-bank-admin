import Link from "next/link";

export default function NotFound() {
    return (
        <>
            <section className="">
                <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
                    <div className="mx-auto max-w-screen-sm text-center">
                        <h1 className="mb-4 text-5xl font-extrabold tracking-tight text-primary lg:text-7xl">
                            404
                        </h1>
                        <p className="mb-4 text-2xl font-bold tracking-tight text-textcolor md:text-3xl">
                            Something&apos;s missing.
                        </p>
                        <p className="mb-4 text-base font-light text-textcolor">
                            Sorry, we can&apos;t find that page. You&apos;ll
                            find lots to explore on the dashboard.{" "}
                        </p>
                        <Link
                            href={"/overview"}
                            className="btn-primary mx-auto w-fit"
                        >
                            Back to Dashboard
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
