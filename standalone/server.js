process.env.NODE_ENV = "production";
process.chdir(__dirname);
const NextServer = require("next/dist/server/next-server").default;
const http = require("http");
const FS = require("fs");
const path = require("path");
const { baseURL } = require("./config");
process.env.baseURL = baseURL;
const routes_manifest = `{"version":3,"pages404":true,"basePath":"","redirects":[{"source":"/:path+/","destination":"/:path+","locale":false,"internal":true,"statusCode":308,"regex":"^(?:/((?:[^/]+?)(?:/(?:[^/]+?))*))/$"}],"headers":[{"source":"/:nextInternalLocale(en\\\\-US)/:path*","headers":[{"key":"X-DNS-Prefetch-Control","value":"on"},{"key":"Strict-Transport-Security","value":"max-age=63072000; includeSubDomains; preload"},{"key":"X-XSS-Protection","value":"1; mode=block"},{"key":"X-Frame-Options","value":"SAMEORIGIN"},{"key":"X-Content-Type-Options","value":"nosniff"}],"regex":"^(?:/(en\\\\-US))(?:/((?:[^/]+?)(?:/(?:[^/]+?))*))?(?:/)?$"}],"dynamicRoutes":[],"staticRoutes":[{"page":"/","regex":"^/(?:/)?$","routeKeys":{},"namedRegex":"^/(?:/)?$"},{"page":"/404","regex":"^/404(?:/)?$","routeKeys":{},"namedRegex":"^/404(?:/)?$"},{"page":"/500","regex":"^/500(?:/)?$","routeKeys":{},"namedRegex":"^/500(?:/)?$"},{"page":"/main/terms-of-service","regex":"^/main/terms\\\\-of\\\\-service(?:/)?$","routeKeys":{},"namedRegex":"^/main/terms\\\\-of\\\\-service(?:/)?$"},{"page":"/main/top-up-gas","regex":"^/main/top\\\\-up\\\\-gas(?:/)?$","routeKeys":{},"namedRegex":"^/main/top\\\\-up\\\\-gas(?:/)?$"}],"dataRoutes":[{"page":"/","dataRouteRegex":"^/_next/data/bz0Ke\\\\-uhzoFfuiTY4tr92/index.json$"},{"page":"/404","dataRouteRegex":"^/_next/data/bz0Ke\\\\-uhzoFfuiTY4tr92/404.json$"},{"page":"/500","dataRouteRegex":"^/_next/data/bz0Ke\\\\-uhzoFfuiTY4tr92/500.json$"},{"page":"/main/terms-of-service","dataRouteRegex":"^/_next/data/bz0Ke\\\\-uhzoFfuiTY4tr92/main/terms-of-service.json$"},{"page":"/main/top-up-gas","dataRouteRegex":"^/_next/data/bz0Ke\\\\-uhzoFfuiTY4tr92/main/top-up-gas.json$"}],"i18n":{"localeDetection":false,"locales":["en-US"],"defaultLocale":"en-US"},"rewrites":[{"source":"/:nextInternalLocale(en\\\\-US)/api/:path*","destination":"${baseURL}/:path*","regex":"^(?:/(en\\\\-US))/api(?:/((?:[^/]+?)(?:/(?:[^/]+?))*))?(?:/)?$"}]}`;

const required_server_files = `{"version":1,"config":{"env":{"baseURL":"${baseURL}"},"webpack":null,"webpackDevMiddleware":null,"eslint":{"ignoreDuringBuilds":false},"typescript":{"ignoreBuildErrors":false,"tsconfigPath":"tsconfig.json"},"distDir":".next","cleanDistDir":true,"assetPrefix":"","configOrigin":"next.config.js","useFileSystemPublicRoutes":true,"generateEtags":true,"pageExtensions":["tsx","ts","jsx","js"],"target":"server","poweredByHeader":true,"compress":true,"analyticsId":"","images":{"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","domains":["tailwindui.com","images.unsplash.com"],"disableStaticImages":false,"minimumCacheTTL":60,"formats":["image/avif","image/webp"],"dangerouslyAllowSVG":false,"contentSecurityPolicy":"script-src 'none'; frame-src 'none'; sandbox;","remotePatterns":[],"unoptimized":false},"devIndicators":{"buildActivity":true,"buildActivityPosition":"bottom-right"},"onDemandEntries":{"maxInactiveAge":15000,"pagesBufferLength":2},"amp":{"canonicalBase":""},"basePath":"","sassOptions":{},"trailingSlash":false,"i18n":{"localeDetection":false,"locales":["en-US"],"defaultLocale":"en-US"},"productionBrowserSourceMaps":false,"optimizeFonts":true,"excludeDefaultMomentLocales":true,"serverRuntimeConfig":{},"publicRuntimeConfig":{},"reactStrictMode":false,"httpAgentOptions":{"keepAlive":true},"outputFileTracing":true,"staticPageGenerationTimeout":60,"swcMinify":true,"output":"standalone","experimental":{"optimisticClientCache":true,"manualClientBasePath":false,"legacyBrowsers":true,"browsersListForSwc":false,"newNextLinkBehavior":false,"cpus":15,"sharedPool":true,"profiling":false,"isrFlushToDisk":true,"workerThreads":false,"pageEnv":false,"optimizeCss":false,"nextScriptWorkers":false,"scrollRestoration":false,"externalDir":false,"disableOptimizedLoading":false,"gzipSize":true,"swcFileReading":true,"craCompat":false,"esmExternals":true,"appDir":false,"isrMemoryCacheSize":52428800,"serverComponents":false,"fullySpecified":false,"outputFileTracingRoot":"","swcTraceProfiling":false,"forceSwcTransforms":false,"largePageDataBytes":128000,"trustHostHeader":false},"configFileName":"next.config.js","compilerOptions":{"baseUrl":".","paths":{"@/components/*":["components/*"],"@/utils":["utils"],"@/utils/*":["utils/*"],"@/lib/*":["lib/*"],"@/public/*":["public/*"]}},"compiler":{"removeConsole":true}},"appDir":"D:\\\\work\\\\Spartan\\\\data-center-portal","files":[".next\\\\routes-manifest.json",".next\\\\server\\\\pages-manifest.json",".next\\\\build-manifest.json",".next\\\\prerender-manifest.json",".next\\\\server\\\\middleware-manifest.json",".next\\\\react-loadable-manifest.json",".next\\\\server\\\\font-manifest.json",".next\\\\BUILD_ID"],"ignore":["node_modules\\\\next\\\\dist\\\\compiled\\\\@ampproject\\\\toolbox-optimizer\\\\**\\\\*"]}`;
FS.writeFileSync('./.next/routes-manifest.json',routes_manifest);
FS.writeFileSync('./.next/required-server-files.json',required_server_files);
// Make sure commands gracefully respect termination signals (e.g. from Docker)
// Allow the graceful termination to be manually configurable
if (!process.env.NEXT_MANUAL_SIG_HANDLE) {
  process.on("SIGTERM", () => process.exit(0));
  process.on("SIGINT", () => process.exit(0));
}

let handler;

const server = http.createServer(async (req, res) => {
  try {
    await handler(req, res);
  } catch (err) {
    console.error(err);
    res.statusCode = 500;
    res.end("internal server error");
  }
});
const currentPort = parseInt(process.env.PORT, 10) || 3000;

server.listen(currentPort, (err) => {
  if (err) {
    console.error("Failed to start server", err);
    process.exit(1);
  }
  const nextServer = new NextServer({
    hostname: "localhost",
    port: currentPort,
    dir: path.join(__dirname),
    dev: false,
    customServer: false,
    conf: {
      env: { baseURL: baseURL },
      webpack: null,
      webpackDevMiddleware: null,
      eslint: { ignoreDuringBuilds: false },
      typescript: { ignoreBuildErrors: false, tsconfigPath: "tsconfig.json" },
      distDir: "./.next",
      cleanDistDir: true,
      assetPrefix: "",
      configOrigin: "next.config.js",
      useFileSystemPublicRoutes: true,
      generateEtags: true,
      pageExtensions: ["tsx", "ts", "jsx", "js"],
      target: "server",
      poweredByHeader: true,
      compress: true,
      analyticsId: "",
      images: {
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        path: "/_next/image",
        loader: "default",
        domains: ["tailwindui.com", "images.unsplash.com"],
        disableStaticImages: false,
        minimumCacheTTL: 60,
        formats: ["image/avif", "image/webp"],
        dangerouslyAllowSVG: false,
        contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
        remotePatterns: [],
        unoptimized: false,
      },
      devIndicators: {
        buildActivity: true,
        buildActivityPosition: "bottom-right",
      },
      onDemandEntries: { maxInactiveAge: 15000, pagesBufferLength: 2 },
      amp: { canonicalBase: "" },
      basePath: "",
      sassOptions: {},
      trailingSlash: false,
      i18n: {
        localeDetection: false,
        locales: ["en-US"],
        defaultLocale: "en-US",
      },
      productionBrowserSourceMaps: false,
      optimizeFonts: true,
      excludeDefaultMomentLocales: true,
      serverRuntimeConfig: {},
      publicRuntimeConfig: {},
      reactStrictMode: false,
      httpAgentOptions: { keepAlive: true },
      outputFileTracing: true,
      staticPageGenerationTimeout: 60,
      swcMinify: true,
      output: "standalone",
      experimental: {
        optimisticClientCache: true,
        manualClientBasePath: false,
        legacyBrowsers: true,
        browsersListForSwc: false,
        newNextLinkBehavior: false,
        cpus: 15,
        sharedPool: true,
        profiling: false,
        isrFlushToDisk: true,
        workerThreads: false,
        pageEnv: false,
        optimizeCss: false,
        nextScriptWorkers: false,
        scrollRestoration: false,
        externalDir: false,
        disableOptimizedLoading: false,
        gzipSize: true,
        swcFileReading: true,
        craCompat: false,
        esmExternals: true,
        appDir: false,
        isrMemoryCacheSize: 52428800,
        serverComponents: false,
        fullySpecified: false,
        outputFileTracingRoot: "",
        swcTraceProfiling: false,
        forceSwcTransforms: false,
        largePageDataBytes: 128000,
        trustHostHeader: false,
      },
      configFileName: "next.config.js",
      compilerOptions: {
        baseUrl: ".",
        paths: {
          "@/components/*": ["components/*"],
          "@/utils": ["utils"],
          "@/utils/*": ["utils/*"],
          "@/lib/*": ["lib/*"],
          "@/public/*": ["public/*"],
        },
      },
      compiler: { removeConsole: true },
    },
  });
  handler = nextServer.getRequestHandler();

  console.log("Listening on port", currentPort);
});
