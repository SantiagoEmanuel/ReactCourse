import { useRouteError } from "react-router-dom";
import { Layout } from "../components/layout/Layout";

export function ErrorView() {
  const { status, statusText, data } = useRouteError();

  return (
    <Layout>
      <section className="flex flex-col items-center gap-12">
        <div className="flex flex-col items-center justify-center gap-8">
          <p>{data}</p>
          <div>
            <i className="opacity-50">
              {statusText} {status}
            </i>
          </div>
        </div>
        <a
          className="rounded-lg bg-orange-600 px-6 py-2 text-xl"
          href="/"
          title="Go to home page"
        >
          Go Home
        </a>
      </section>
    </Layout>
  );
}
