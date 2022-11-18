import Link from "next/link";

export default function Example() {
  try {
    return (
      <div className="flex min-h-full flex-col bg-white pt-16 pb-12 -mb-20 notFound2 md:notFound1 md:-mb-20">
        <main className="mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-4 sm:px-6 lg:px-8">
          <div className="flex flex-shrink-0 justify-center"></div>
          <div className="py-16">
            <div className="text-center">
              <p className="text-9xl font-semibold text-indigo-600">404</p>
              <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Page not found.
              </h1>
              <p className="mt-2 text-base text-gray-500">
                Sorry, we couldn’t find the page you’re looking for.
              </p>
              <div className="mt-10">
                <Link href="/">
                  <span className="text-2xl font-medium text-indigo-600 hover:text-indigo-500 cursor-pointer">
                    Go back home
                    <span aria-hidden="true"> &rarr;</span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  } catch (error) {
    console.log("error", error);
  }
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
